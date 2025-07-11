
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Target } from 'lucide-react';
import CustomCursor from '@/components/CustomCursor';
import ThemeToggle from '@/components/ThemeToggle';

const projectData = {
  'brand-identity-system': {
    title: 'Brand Identity System',
    category: 'Brand Design',
    description: 'A comprehensive brand identity system created for a modern tech startup, including logo design, typography, color palette, and brand guidelines.',
    longDescription: 'This project involved creating a complete visual identity for a cutting-edge technology startup. The challenge was to create a brand that felt both approachable and professional, modern yet timeless. The solution involved extensive research into the target market, competitor analysis, and multiple design iterations.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop',
    technologies: ['Adobe Illustrator', 'Figma', 'After Effects', 'Photoshop'],
    timeline: '6 weeks',
    client: 'TechFlow Inc.',
    role: 'Brand Designer',
    challenges: [
      'Creating a unique identity in a saturated market',
      'Balancing modernity with timeless appeal',
      'Ensuring scalability across all mediums'
    ],
    solutions: [
      'Developed a flexible logo system with multiple variations',
      'Created comprehensive brand guidelines',
      'Designed assets for both digital and print applications'
    ],
    results: [
      '40% increase in brand recognition',
      'Successful launch across all platforms',
      'Positive feedback from stakeholders'
    ]
  },
  'ecommerce-platform': {
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A modern, responsive e-commerce platform built with React and Node.js, featuring advanced search, payment integration, and admin dashboard.',
    longDescription: 'This full-stack e-commerce solution was built to handle high-volume transactions while maintaining exceptional user experience. The platform includes advanced features like real-time inventory management, AI-powered recommendations, and comprehensive analytics.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    timeline: '12 weeks',
    client: 'RetailMax',
    role: 'Full Stack Developer',
    challenges: [
      'Handling high-volume concurrent users',
      'Implementing secure payment processing',
      'Creating an intuitive admin interface'
    ],
    solutions: [
      'Implemented Redis caching for improved performance',
      'Used Stripe for secure payment processing',
      'Built a comprehensive admin dashboard with analytics'
    ],
    results: [
      '99.9% uptime achieved',
      '300% increase in conversion rates',
      'Successfully handles 10,000+ daily transactions'
    ]
  },
  'mobile-banking-app': {
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    description: 'A secure and intuitive mobile banking application focused on user experience, accessibility, and advanced security features.',
    longDescription: 'This mobile banking app was designed with security and usability as top priorities. The challenge was to create an interface that felt both secure and approachable, while accommodating users of all technical skill levels.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
    technologies: ['Figma', 'Protopie', 'Principle', 'Adobe XD'],
    timeline: '8 weeks',
    client: 'SecureBank',
    role: 'UI/UX Designer',
    challenges: [
      'Balancing security with user-friendliness',
      'Creating accessible design for all users',
      'Streamlining complex banking processes'
    ],
    solutions: [
      'Implemented biometric authentication',
      'Created clear visual hierarchy',
      'Designed intuitive navigation patterns'
    ],
    results: [
      '95% user satisfaction rate',
      '60% reduction in support tickets',
      'Increased user engagement by 40%'
    ]
  },
  'saas-dashboard': {
    title: 'SaaS Dashboard',
    category: 'Product Design',
    description: 'A comprehensive analytics dashboard for SaaS companies, featuring real-time data visualization and customizable widgets.',
    longDescription: 'This dashboard was designed to help SaaS companies track their key metrics and make data-driven decisions. The interface needed to display complex data in an easily digestible format while remaining highly customizable.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    technologies: ['React', 'D3.js', 'TypeScript', 'Chart.js'],
    timeline: '10 weeks',
    client: 'DataMetrics Pro',
    role: 'Product Designer & Developer',
    challenges: [
      'Displaying complex data clearly',
      'Creating customizable layouts',
      'Ensuring real-time performance'
    ],
    solutions: [
      'Implemented modular widget system',
      'Used efficient data visualization libraries',
      'Created drag-and-drop dashboard builder'
    ],
    results: [
      'Improved decision-making speed by 50%',
      'Reduced data analysis time by 70%',
      'High user adoption rate of 85%'
    ]
  },
  '3d-product-showcase': {
    title: '3D Product Showcase',
    category: '3D Design',
    description: 'An interactive 3D product visualization platform using WebGL and Three.js, allowing customers to explore products in detail.',
    longDescription: 'This project involved creating an immersive 3D product showcase that allows customers to interact with products before purchase. The challenge was to create high-quality 3D experiences that work smoothly across all devices.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=800&fit=crop',
    technologies: ['Three.js', 'Blender', 'WebGL', 'React'],
    timeline: '14 weeks',
    client: 'LuxuryGoods Co.',
    role: '3D Developer & Designer',
    challenges: [
      'Creating realistic 3D models',
      'Optimizing for web performance',
      'Ensuring cross-device compatibility'
    ],
    solutions: [
      'Implemented LOD (Level of Detail) system',
      'Used efficient compression techniques',
      'Created fallback options for low-end devices'
    ],
    results: [
      '45% increase in product engagement',
      '25% boost in conversion rates',
      'Reduced product returns by 30%'
    ]
  },
  'creative-agency-site': {
    title: 'Creative Agency Site',
    category: 'Web Design',
    description: 'An award-winning creative agency website featuring custom animations, interactive elements, and a unique design approach.',
    longDescription: 'This website was created for a creative agency that needed to showcase their portfolio in a way that would set them apart from competitors. The focus was on creating memorable interactions and animations that would leave a lasting impression.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    technologies: ['Next.js', 'GSAP', 'Framer Motion', 'CSS3'],
    timeline: '16 weeks',
    client: 'Pixel Perfect Agency',
    role: 'Creative Developer',
    challenges: [
      'Creating unique interactive experiences',
      'Maintaining performance with complex animations',
      'Balancing creativity with usability'
    ],
    solutions: [
      'Implemented custom GSAP animations',
      'Used intersection observers for performance',
      'Created modular animation system'
    ],
    results: [
      'Won "Best Web Design" award',
      '200% increase in client inquiries',
      'Featured in multiple design publications'
    ]
  }
};

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = slug ? projectData[slug as keyof typeof projectData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <CustomCursor />
        <ThemeToggle />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <ThemeToggle />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {project.category}
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text stagger-item">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto stagger-item">
              {project.description}
            </p>
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center stagger-item">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Timeline</h3>
              <p className="text-muted-foreground">{project.timeline}</p>
            </div>
            <div className="text-center stagger-item">
              <User className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Client</h3>
              <p className="text-muted-foreground">{project.client}</p>
            </div>
            <div className="text-center stagger-item">
              <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Role</h3>
              <p className="text-muted-foreground">{project.role}</p>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl mb-12 stagger-item">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <div className="mb-16 stagger-item">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Project Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-16 stagger-item">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-base px-4 py-2 bg-muted/50 hover:bg-primary/10 transition-colors duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="stagger-item">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Challenges</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="stagger-item">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Solutions</h2>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results */}
          <div className="mb-16 stagger-item">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.results.map((result, index) => (
                <div key={index} className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <p className="text-center font-medium">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center stagger-item">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-gradient-primary hover:shadow-glow text-white border-0">
                <ExternalLink className="mr-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                View Live Project
              </Button>
              <Button variant="outline" size="lg" className="group border-primary/50 hover:bg-primary/10 hover:border-primary">
                <Github className="mr-2 w-5 h-5 transition-transform group-hover:rotate-12" />
                View Source Code
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
