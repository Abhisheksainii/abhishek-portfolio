import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Mobile App Developer",
      company: "FieldAssist Pvt. Ltd.",
      website:"https://fieldassist.com/",
      period: "2023 — Present",
      description: "Lead development of scalable mobile applications serving 50k+ users. Architected state management and mentored junior developers.",
      technologies: ["Flutter", "Dart", "Firebase"],
      achievements: [
        "Engineered a biometric Face Detection unlock feature utilizing Google ML Kit, resulting in a 40% reduction in user-reported security breaches and enhanced data protection for high-profile B2B clients.",
        "Strengthened the MVVM architecture and redesigned whole UI to onboard a high-profile client, resulting in an increase in net revenue of the company by 40%.",
        "Developed and implemented automated unit testing suites using Dart, achieving 95% code coverage across core modules and reducing post-release bug reports by 40% within one year.",
        "Migrated application's state management architecture from Provider to BLoC, decreasing memory consumption by 60% and improving application responsiveness by 35% for users on low-end devices.",
        "Spearheaded bi-weekly code review sessions, evaluating over 10 pull requests monthly and providing actionable feedback, accelerating code delivery timelines by 20% and ensuring architectural alignment.",
        "Mentored two interns through active feedback and code reviews on pull requests, resulting in interns producing 50% fewer bugs and gaining deeper understanding of the product codebase.",
        
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Adaelo",
      website: "https://adaelo.com",
      period: "2020 — 2022",
      description: "Developed responsive web applications and mobile applications and collaborated with design team to create intuitive user interfaces.",
      technologies: ["Flutter", "JavaScript", "Dart", "Firebase", "Go", "Google Cloud"],
      achievements: [
          "Developed a modular and scalable front-end architecture using Flutter Web and Riverpod, leading to a 30% reduction in bug reports and improved code maintainability across the team",
          "Established CI/CD pipelines with GitHub Actions, which automated testing, building, and deployment processes; increased deployment frequency by 60% and reduced deployment times by 20%.",
          "Optimized Firebase Firestore queries, cutting database read times by 60%, and implemented cloud functions for seamless automation.",
          "Integrated Stripe payments as a payment gateway which reduced checkout failures by 30%.",
      ]
    },
    {
      title: "Junior Flutter Developer",
      company: "Fitelo Pvt. Ltd.",
      website: "https://fitelo.co",
      period: "2019 — 2020",
      description: "Created mobile interfaces and collaborated with design team to create intuitive user interfaces.",
      technologies: ["Flutter", "Dart", "Firebase"],
      achievements: [
        "Spearheaded development of five proof-of-concept features for the wellness app, delivering rapid prototypes within two-week sprints and incorporating user feedback to refine functionality and improve user experience.",
        "Engineered intuitive user interfaces using Flutter and integrated seamlessly with backend APIs, resulting in a 30% improvement in user engagement and a 20% decrease in user drop-off rates.",
        "Diagnosed and resolved performance bottlenecks in the app's data processing module, resulting in a 40% decrease in latency and a 25% improvement in overall app responsiveness.",
      "Diagnosed and resolved performance bottlenecks in the app's data processing module, resulting in a 40% decrease in latency and a 25% improvement in overall app responsiveness."
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