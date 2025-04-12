
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SkillsAndCertifications from "@/components/SkillsAndCertifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="bg-background text-foreground min-h-screen">
        {/* Decorative elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-400/10 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
        </div>
        
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <SkillsAndCertifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
