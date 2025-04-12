
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const About = () => {
  const experience = [
    { number: "5+", text: "Years Experience" },
    { number: "50+", text: "Projects Completed" },
    { number: "20+", text: "Happy Clients" },
  ];

  const testimonials = [
    {
      text: "Nazer delivered exceptional work on our web application project. Highly recommended!",
      author: "John Doe",
      position: "CTO, TechCorp"
    },
    {
      text: "Working with Nazer was a pleasure. He understood our requirements perfectly.",
      author: "Sarah Smith",
      position: "Product Manager, InnovateLabs"
    },
    {
      text: "The quality of code and attention to detail was impressive. Our project was delivered ahead of schedule.",
      author: "Michael Brown",
      position: "Founder, StartupX"
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background/60 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-400/5 to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto">
        <h2 className="section-title gradient-text text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Column */}
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl border border-primary/10 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                  alt="Developer working on code"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 md:order-2">
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Full Stack Developer with a passion for creating elegant solutions
              </h3>
              <p className="text-foreground/80 mb-6">
                I'm Nazer Hussain A, a Full Stack Developer with expertise in modern web
                technologies. With a strong foundation in both frontend and backend
                development, I create seamless, user-focused applications that
                solve real business problems.
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3">What I offer:</h4>
                <ul className="space-y-3">
                  {[
                    "Custom web application development",
                    "Responsive frontend development with React",
                    "Robust backend systems with Node.js/.NET",
                    "Database design and optimization",
                    "API development and integration",
                    "Performance optimization",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <CheckCircle className="text-primary mr-2 h-5 w-5 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button size="lg" className="shine-effect">Learn More</Button>
            </div>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-6 text-center">What Clients Say</h3>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-background/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-primary/10 shadow-lg flex flex-col items-center text-center">
                    <div className="mb-4">
                      <svg width="42" height="30" className="text-primary/60 mx-auto">
                        <path
                          fill="currentColor"
                          d="M12.284 0L0 12.284V30h17.716V12.284H5.431L17.716 0H12.284zm24.283 0L24.284 12.284V30H42V12.284H29.715L42 0h-5.433z"
                        />
                      </svg>
                    </div>
                    <p className="text-lg mb-6 italic">{testimonial.text}</p>
                    <div className="mt-auto">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-foreground/60">{testimonial.position}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none translate-y-0 mx-2" />
              <CarouselNext className="static transform-none translate-y-0 mx-2" />
            </div>
          </Carousel>
        </div>

        {/* Experience Stats */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-background/70 p-8 rounded-xl shadow-lg border border-primary/20 card-hover glass-effect group"
            >
              <h3 className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                {item.number}
              </h3>
              <p className="text-foreground/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
