
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const About = () => {
  const experience = [
    { number: "5+", text: "Years Experience" },
    { number: "50+", text: "Projects Completed" },
    { number: "20+", text: "Happy Clients" },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-title gradient-text text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-xl blur-lg"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                  alt="Developer working on code"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4">
              Full Stack Developer with a passion for creating elegant solutions
            </h3>
            <p className="text-foreground/80 mb-6">
              I'm a Full Stack Developer with expertise in modern web
              technologies. With a strong foundation in both frontend and backend
              development, I create seamless, user-focused applications that
              solve real business problems.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3">What I offer:</h4>
              <ul className="space-y-2">
                {[
                  "Custom web application development",
                  "Responsive frontend development with React",
                  "Robust backend systems with Node.js/.NET",
                  "Database design and optimization",
                  "API development and integration",
                  "Performance optimization",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-primary mr-2 h-5 w-5 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg">Learn More</Button>
          </div>
        </div>

        {/* Experience Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-background/50 p-8 rounded-xl shadow-lg border border-primary/20 card-hover"
            >
              <h3 className="text-4xl font-bold gradient-text mb-2">
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
