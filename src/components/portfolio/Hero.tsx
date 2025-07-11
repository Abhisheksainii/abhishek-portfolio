import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <p className="text-primary text-lg mb-4 font-mono">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
              Abhishek Saini
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-muted-foreground">
              I build exceptional digital experiences.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              I'm a passionate full-stack developer specializing in building accessible, 
              pixel-perfect Mobile and Web applications. Currently focused on creating innovative 
              solutions that bridge design and functionality.
            </p>
          </div>
          
          <div className="animate-slide-up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity px-8 py-3"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="flex justify-center space-x-6 mb-12">
              <a href="https://github.com/Abhisheksainii" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/abhishek-saini-9885941bb/" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:abhisheksaini1219@gmail.com"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;