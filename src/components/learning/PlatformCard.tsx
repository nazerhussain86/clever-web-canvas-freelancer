
import { TrendingUp, CheckCircle2, ExternalLink } from "lucide-react";
import { Platform } from "@/types/learning";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PlatformCardProps {
  platform: Platform;
}

export const PlatformCard = ({ platform }: PlatformCardProps) => {
  return (
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
  );
};
