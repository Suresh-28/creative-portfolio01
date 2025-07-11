import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, CheckCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechFlow Inc",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
    content: "Alex transformed our vision into a stunning reality. The attention to detail and user experience was exceptional. Our conversion rates increased by 40% after the redesign.",
    rating: 5,
    verified: true
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Creative Director",
    company: "Pixelate Studio",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Working with Alex was an absolute pleasure. The creativity and technical expertise delivered results beyond our expectations. Highly recommended for any creative project.",
    rating: 5,
    verified: true
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Startup Founder",
    company: "InnovateLab",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "Alex understood our startup's vision perfectly and created a brand identity that truly represents who we are. The entire process was smooth and collaborative.",
    rating: 5,
    verified: true
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const currentTestimonial = testimonials[currentIndex];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    
    let index = 0;
    const text = currentTestimonial.content;
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [currentTestimonial]);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text stagger-item">
          Client Stories
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto stagger-item">
          What clients say about working with me and the impact of our collaborations
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Main Testimonial Card */}
        <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-12 hover-lift">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-12">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="text-center mb-8">
            <div className="text-2xl md:text-3xl font-light text-muted-foreground mb-8 min-h-[120px] flex items-center justify-center">
              <span className="relative">
                "{displayedText}"
                {isTyping && (
                  <span className="absolute -right-1 top-0 w-0.5 h-8 bg-primary animate-pulse" />
                )}
              </span>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5 text-accent fill-accent"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>

          {/* Client Info */}
          <div className="flex items-center justify-center gap-6">
            {/* Avatar */}
            <div className="relative group">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-300" style={{ animationDuration: '3s' }} />
            </div>

            {/* Client Details */}
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-xl font-semibold">{currentTestimonial.name}</h4>
                {currentTestimonial.verified && (
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover-bounce">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified Client
                  </Badge>
                )}
              </div>
              <p className="text-primary font-medium">{currentTestimonial.role}</p>
              <p className="text-muted-foreground">{currentTestimonial.company}</p>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-secondary rounded-full blur-2xl opacity-10" />
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift cursor-pointer ${
                index === currentIndex ? 'bg-primary/5 border-primary/30' : 'bg-card/30'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-sm">{testimonial.name}</h5>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-accent fill-accent" />
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-3">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;