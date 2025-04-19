
import { ReactNode } from "react";

export interface Platform {
  name: string;
  icon: ReactNode;
  stats: string;
  achievements: string[];
  level: string;
  color: string;
  link: string;
}
