
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce solution with product management, cart functionality, payment integration, and order tracking.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Project Management Dashboard",
      description:
        "Real-time project management tool with task tracking, team collaboration features, and performance analytics.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Finance Tracking App",
      description:
        "Personal finance application for expense tracking, budget planning, and financial goal setting with visualization.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Express.js", "PostgreSQL", "Chart.js"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title gradient-text text-center">
          Featured Projects
        </h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
          A selection of my recent development work. Each project demonstrates
          my approach to problem-solving and technical implementation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-primary/10 bg-secondary/30 card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href={project.demoLink}
                  className="flex items-center text-sm text-primary hover:underline"
                >
                  Live Demo
                  <ExternalLink size={14} className="ml-1" />
                </a>
                <a
                  href={project.codeLink}
                  className="flex items-center text-sm text-primary hover:underline"
                >
                  Source Code
                  <Github size={14} className="ml-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
