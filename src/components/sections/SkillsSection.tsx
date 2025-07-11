import React from 'react';

// Create SVG icons as components for better customization
const FigmaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="currentColor"/>
    <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="currentColor"/>
    <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="currentColor"/>
    <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="currentColor"/>
    <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="currentColor"/>
  </svg>
);

const ReactIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.121zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z" fill="currentColor"/>
  </svg>
);

const BlenderIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.029 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.375.974 3.39 3.39 0 0 1-2.376-.974c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.946 8.946 0 0 0 3.66.76 8.946 8.946 0 0 0 3.66-.76 8.227 8.227 0 0 0 2.787-2.001 7.372 7.372 0 0 0 1.593-2.757c.15-.476.25-1.084.256-1.398a9.454 9.454 0 0 0-.761-4.244 10.016 10.016 0 0 0-2.852-3.663A10.643 10.643 0 0 0 16.646 4.9a11.25 11.25 0 0 0-4.294-.838 11.25 11.25 0 0 0-4.295.838A10.643 10.643 0 0 0 4.374 6.924a10.016 10.016 0 0 0-2.852 3.663 9.454 9.454 0 0 0-.76 4.244" fill="currentColor"/>
  </svg>
);

const PhotoshopIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.85 8.42c0-.62-.46-.92-1.23-.92H7.5v1.88h1.17c.75 0 1.18-.32 1.18-.96zm6.3.8c-.67 0-1.11.38-1.26 1.02h2.47c-.05-.64-.43-1.02-1.21-1.02zM24 4.41v15.18c0 2.23-1.8 4.03-4.03 4.03H4.03A4.03 4.03 0 0 1 0 19.59V4.41c0-2.23 1.8-4.03 4.03-4.03h15.94c2.23 0 4.03 1.8 4.03 4.03zm-8.85 9.11c0-1.57-1.16-2.67-3.01-2.67h-2.13v5.25h1.2v-1.9h.93c1.85 0 3.01-1.1 3.01-2.68zm-8.55-2.67H4.5v8.04h1.2v-2.97h1.39c1.54 0 2.73-1.06 2.73-2.54s-1.2-2.53-2.75-2.53zm12.9 2.68c0-1.66-1.17-2.67-2.8-2.67-1.63 0-2.8 1.01-2.8 2.67 0 1.66 1.17 2.67 2.8 2.67 1.63 0 2.8-1.01 2.8-2.67z" fill="currentColor"/>
  </svg>
);

const skills = [
  { name: 'Figma', icon: FigmaIcon, category: 'Design' },
  { name: 'React', icon: ReactIcon, category: 'Development' },
  { name: 'Blender', icon: BlenderIcon, category: '3D' },
  { name: 'Photoshop', icon: PhotoshopIcon, category: 'Design' },
  { name: 'TypeScript', icon: ReactIcon, category: 'Development' },
  { name: 'After Effects', icon: PhotoshopIcon, category: 'Motion' },
  { name: 'WebGL', icon: BlenderIcon, category: '3D' },
  { name: 'Sketch', icon: FigmaIcon, category: 'Design' },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text stagger-item">
            Tools & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto stagger-item">
            A curated selection of tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group cursor-pointer stagger-item`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift">
                {/* Icon */}
                <div className="relative mb-4">
                  <skill.icon className="w-12 h-12 mx-auto text-muted-foreground group-hover:text-primary transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" />
                  
                  {/* Orbit Animation */}
                  <div className="absolute inset-0 w-16 h-16 -m-2 border border-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-spin" style={{ animationDuration: '3s' }} />
                </div>

                {/* Tool Name */}
                <h3 className="text-lg font-semibold text-center mb-2 group-hover:gradient-text transition-all duration-300">
                  {skill.name}
                </h3>
                
                {/* Category */}
                <p className="text-sm text-muted-foreground text-center">
                  {skill.category}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8 stagger-item">
            Always learning and exploring new technologies to stay at the forefront of digital innovation
          </p>
          
          {/* Floating Elements */}
          <div className="flex justify-center items-center gap-8 flex-wrap stagger-item">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>Continuous Learning</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span>Industry Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;