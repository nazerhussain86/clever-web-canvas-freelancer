
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-primary mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground/80 mb-6">
            Full Stack Developer &{" "}
            <span className="gradient-text">Problem Solver</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl">
            I build exceptional digital experiences with modern technologies.
            Specializing in creating robust web applications with React, Node.js,
            and cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">View My Work</Button>
            <Button size="lg" variant="outline">
              Download CV
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center text-foreground/50 hover:text-primary transition-colors"
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
