import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Heart, Coffee, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <div className="relative group">
          <div className="relative z-10">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl image-hover">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face"
                alt="Creative professional"
                className="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-4 float">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-4 float" style={{ animationDelay: '0.5s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">200+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>
          
          {/* Background Decoration */}
          <div className="absolute top-8 left-8 w-full h-full bg-gradient-primary rounded-3xl opacity-10 -z-10 group-hover:rotate-3 transition-transform duration-500" />
        </div>

        {/* Content Side */}
        <div className="space-y-8 text-content">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 stagger-item">
              Hi, I'm <span className="gradient-text">Alex</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 stagger-item">
              A passionate creative developer who bridges the gap between design and technology. 
              I believe that great digital experiences come from the perfect harmony of 
              beautiful design and clean, efficient code.
            </p>
            <p className="text-lg text-muted-foreground stagger-item">
              When I'm not crafting pixels or writing code, you'll find me exploring new 
              design trends, contributing to open-source projects, or sharing knowledge 
              with the creative community.
            </p>
          </div>

          {/* Highlight Labels */}
          <div className="flex flex-wrap gap-4 stagger-item">
            <Badge className="bg-primary/10 text-primary border-primary/20 hover-bounce">
              <Heart className="w-3 h-3 mr-1" />
              Self-Taught
            </Badge>
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 hover-bounce">
              <Coffee className="w-3 h-3 mr-1" />
              Coffee Enthusiast
            </Badge>
            <Badge className="bg-accent/10 text-accent border-accent/20 hover-bounce">
              <Zap className="w-3 h-3 mr-1" />
              Multidisciplinary
            </Badge>
          </div>

          {/* Skills List */}
          <div className="stagger-item">
            <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'UI/UX Design',
                'Frontend Development',
                'Brand Identity',
                '3D Visualization',
                'Motion Graphics',
                'Creative Direction'
              ].map((skill, index) => (
                <div 
                  key={skill}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-colors duration-300 hover-lift"
                >
                  <div className="w-2 h-2 bg-gradient-primary rounded-full" />
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="stagger-item">
            <Button 
              size="lg"
              className="group bg-gradient-secondary hover:shadow-glow text-white border-0 px-8 py-6 text-lg hover-lift"
            >
              <Download className="mr-2 w-5 h-5 transition-transform group-hover:translate-y-1" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;