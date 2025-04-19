
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SkillsAndCertifications from "@/components/SkillsAndCertifications";
import LearningPath from "@/components/LearningPath";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="bg-background text-foreground min-h-screen">
        <Header />
        <main className="relative">
          <Hero />
          <About />
          <Projects />
          <SkillsAndCertifications />
          <LearningPath />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
