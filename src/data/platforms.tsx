
import { Code, Brain, Trophy, Target } from "lucide-react";
import { Platform } from "@/types/learning";

export const platforms: Platform[] = [
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
