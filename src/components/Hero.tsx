
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";

// Define our programming languages data
const programmingLanguages = [
  { name: "C#", color: "bg-gradient-to-r from-purple-500 to-blue-600" },
  { name: "MVC", color: "bg-gradient-to-r from-blue-500 to-cyan-400" },
  { name: "Python", color: "bg-gradient-to-r from-blue-600 to-green-500" },
  { name: "React", color: "bg-gradient-to-r from-cyan-400 to-blue-500" },
  { name: "JavaScript", color: "bg-gradient-to-r from-yellow-400 to-amber-500" },
  { name: "TypeScript", color: "bg-gradient-to-r from-blue-400 to-indigo-500" },
  { name: "Node.js", color: "bg-gradient-to-r from-green-500 to-emerald-600" },
  { name: "HTML", color: "bg-gradient-to-r from-orange-500 to-red-500" },
  { name: "CSS", color: "bg-gradient-to-r from-blue-400 to-indigo-400" },
  { name: "SQL", color: "bg-gradient-to-r from-sky-500 to-blue-600" },
];

const Hero = () => {
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  // Initialize floating elements
  useEffect(() => {
    const container = floatingElementsRef.current;
    if (!container) return;

    // Clear existing elements if re-initializing
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Create floating elements
    programmingLanguages.forEach((lang, index) => {
      const element = document.createElement("div");
      element.className = `absolute ${lang.color} px-3 py-1 rounded-lg shadow-lg text-white font-medium z-10 opacity-80 hover:opacity-100 transition-opacity cursor-default`;
      element.style.transform = `translate(${Math.random() * 80}vw, ${Math.random() * 60}vh)`;
      element.textContent = lang.name;
      
      // Animation properties
      const speed = 0.5 + Math.random() * 1;
      const directionX = Math.random() > 0.5 ? 1 : -1;
      const directionY = Math.random() > 0.5 ? 1 : -1;
      let posX = Math.random() * 80;
      let posY = Math.random() * 60;

      // Animate function
      const animate = () => {
        // Update position
        posX += speed * directionX * 0.05;
        posY += speed * directionY * 0.05;

        // Boundary check
        if (posX < 0 || posX > 80) posX = Math.random() * 80;
        if (posY < 0 || posY > 60) posY = Math.random() * 60;

        element.style.transform = `translate(${posX}vw, ${posY}vh)`;
        requestAnimationFrame(animate);
      };

      // Add to container and start animation
      container.appendChild(element);
      requestAnimationFrame(animate);
    });
  }, []);

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the link's href to the path of the resume file
    // Note: You would need to add your actual resume PDF to the public folder
    link.href = '/nazer-hussain-resume.pdf';
    
    // Set the download attribute to suggest a filename
    link.download = 'Nazer-Hussain-Resume.pdf';
    
    // Append the link to the document
    document.body.appendChild(link);
    
    // Trigger the click event on the link
    link.click();
    
    // Clean up - remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0"></div>
      
      {/* Floating programming languages container */}
      <div ref={floatingElementsRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>
      
      {/* Animated patterns - remove the small circle on right top */}
      <div className="absolute bottom-20 left-10 w-32 h-32 border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-50"></div>
      <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-blue-400/10 rounded-full animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-primary"></span>
            <p className="text-sm">Full Stack Developer & Problem Solver</p>
          </div>
          
          <p className="text-primary mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 relative pulse-text">
            Nazer Hussain A
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-transparent"></span>
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
            <Button size="lg" className="shine-effect hover:bg-primary/80 transition-colors">View My Work</Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleDownloadCV}
              className="flex items-center gap-2 hover:bg-primary/10 transition-colors"
            >
              <Download size={18} /> Download CV
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="flex items-center gap-2 pulse-button"
            >
              Hire Me
            </Button>
          </div>
          
          {/* Social links */}
          <div className="mt-8 flex items-center gap-4">
            <p className="text-sm text-foreground/60">Find me on:</p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center text-foreground/50 hover:text-primary transition-colors"
        >
          <span className="mb-2">Scroll Down</span>
          <div className="p-2 rounded-full border border-foreground/20 hover:border-primary/50 transition-colors">
            <ArrowDown className="animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
