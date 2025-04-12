
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  Code,
  Database,
  FileText,
  GraduationCap,
  CheckSquare,
  ExternalLink,
  Globe,
  Server,
  Settings,
  Smartphone,
  BookOpen,
  TrendingUp,
  Github,
  UserCheck,
} from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  icon: React.ReactNode;
  logo?: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

const SkillsAndCertifications = () => {
  const [activeView, setActiveView] = useState<"skills" | "certifications">("skills");

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
      logo: "/hackerrank-logo.svg",
    },
    {
      id: "c2",
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "Nov 2024",
      credentialId: "EF92ED38C3CF",
      skills: ["SQL Server Management Studio"],
      icon: <Database className="h-10 w-10 text-primary" />,
      logo: "/hackerrank-logo.svg",
    },
    {
      id: "c3",
      title: "Software Engineer",
      issuer: "HackerRank",
      date: "Oct 2024",
      credentialId: "D754AFCAEA21",
      skills: ["Python (Programming Language)", "C#", "Agile Methodologies"],
      icon: <Award className="h-10 w-10 text-primary" />,
      logo: "/hackerrank-logo.svg",
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
      logo: "/guvi-logo.svg",
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
      logo: "/guvi-logo.svg",
    },
    {
      id: "c6",
      title: "JavaScript",
      issuer: "GUVI Geek Networks, IITM Research Park",
      date: "Sep 2024",
      credentialId: "6O7i1v7V3GF8b92673",
      skills: ["Artificial Intelligence (AI)", "ASP.NET MVC", "jQuery"],
      icon: <Code className="h-10 w-10 text-primary" />,
      logo: "/guvi-logo.svg",
    },
    {
      id: "c7",
      title: "SaWiT.AI Challenge",
      issuer: "GUVI Geek Networks, IITM Research Park",
      date: "Sep 2024",
      credentialId: "324P4265uv71758xq1",
      skills: ["Python (Programming Language)", "Artificial Intelligence (AI)"],
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      logo: "/guvi-logo.svg",
    },
  ];

  const skillCategories: SkillCategory[] = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Redux", level: 75 },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: ".NET Core", level: 90 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "SQL Server", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 70 },
        { name: "Firebase", level: 75 },
        { name: "ORM Tools", level: 85 },
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <Settings className="h-5 w-5" />,
      skills: [
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Azure", level: 85 },
        { name: "Git", level: 95 },
        { name: "Linux", level: 70 },
      ],
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: <Smartphone className="h-5 w-5" />,
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 65 },
        { name: "Mobile UX", level: 75 },
        { name: "App Performance", level: 70 },
        { name: "Native APIs", level: 65 },
        { name: "App Store Deployment", level: 75 },
      ],
    },
    {
      id: "other",
      name: "Other",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "UI/UX Design", level: 70 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Testing", level: 75 },
        { name: "Performance Optimization", level: 80 },
        { name: "SEO", level: 65 },
        { name: "Cybersecurity", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto">
        <h2 className="section-title gradient-text text-center">
          Technical Skills & Certifications
        </h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-10">
          My expertise spans multiple technologies with professional certifications that validate my commitment to continuous learning.
        </p>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-lg bg-secondary/50">
            <Button 
              variant={activeView === "skills" ? "default" : "ghost"} 
              className="rounded-md"
              onClick={() => setActiveView("skills")}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Skills
            </Button>
            <Button 
              variant={activeView === "certifications" ? "default" : "ghost"} 
              className="rounded-md"
              onClick={() => setActiveView("certifications")}
            >
              <Award className="mr-2 h-4 w-4" />
              Certifications
            </Button>
          </div>
        </div>

        {activeView === "skills" ? (
          <div className="animate-fade-in">
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-8 bg-secondary/30 p-1 rounded-xl">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {category.icon}
                    <span className="hidden sm:inline">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="animate-fade-in"
                >
                  <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {category.icon}
                        {category.name} Skills
                      </CardTitle>
                      <CardDescription>
                        My technical expertise in {category.name.toLowerCase()} technologies
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {category.skills.map((skill, idx) => (
                          <div key={idx} className="group">
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-primary">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-500 group-hover:opacity-90"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <Card
                  key={cert.id}
                  className="border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
                >
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                      {cert.icon}
                    </div>
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
                        <h4 className="text-sm font-medium mb-2 flex items-center justify-between">
                          <span>Skills</span>
                          <Button variant="link" className="p-0 h-auto text-primary text-xs flex items-center">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Show credential
                          </Button>
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
        )}

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-secondary/50 rounded-full">
            <BookOpen className="h-5 w-5 text-primary mr-2" />
            <span className="mr-2 font-medium">Always learning:</span>
            <div className="flex items-center gap-2">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none">
                <Github className="h-3 w-3 mr-1" />
                GitHub
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none">
                <UserCheck className="h-3 w-3 mr-1" />
                LeetCode
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none">
                <Award className="h-3 w-3 mr-1" />
                Coursera
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndCertifications;
