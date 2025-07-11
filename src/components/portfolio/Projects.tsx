import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Folder } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Adaelo",
      description: "Adaelo is a music streaming platform built with Flutter and Firebase connecting artists with their fans, patrons, and collaborators.",
      image: "/api/placeholder/600/400",
      technologies: [ "PostgreSQL", "Stripe", "Google Cloud", "Firebase", "Flutter", "Dart", "Go"],
 
      live: "https://adaelo.com",
      featured: true
    },
    {
      title: "Ndjoyit App",
      description: "A collaborative and community focused social media application with real-time updates and team collaboration features.",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Firebase", "Google Cloud"],
      live: "https://ndjoyit.tech/",
      featured: true
    },
    {
      title: "IIN App and Dashboard",
      description: "India’s Impact Network (IIN) is a dynamic platform designed to connect, empower, and mobilize young change makers across India. Built for students, aspiring entrepreneurs, and passionate leaders, IIN bridges grassroots energy with national-level opportunities.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Flutter", "Firebase"],
  
      live: "https://indiasimpactnetwork.com/",
      featured: true
    }
  ];



  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary font-mono text-lg">03.</span> Some Things I've Built
          </h2>
          
          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <div key={index} className={`grid lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="card-glow bg-card overflow-hidden">
                    <div className="aspect-video bg-gradient-primary/20 flex items-center justify-center">
                      <div className="text-primary/60 text-4xl">
                        <Folder className="h-16 w-16" />
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div className={`lg:col-span-5 space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''} animate-slide-up`}>
                  <p className="text-primary font-mono text-sm">Featured Project</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  
                  <Card className="card-glow p-6 bg-secondary">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </Card>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-sm font-mono text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`flex space-x-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Other Projects */}
          {/* <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Other Noteworthy Projects</h3>
            <p className="text-muted-foreground">A few more projects worth mentioning</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="card-glow p-6 bg-card group animate-slide-up">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="h-8 w-8 text-primary" />
                  <div className="flex space-x-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="hover:text-primary">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
                
                <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
