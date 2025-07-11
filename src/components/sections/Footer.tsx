import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, Heart, Coffee, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' }
  ];

  const quickLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative py-24 px-6 overflow-hidden border-t border-border/50">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-secondary rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Animated Signature Logo */}
            <div className="stagger-item">
              <svg
                width="120"
                height="60"
                viewBox="0 0 120 60"
                className="text-primary"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 45 Q20 15 30 25 Q40 35 50 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="animate-pulse"
                  style={{
                    strokeDasharray: '100',
                    strokeDashoffset: '100',
                    animation: 'stroke-draw 3s ease-in-out infinite'
                  }}
                />
                <circle
                  cx="60"
                  cy="30"
                  r="8"
                  fill="currentColor"
                  className="opacity-80"
                />
                <path
                  d="M75 45 L85 15 L95 35 L105 25"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="animate-pulse"
                  style={{
                    strokeDasharray: '80',
                    strokeDashoffset: '80',
                    animation: 'stroke-draw 3s ease-in-out infinite 0.5s'
                  }}
                />
              </svg>
            </div>

            <div className="stagger-item">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Alex Creative
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Crafting digital experiences that inspire and engage. 
                Always pushing the boundaries of design and technology.
              </p>
              
              {/* Fun Stats */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-accent" />
                  <span>1000+ Cups of Coffee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>Made with Love</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="stagger-item">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="stagger-item">
            <h4 className="text-lg font-semibold mb-6">Connect</h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <social.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0 stagger-item">
            © 2024 Alex Creative. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 stagger-item">
            <span className="text-muted-foreground text-sm">
              Built with React & Love
            </span>
            
            {/* Scroll to Top Button */}
            <Button
              onClick={scrollToTop}
              size="icon"
              variant="outline"
              className="group border-primary/50 hover:bg-primary/10 hover:border-primary hover-bounce"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
            </Button>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;