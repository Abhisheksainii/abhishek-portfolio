import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-primary glow-text">Portfolio</h1>
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="nav-link">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="nav-link">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="nav-link">
                Projects
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="nav-link">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contact
              </button>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:contact@example.com">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;