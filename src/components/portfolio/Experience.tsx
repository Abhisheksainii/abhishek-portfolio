import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      website: "https://techcorp.com",
      period: "2022 — Present",
      description: "Lead development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
      achievements: [
        "Reduced page load times by 40% through optimization strategies",
        "Led team of 5 developers on major product redesign",
        "Implemented CI/CD pipeline improving deployment efficiency by 60%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      website: "https://startupxyz.com",
      period: "2020 — 2022",
      description: "Developed responsive web applications and collaborated with design team to create intuitive user interfaces.",
      technologies: ["Vue.js", "JavaScript", "Sass", "Firebase"],
      achievements: [
        "Built component library used across 3 product lines",
        "Increased user engagement by 35% through UX improvements",
        "Established coding standards and best practices"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency Pro",
      website: "https://digitalagency.com",
      period: "2019 — 2020",
      description: "Created custom websites for clients across various industries. Gained experience in full project lifecycle from concept to deployment.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
      achievements: [
        "Delivered 25+ client projects on time and budget",
        "Improved agency's development workflow",
        "Received 'Rising Star' award for exceptional performance"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary font-mono text-lg">02.</span> Where I've Worked
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-glow p-6 bg-card animate-slide-up">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <a 
                        href={exp.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors flex items-center space-x-1"
                      >
                        <span className="font-semibold">{exp.company}</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="text-muted-foreground text-sm font-mono mb-4">
                      {exp.period}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;