
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Database,
  Globe,
  Server,
  Settings,
  Smartphone,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
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
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-title gradient-text text-center">
          Technical Skills
        </h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
          My expertise spans across multiple technologies and domains, allowing
          me to deliver end-to-end solutions for complex projects.
        </p>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-10">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2"
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
              <Card className="border border-primary/10 bg-background/50 overflow-hidden">
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
                      <div key={idx}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-primary">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-blue-500"
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
    </section>
  );
};

export default Skills;
