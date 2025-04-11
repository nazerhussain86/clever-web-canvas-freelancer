
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Code,
  Database,
  FileText,
  GraduationCap,
  CheckSquare,
  ExternalLink,
} from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  icon: React.ReactNode;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: "c1",
      title: "C# (Basic)",
      issuer: "HackerRank",
      date: "Dec 2024",
      credentialId: "065CFDB4FE48",
      skills: [
        "Optical Character Recognition (OCR)",
        "Artificial Intelligence (AI)",
        "C#",
        "WinForms",
        "Internet Message Access Protocol (IMAP)",
      ],
      icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
      id: "c2",
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "Nov 2024",
      credentialId: "EF92ED38C3CF",
      skills: ["SQL Server Management Studio"],
      icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
      id: "c3",
      title: "Software Engineer",
      issuer: "HackerRank",
      date: "Oct 2024",
      credentialId: "D754AFCAEA21",
      skills: ["Python (Programming Language)", "C#", "Agile Methodologies"],
      icon: <Award className="h-10 w-10 text-primary" />,
    },
    {
      id: "c4",
      title: "Python Zero to Hero",
      issuer: "GUVI Geek Networks, IITM Research Park",
      date: "Sep 2024",
      credentialId: "60211b22yLRH57688k",
      skills: [
        "Optical Character Recognition (OCR)",
        "Python (Programming Language)",
        "Artificial Intelligence (AI)",
        "Pandas (Software)",
      ],
      icon: <FileText className="h-10 w-10 text-primary" />,
    },
    {
      id: "c5",
      title: "HTML and CSS",
      issuer: "GUVI Geek Networks, IITM Research Park",
      date: "Sep 2024",
      credentialId: "iN1769765u20rD9vmy",
      skills: [
        "Cascading Style Sheets (CSS)",
        "HTML",
        "ASP.NET MVC",
        "Bootstrap (Framework)",
      ],
      icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
      id: "c6",
      title: "JavaScript",
      issuer: "GUVI Geek Networks, IITM Research Park",
      date: "Sep 2024",
      credentialId: "6O7i1v7V3GF8b92673",
      skills: ["Artificial Intelligence (AI)", "ASP.NET MVC", "jQuery"],
      icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
      id: "c7",
      title: "SaWiT.AI Challenge",
      issuer: "GUVI Geek Networks, IITM Research Park",
      date: "Sep 2024",
      credentialId: "324P4265uv71758xq1",
      skills: ["Python (Programming Language)", "Artificial Intelligence (AI)"],
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="section-title gradient-text text-center">
          Certifications & Skills
        </h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
          Professional certifications and specialized training that validate my
          expertise and commitment to continuous learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="border border-primary/10 bg-background/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">{cert.icon}</div>
                <div className="space-y-1">
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <span>{cert.issuer}</span>
                    <span className="text-xs">•</span>
                    <span>{cert.date}</span>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-foreground/70">
                    <CheckSquare className="h-4 w-4 mr-2 text-primary" />
                    <span>Credential ID: {cert.credentialId}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                      <span>Skills</span>
                      <button className="text-primary text-xs flex items-center hover:underline">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Show credential
                      </button>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-secondary/50 hover:bg-secondary"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
