import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jonathan Bingham",
      role: "CEO",
      company: "Adaelo",
      content: "I highly recommend Abhishek as a software developer! He demonstrates exceptional skill and attentiveness in his work and consistently delivers high-quality results. His enthusiasm for technology and development is evident, and he approaches each project with a positive and proactive attitude. Additionally, Abhishek is known for his swiftness, ensuring that tasks are completed efficiently without compromising on quality.",      rating: 5,
      avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFLZZ6ZZXO8VA/profile-displayphoto-shrink_800_800/B4EZVExm1uGYAc-/0/1740615611073?e=1757548800&v=beta&t=4hh6jCYMNxDc8M1NyZ_SRVeB3tYX6Fx4NvRDPA_PySM"
    },
    {
      name: "Edwin Brito",
      role: "Marketing and Technology Consultant",
      company: "Brito Designs",
      content: "Working with Abhishek on the Eagle TIP project was a delight, where he truly excelled as a software developer. Abhishek's deep understanding of the project's tech was evident in how he consistently delivered top-notch work, always meeting deadlines and budget targets. What really impressed me was Abhishek's pivotal role in reviewing the project’s onboarding process. It showcased not just his technical expertise but also his ability to think creatively. Throughout the project, his straightforward communication and punctuality were right on the mark.",      rating: 5,
      avatar: "https://media.licdn.com/dms/image/v2/C5603AQH1jfpJDk_WAA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516461073029?e=1757548800&v=beta&t=Kx51R7MAObNt4UDCp48p24qHYrogwKxYYZ1DKM2xIiQ",  },
    {
      name: "Qurban Ali",
      role: "COO",
      company: "Ndjoyit",
      content: "Abhishek's teamwork and communication skills were evident when it came to changes or adding new features. He'd delve into requests, find smart solutions, and break it down for the team, not just fixing the issue but making things even better. His aptitude for planning also sped up development. I strongly recommend Abhishek for any software gig. His technical skills, reliability, and fantastic team spirit make him a standout player. I'm confident Abhishek will continue to excel in our future projects." ,     rating: 5,
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHFVETxgcRHgA/profile-displayphoto-shrink_400_400/B4DZT.fABiHkAk-/0/1739436328131?e=1757548800&v=beta&t=-GPpFP7bx7XYx5MHJb9riNQHDDWT-jw7jHoIJ6iy5FU"
    },
   
   
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
                  <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
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
                <a href="mailto:abhisheksaini1219@gmail.com" className="inline-block">
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