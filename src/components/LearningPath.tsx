
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Code,
  Brain,
  Award,
  Target,
  CheckCircle2,
  Star,
  TrendingUp,
  ExternalLink,
} from "lucide-react";

interface Platform {
  name: string;
  icon: React.ReactNode;
  stats: string;
  achievements: string[];
  level: string;
  color: string;
  link: string;
}

const platforms: Platform[] = [
  {
    name: "LeetCode",
    icon: <Code className="h-6 w-6" />,
    stats: "300+ Problems Solved",
    achievements: [
      "Data Structures Expert",
      "Algorithm Specialist",
      "Dynamic Programming Master"
    ],
    level: "Advanced",
    color: "from-yellow-400 to-orange-500",
    link: "https://leetcode.com/yourusername"
  },
  {
    name: "GeeksforGeeks",
    icon: <Brain className="h-6 w-6" />,
    stats: "500+ Practice Problems",
    achievements: [
      "Institute Rank #1",
      "Problem Solving Expert",
      "C++ Specialist"
    ],
    level: "Expert",
    color: "from-green-400 to-emerald-500",
    link: "https://geeksforgeeks.org/yourusername"
  },
  {
    name: "HackerRank",
    icon: <Trophy className="h-6 w-6" />,
    stats: "5⭐ in Problem Solving",
    achievements: [
      "Python Gold Badge",
      "SQL Platinum",
      "Problem Solving Gold"
    ],
    level: "Advanced",
    color: "from-emerald-400 to-cyan-500",
    link: "https://hackerrank.com/yourusername"
  },
  {
    name: "CodeChef",
    icon: <Target className="h-6 w-6" />,
    stats: "4⭐ Competitive Programmer",
    achievements: [
      "Contest Rating 2000+",
      "Division 2 Winner",
      "Long Challenge Expert"
    ],
    level: "Intermediate",
    color: "from-brown-400 to-orange-600",
    link: "https://codechef.com/yourusername"
  }
];

const LearningPath = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding relative overflow-hidden" id="learning">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container mx-auto relative">
        <h2 className="section-title text-center gradient-text mb-4">
          My Learning Journey
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Constantly improving through practice and challenges across various coding platforms
        </p>

        <Carousel
          opts={{ loop: true }}
          className="w-full max-w-5xl mx-auto"
          setActiveIndex={setActiveIndex}
        >
          <CarouselContent>
            {platforms.map((platform, index) => (
              <CarouselItem key={platform.name}>
                <Card className="border border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${platform.color} text-white`}>
                          {platform.icon}
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{platform.name}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-primary" />
                            {platform.level}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">
                        {platform.stats}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="space-y-4">
                        <h4 className="font-medium text-sm text-muted-foreground">
                          Key Achievements
                        </h4>
                        <div className="grid gap-2">
                          {platform.achievements.map((achievement, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-sm bg-primary/5 p-2 rounded-lg"
                            >
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                      <a
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-4"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Profile
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 mt-8">
            <CarouselPrevious />
            <div className="flex gap-1">
              {platforms.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-primary w-6"
                      : "bg-primary/20"
                  }`}
                />
              ))}
            </div>
            <CarouselNext />
          </div>
        </Carousel>

        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>Keep practicing and leveling up!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
