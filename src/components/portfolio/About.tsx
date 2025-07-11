import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js",
    "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "GraphQL"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary font-mono text-lg">01.</span> About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm John, a passionate full-stack developer with over 5 years of experience 
                  crafting digital solutions that make a difference. My journey in web development 
                  started back in 2019 when I built my first portfolio website, and I've been 
                  hooked ever since.
                </p>
                
                <p>
                  I specialize in building exceptional digital experiences that are accessible, 
                  performant, and user-friendly. Whether it's a responsive web application, 
                  a complex backend system, or a mobile app, I enjoy turning ideas into reality 
                  through clean, efficient code.
                </p>
                
                <p>
                  I've had the privilege of working with startups, established companies, and 
                  individual clients, helping them achieve their digital goals. I believe in 
                  continuous learning and staying up-to-date with the latest technologies and 
                  best practices in the industry.
                </p>
                
                <p>Here are a few technologies I've been working with recently:</p>
                
                <div className="grid grid-cols-2 gap-2 mt-6">
                  {skills.map((skill, index) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <span className="text-primary">▹</span>
                      <span className="font-mono text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in">
              <Card className="card-glow p-6 bg-card">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-primary rounded-lg opacity-25 group-hover:opacity-40 transition-opacity blur"></div>
                  <div className="relative bg-card rounded-lg p-6">
                    <div className="aspect-square bg-gradient-primary rounded-lg flex items-center justify-center text-6xl font-bold text-primary-foreground">
                      JD
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold mb-2">John Developer</h3>
                  <p className="text-primary text-sm font-mono">Full-Stack Developer</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Based in San Francisco, CA
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;