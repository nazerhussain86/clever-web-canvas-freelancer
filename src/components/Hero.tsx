
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
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
      
      {/* Animated patterns */}
      <div className="absolute top-20 right-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-[spin_25s_linear_infinite] opacity-70"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-50"></div>
      <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-blue-400/10 rounded-full animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-primary"></span>
            <p className="text-sm">Full Stack Developer & Problem Solver</p>
          </div>
          
          <p className="text-primary mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 relative">
            <span className="typing-animation">Nazer Hussain A</span>
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
            <Button size="lg" className="pulse-button shine-effect">View My Work</Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleDownloadCV}
              className="flex items-center gap-2 hover:bg-primary/10 transition-colors"
            >
              <Download size={18} /> Download CV
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
