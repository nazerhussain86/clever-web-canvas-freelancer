
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 py-16 border-t border-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-serif font-bold">
              <span className="gradient-text">Nazer</span>
              <span className="text-foreground">.dev</span>
            </h2>
            <p className="text-foreground/70 mt-2 max-w-sm">
              Creating exceptional digital experiences with modern technologies
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a
              href="#"
              className="social-icon"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="social-icon"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#contact"
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-primary/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-foreground/60">&copy; {currentYear} Nazer Hussain. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
