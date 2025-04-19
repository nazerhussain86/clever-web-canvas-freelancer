
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { platforms } from "@/data/platforms";
import { PlatformCard } from "@/components/learning/PlatformCard";

const LearningPath = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    setActiveIndex(api.selectedScrollSnap());

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="section-padding relative overflow-hidden" id="learning">
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
          setApi={setApi}
        >
          <CarouselContent>
            {platforms.map((platform) => (
              <CarouselItem key={platform.name}>
                <PlatformCard platform={platform} />
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
