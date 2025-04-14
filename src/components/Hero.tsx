
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

  // Initialize floating elements with improved collision detection
  useEffect(() => {
    const container = floatingElementsRef.current;
    if (!container) return;

    // Clear existing elements if re-initializing
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    
    // Store all element data for collision detection
    const elements: Array<{
      element: HTMLDivElement;
      width: number;
      height: number;
      posX: number;
      posY: number;
      dirX: number;
      dirY: number;
      speed: number;
    }> = [];

    // Create grid cells to help with initial placement
    const cellSize = 120; // Size of each cell
    const gridCols = Math.floor(containerWidth / cellSize);
    const gridRows = Math.floor(containerHeight / cellSize);
    const occupiedCells: boolean[][] = Array(gridRows).fill(0).map(() => Array(gridCols).fill(false));
    
    // Create elements with improved initial positioning
    programmingLanguages.forEach((lang) => {
      const element = document.createElement("div");
      element.className = `absolute ${lang.color} px-3 py-1 rounded-lg shadow-lg text-white font-medium z-10 opacity-80 hover:opacity-100 transition-opacity cursor-default`;
      container.appendChild(element);
      
      // Get element dimensions after adding to DOM
      const elementRect = element.getBoundingClientRect();
      const elementWidth = elementRect.width;
      const elementHeight = elementRect.height;
      
      // Find an unoccupied cell for initial placement
      let cellRow = -1, cellCol = -1;
      let attempts = 0;
      const maxAttempts = gridRows * gridCols;
      
      // Try to find an unoccupied cell
      while (attempts < maxAttempts) {
        const randomRow = Math.floor(Math.random() * gridRows);
        const randomCol = Math.floor(Math.random() * gridCols);
        
        if (!occupiedCells[randomRow][randomCol]) {
          cellRow = randomRow;
          cellCol = randomCol;
          occupiedCells[randomRow][randomCol] = true;
          break;
        }
        attempts++;
      }
      
      // If all cells are occupied, just place randomly
      let posX = 0;
      let posY = 0;
      
      if (cellRow >= 0 && cellCol >= 0) {
        // Calculate position within the cell with some random offset
        posX = cellCol * cellSize + (Math.random() * 20);
        posY = cellRow * cellSize + (Math.random() * 20);
      } else {
        // Random position as fallback
        posX = Math.random() * (containerWidth - elementWidth);
        posY = Math.random() * (containerHeight - elementHeight);
      }
      
      // Ensure the element is within container boundaries
      posX = Math.max(0, Math.min(posX, containerWidth - elementWidth));
      posY = Math.max(0, Math.min(posY, containerHeight - elementHeight));
      
      element.style.transform = `translate(${posX}px, ${posY}px)`;
      
      // Initialize movement properties
      const speed = 0.1 + Math.random() * 0.2; // Lower speed for smoother movement
      const dirX = Math.random() > 0.5 ? 1 : -1;
      const dirY = Math.random() > 0.5 ? 1 : -1;
      
      // Add to elements array for collision detection
      elements.push({
        element,
        width: elementWidth,
        height: elementHeight,
        posX,
        posY,
        dirX,
        dirY,
        speed
      });
    });
    
    // Animation loop with improved collision detection
    const animate = () => {
      // Update each element position
      elements.forEach((el, idx) => {
        // Update position with speed
        el.posX += el.speed * el.dirX;
        el.posY += el.speed * el.dirY;
        
        // Boundary collision detection with smoother bounce
        if (el.posX <= 0 || el.posX >= containerWidth - el.width) {
          el.dirX *= -1; // Reverse direction
          
          // Adjust position to prevent sticking to boundaries
          if (el.posX < 0) {
            el.posX = 0;
          } else if (el.posX > containerWidth - el.width) {
            el.posX = containerWidth - el.width;
          }
        }
        
        if (el.posY <= 0 || el.posY >= containerHeight - el.height) {
          el.dirY *= -1; // Reverse direction
          
          // Adjust position to prevent sticking to boundaries
          if (el.posY < 0) {
            el.posY = 0;
          } else if (el.posY > containerHeight - el.height) {
            el.posY = containerHeight - el.height;
          }
        }
        
        // Improved element-element collision detection
        for (let i = 0; i < elements.length; i++) {
          if (i !== idx) { // Don't check collision with self
            const other = elements[i];
            
            // Calculate element centers for improved collision
            const thisCenter = { 
              x: el.posX + el.width / 2, 
              y: el.posY + el.height / 2 
            };
            
            const otherCenter = { 
              x: other.posX + other.width / 2, 
              y: other.posY + other.height / 2 
            };
            
            // Calculate minimum distance needed to avoid collision
            const minDistX = (el.width + other.width) / 2;
            const minDistY = (el.height + other.height) / 2;
            
            // Calculate actual distance between centers
            const actualDistX = Math.abs(thisCenter.x - otherCenter.x);
            const actualDistY = Math.abs(thisCenter.y - otherCenter.y);
            
            // Check if collision occurred
            if (actualDistX < minDistX && actualDistY < minDistY) {
              // Determine direction of collision and bounce
              const overlapX = minDistX - actualDistX;
              const overlapY = minDistY - actualDistY;
              
              // Adjust position based on collision direction
              if (overlapX < overlapY) {
                // Horizontal collision
                el.dirX *= -1;
                // Push apart slightly to prevent sticking
                if (thisCenter.x < otherCenter.x) {
                  el.posX -= overlapX / 2;
                  other.posX += overlapX / 2;
                } else {
                  el.posX += overlapX / 2;
                  other.posX -= overlapX / 2;
                }
              } else {
                // Vertical collision
                el.dirY *= -1;
                // Push apart slightly to prevent sticking
                if (thisCenter.y < otherCenter.y) {
                  el.posY -= overlapY / 2;
                  other.posY += overlapY / 2;
                } else {
                  el.posY += overlapY / 2;
                  other.posY -= overlapY / 2;
                }
              }
              
              // Ensure we don't push elements outside boundaries
              el.posX = Math.max(0, Math.min(el.posX, containerWidth - el.width));
              el.posY = Math.max(0, Math.min(el.posY, containerHeight - el.height));
              other.posX = Math.max(0, Math.min(other.posX, containerWidth - other.width));
              other.posY = Math.max(0, Math.min(other.posY, containerHeight - other.height));
            }
          }
        }
        
        // Apply the new position
        el.element.style.transform = `translate(${el.posX}px, ${el.posY}px)`;
      });
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    requestAnimationFrame(animate);
    
    // Handle window resize
    const handleResize = () => {
      // Re-initialize when window size changes
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
      // Delay reinitialization to ensure container dimensions are updated
      setTimeout(() => {
        const event = new Event('resize');
        window.dispatchEvent(event);
      }, 200);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Fixed content */}
          <div className="animate-fade-in md:pr-8">
            <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-primary"></span>
              <p className="text-sm">Full Stack Developer & Problem Solver</p>
            </div>
            
            <p className="text-primary mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative pulse-text">
              Nazer Hussain A
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-transparent"></span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground/80 mb-6">
              Full Stack Developer &{" "}
              <span className="gradient-text">Problem Solver</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-xl">
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
          
          {/* Right side - Container for floating languages */}
          <div className="hidden md:block relative h-[400px]">
            {/* Fixed height container for better control of floating elements */}
            <div ref={floatingElementsRef} className="absolute inset-0 overflow-hidden"></div>
          </div>
        </div>
      </div>
      
      {/* Animated circle */}
      <div className="absolute bottom-20 left-10 w-32 h-32 border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-50"></div>
      
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
