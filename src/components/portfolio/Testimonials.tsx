import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      content: "John consistently delivered high-quality code and showed exceptional problem-solving skills. His attention to detail and ability to translate complex requirements into elegant solutions made him an invaluable team member.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      content: "Working with John was a pleasure. He not only met all our technical requirements but also provided valuable insights that improved our overall product strategy. His communication skills are outstanding.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      company: "Creative Studio",
      content: "John bridges the gap between design and development beautifully. He understands the importance of user experience and implements designs with pixel-perfect precision while maintaining performance.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Thompson",
      role: "Freelance Client",
      company: "Thompson Consulting",
      content: "I hired John for a complex web application project. He delivered beyond expectations, on time and within budget. The application has been running smoothly for over a year with minimal maintenance.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Wang",
      role: "Marketing Director",
      company: "GrowthCo",
      content: "John transformed our outdated website into a modern, responsive platform that increased our conversion rates by 40%. His expertise in both frontend and backend development saved us time and money.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "Alex Kumar",
      role: "Lead Developer",
      company: "InnovateTech",
      content: "John is one of the most skilled developers I've worked with. His code is clean, well-documented, and maintainable. He's also a great mentor who helped junior developers on our team grow.",
      rating: 5,
      avatar: "AK"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary font-mono text-lg">04.</span> What Clients Say
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-glow p-6 bg-card animate-slide-up">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="h-6 w-6 text-primary/30 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed pl-4">
                    {testimonial.content}
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 mt-6">
                  <div className="h-10 w-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="card-glow p-8 bg-card max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Ready to work together?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in hearing about new projects and opportunities. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:contact@example.com" className="inline-block">
                  <button className="bg-gradient-primary hover:opacity-90 transition-opacity px-6 py-3 rounded-md font-medium text-primary-foreground">
                    Start a Project
                  </button>
                </a>
                <a href="/resume.pdf" target="_blank" className="inline-block">
                  <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors px-6 py-3 rounded-md font-medium">
                    View Resume
                  </button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;