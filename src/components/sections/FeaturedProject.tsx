import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Award, ExternalLink } from 'lucide-react';

const FeaturedProject: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card via-card/80 to-background border border-border/50">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-12">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex items-center gap-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 hover-bounce">
                <Award className="w-3 h-3 mr-1" />
                Featured Project
              </Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20 pulse-glow">
                New
              </Badge>
            </div>

            {/* Project Info */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4 stagger-item">
                <span className="gradient-text">Immersive</span> Shopping Experience
              </h3>
              <p className="text-xl text-muted-foreground mb-6 stagger-item">
                A revolutionary e-commerce platform that combines AR technology with 
                seamless UX design, allowing customers to visualize products in their 
                own space before purchase.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 stagger-item">
              <h4 className="text-xl font-semibold mb-4">Key Features</h4>
              {[
                'Augmented Reality Product Preview',
                'AI-Powered Recommendations',
                'Seamless Mobile Experience',
                'Real-time Inventory Management'
              ].map((feature, index) => (
                <div 
                  key={feature}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-primary rounded-full" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="stagger-item">
              <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Three.js', 'WebXR', 'Node.js', 'MongoDB', 'AWS'].map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-muted/50 hover:bg-primary/10 transition-colors duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-4 stagger-item">
              <Button 
                size="lg"
                className="group bg-gradient-primary hover:shadow-glow text-white border-0 px-6 py-3 hover-lift"
              >
                <ExternalLink className="mr-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                View Live Project
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group border-primary/50 hover:bg-primary/10 hover:border-primary px-6 py-3 hover-glow"
              >
                Case Study
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Main Project Image */}
            <div className="relative overflow-hidden rounded-2xl image-hover group">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                alt="Featured project showcase"
                className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating UI Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50 flex items-center justify-center float">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg" />
              </div>
              
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50 p-3 float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-primary rounded-full blur-xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;