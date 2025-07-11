import React, { useEffect, useState } from 'react';

interface CursorTrail {
  x: number;
  y: number;
  id: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<CursorTrail[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    let trailId = 0;

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add trail particle
      const newTrail: CursorTrail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++
      };

      setTrails(prev => [...prev.slice(-8), newTrail]);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        setIsHovering(true);
        setCursorVariant('button');
      } else if (target.tagName === 'IMG' || target.closest('.image-hover')) {
        setIsHovering(true);
        setCursorVariant('image');
      } else if (target.closest('.text-content')) {
        setIsHovering(true);
        setCursorVariant('text');
      } else {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Clean up old trails
  useEffect(() => {
    const cleanup = setTimeout(() => {
      setTrails(prev => prev.slice(-5));
    }, 100);

    return () => clearTimeout(cleanup);
  }, [trails]);

  const getCursorStyles = () => {
    const baseStyles = {
      left: position.x - 10,
      top: position.y - 10,
      transform: isHovering ? 'scale(1.5)' : 'scale(1)',
    };

    switch (cursorVariant) {
      case 'button':
        return {
          ...baseStyles,
          background: 'hsl(var(--accent))',
          mixBlendMode: 'normal' as const,
        };
      case 'image':
        return {
          ...baseStyles,
          background: 'hsl(var(--secondary))',
          transform: isHovering ? 'scale(2)' : 'scale(1)',
        };
      case 'text':
        return {
          ...baseStyles,
          background: 'hsl(var(--primary))',
          opacity: 0.7,
        };
      default:
        return baseStyles;
    }
  };

  return (
    <>
      {/* Main cursor */}
      <div 
        className="custom-cursor"
        style={getCursorStyles()}
      />
      
      {/* Cursor glow */}
      <div 
        className="cursor-glow"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          opacity: isHovering ? 0.8 : 0.3,
        }}
      />
      
      {/* Trail particles */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 2,
            top: trail.y - 2,
            opacity: (index + 1) / trails.length * 0.6,
            transform: `scale(${(index + 1) / trails.length})`,
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;