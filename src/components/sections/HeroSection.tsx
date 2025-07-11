
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Sparkles, Send } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <Badge 
        variant="outline" 
        className="absolute top-32 right-32 pulse-glow border-primary/50 bg-primary/10 text-primary hover-bounce"
      >
        <Sparkles className="w-3 h-3 mr-1" />
        Available for Hire
      </Badge>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
          <span className="stagger-item block gradient-text">Crafting</span>
          <span className="stagger-item block">Ideas Into</span>
          <span className="stagger-item block gradient-text">Experiences</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto stagger-item">
          Creative developer & designer passionate about building digital experiences 
          that inspire, engage, and tell meaningful stories through code and design.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center stagger-item">
          <Button 
            onClick={scrollToWork}
            size="lg" 
            className="group bg-gradient-primary hover:shadow-glow text-white border-0 px-8 py-6 text-lg hover-lift"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="lg"
                className="group border-primary/50 hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg hover-glow ml-4"
              >
                Let's Connect
                <Sparkles className="ml-2 w-5 h-5 transition-transform group-hover:rotate-12" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold gradient-text">Let's Connect</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-card/50 border-border/50 focus:border-primary transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-card/50 border-border/50 focus:border-primary transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-card/50 border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full group bg-gradient-primary hover:shadow-glow text-white border-0 py-3 text-lg hover-lift"
                >
                  <Send className="mr-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  Send Message
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 stagger-item">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
