import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Palette, Code, Smartphone, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  icon: React.ElementType;
  label: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Identity System",
    category: "Brand Design",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    icon: Palette,
    label: "Design",
    description: "Complete visual identity including logo, typography, and brand guidelines",
    technologies: ["Illustrator", "Figma", "After Effects"]
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    icon: Code,
    label: "Development",
    description: "Modern e-commerce platform with seamless user experience",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    icon: Smartphone,
    label: "Mobile",
    description: "Intuitive banking app design focused on security and usability",
    technologies: ["Figma", "Protopie", "Principle"]
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    icon: Globe,
    label: "SaaS",
    description: "Analytics dashboard with data visualization and real-time updates",
    technologies: ["React", "D3.js", "TypeScript"]
  },
  {
    id: 5,
    title: "3D Product Showcase",
    category: "3D Design",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    icon: Palette,
    label: "3D",
    description: "Interactive 3D product visualization with WebGL",
    technologies: ["Three.js", "Blender", "WebGL"]
  },
  {
    id: 6,
    title: "Creative Agency Site",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    icon: Code,
    label: "Agency",
    description: "Award-winning agency website with custom animations",
    technologies: ["Next.js", "GSAP", "Framer Motion"]
  }
];

const PortfolioGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
          Featured Work
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of projects that showcase my passion for creating 
          meaningful digital experiences across various mediums.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group cursor-pointer stagger-item hover-lift`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden image-hover">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Label */}
                <Badge 
                  className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground"
                >
                  <project.icon className="w-3 h-3 mr-1" />
                  {project.label}
                </Badge>

                {/* Hover Actions */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover-bounce">
                    <ExternalLink className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover-bounce">
                    <Github className="w-4 h-4 text-secondary-foreground" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-primary font-medium">
                    {project.category}
                  </span>
                  <project.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:rotate-12" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-muted/50 hover:bg-primary/10 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;