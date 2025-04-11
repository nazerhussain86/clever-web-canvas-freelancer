
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
import { Calendar, Code, Database, FileText, Mail } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Automated Email Service",
      subtitle: "Windows Application",
      period: "Dec 2024 - Present",
      company: "SCMCube Technologies",
      description:
        "An automated email service designed to streamline email management by reading incoming emails, extracting relevant information, and storing it in a SQL Server database.",
      features: [
        "Email Retrieval: Automatically reads emails from a specified mailbox, filtering messages from designated senders or based on predefined criteria.",
        "Data Extraction and Storage: Extracts key information from emails and stores it in a SQL Server database.",
        "Query Analysis: Analyzes email content to identify sender's query using rule-based logic or NLP.",
        "Automated Response: Generates and sends tailored replies addressing queries effectively."
      ],
      technologies: [
        ".NET Framework", 
        "C#", 
        "Python", 
        "IMAP", 
        "WinForms", 
        "AI", 
        "SQL Server"
      ],
      icon: Mail,
    },
    {
      title: "Web Application",
      subtitle: "Import/Export Management System",
      period: "Jan 2024 - Present",
      company: "SCMCube Technologies",
      description:
        "A web application designed to streamline and manage processes involved in import and export operations with intuitive interface and robust functionalities.",
      features: [
        "Import Management: Efficient tracking of incoming shipments, inventory updates, and supplier coordination.",
        "Export Management: Manages outgoing shipments with proper documentation and compliance to regulations.",
        "Data Integration: Integration with third-party systems like shipping carriers and customs platforms.",
        "Reporting and Analytics: Detailed reports on trade performance and shipment status.",
        "User Roles and Permissions: Secure access control for various stakeholders."
      ],
      technologies: [
        ".NET Framework", 
        "ASP.NET MVC", 
        "Bootstrap", 
        "HTML", 
        "jQuery", 
        "C#", 
        "CSS", 
        "XML", 
        "SQL Server"
      ],
      icon: Code,
    },
    {
      title: "Document OCR Automation",
      subtitle: "Backend Development & API Integration",
      period: "Dec 2023 - Present",
      company: "SCMCube Technologies",
      description:
        "A backend-focused project for document processing with OCR capabilities, involving file format conversion, text processing, and web API development.",
      features: [
        "File Format Conversion: Converting various document formats for processing.",
        "OCR Processing: Extracting text from images and documents using EasyOCR.",
        "Text Analysis: Processing extracted text for structured data.",
        "API Development: Creating web APIs for document processing workflows."
      ],
      technologies: [
        "Python", 
        "Pandas", 
        "AI", 
        "OCR", 
        "EasyOCR", 
        "C#", 
        "SQL Server"
      ],
      icon: FileText,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/10">
      <div className="container mx-auto">
        <h2 className="section-title gradient-text text-center">
          Professional Projects
        </h2>
        <p className="text-center text-foreground/70 max-w-3xl mx-auto mb-16">
          A selection of my professional development work at SCMCube Technologies, demonstrating
          my expertise in backend development, API integration, and application design.
        </p>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-primary/10 bg-card shadow-md card-hover"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1 p-6 bg-secondary/20 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/70 mb-2">{project.subtitle}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-foreground/70 mb-4">
                    <Calendar size={14} />
                    <span>{project.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-foreground/70 mb-6">
                    <Database size={14} />
                    <span>{project.company}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-background/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-2 p-6">
                  <CardDescription className="text-base mb-6">{project.description}</CardDescription>
                  
                  <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    {project.features.map((feature, featureIndex) => {
                      // Split the feature into title and description
                      const [title, description] = feature.split(': ');
                      
                      return (
                        <li key={featureIndex} className="list-item">
                          <span className="font-medium">{title}:</span>{' '}
                          <span className="text-foreground/80">{description}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
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
