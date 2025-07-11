import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
            
              <p className="text-muted-foreground text-sm mt-1">
                © {currentYear} Abhishek Saini. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/Abhisheksainii"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abhishek-saini-9885941bb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:abhisheksaini1219@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-xs">
              Inspired by the amazing work of developers in the community. 
              <br className="hidden sm:inline" />
              Designed & Built by Abhishek Saini
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;