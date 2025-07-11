import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Send, Mail, MessageCircle, Zap, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-primary' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-secondary' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-accent' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@example.com', color: 'hover:text-primary' }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text stagger-item">
          Let's Collaborate
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto stagger-item">
          Have a project in mind? Let's discuss how we can bring your vision to life through thoughtful design and development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <div className="space-y-8">
          <div className="stagger-item">
            <h3 className="text-3xl font-bold mb-4">Send a Message</h3>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and I'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="stagger-item">
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

              <div className="stagger-item">
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
            </div>

            <div className="stagger-item">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project Discussion"
                value={formData.subject}
                onChange={handleInputChange}
                className="bg-card/50 border-border/50 focus:border-primary transition-colors duration-300"
                required
              />
            </div>

            <div className="stagger-item">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="bg-card/50 border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                required
              />
            </div>

            <div className="stagger-item">
              <Button 
                type="submit"
                size="lg"
                className="w-full group bg-gradient-primary hover:shadow-glow text-white border-0 py-6 text-lg hover-lift"
              >
                <Send className="mr-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Info & Illustration */}
        <div className="space-y-8">
          {/* Availability Badge */}
          <div className="stagger-item">
            <Badge className="bg-green-500/10 text-green-500 border-green-500/20 pulse-glow mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Available for New Projects
            </Badge>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4 stagger-item">
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">hello@alexcreative.dev</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Response Time</h4>
                  <p className="text-muted-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Project Timeline</h4>
                  <p className="text-muted-foreground">2-8 weeks typical</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="stagger-item">
            <h4 className="text-xl font-semibold mb-6">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`group w-12 h-12 rounded-xl bg-card/50 border border-border/50 flex items-center justify-center transition-all duration-300 hover:border-primary/50 hover-bounce ${social.color}`}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                </a>
              ))}
            </div>
          </div>

          {/* Decorative Illustration */}
          <div className="relative mt-12 stagger-item">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 h-64">
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-primary rounded-xl opacity-20 float" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-secondary rounded-full opacity-30 float" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-hero rounded-2xl opacity-15 float" style={{ animationDelay: '1s' }} />
              
              {/* Center Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 flex items-center justify-center pulse-glow">
                  <Send className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;