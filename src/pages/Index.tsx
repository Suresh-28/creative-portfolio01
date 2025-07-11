import React from 'react';
import CustomCursor from '@/components/CustomCursor';
import ThemeToggle from '@/components/ThemeToggle';
import HeroSection from '@/components/sections/HeroSection';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import FeaturedProject from '@/components/sections/FeaturedProject';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Portfolio Grid */}
        <section id="work">
          <PortfolioGrid />
        </section>
        
        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>
        
        {/* Skills Section */}
        <section id="skills">
          <SkillsSection />
        </section>
        
        {/* Featured Project */}
        <FeaturedProject />
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
