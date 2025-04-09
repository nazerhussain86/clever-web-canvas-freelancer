
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("Message sent successfully!");
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "john.doe@example.com",
      link: "mailto:john.doe@example.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title gradient-text text-center">Get In Touch</h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
          Have a project in mind or want to discuss potential opportunities?
          I'd love to hear from you. Fill out the form below and I'll get back to you soon.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 border border-primary/10 bg-secondary/30 card-hover"
              >
                <a
                  href={info.link}
                  className="flex items-start space-x-4 no-underline text-foreground"
                >
                  <div className="bg-background p-3 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{info.title}</h3>
                    <p className="text-foreground/70">{info.value}</p>
                  </div>
                </a>
              </Card>
            ))}

            <div className="mt-8 pt-8 border-t border-primary/10">
              <h3 className="text-lg font-medium mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {["github", "linkedin", "twitter", "instagram"].map(
                  (social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="bg-secondary hover:bg-primary/20 p-2 rounded-full transition-colors"
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${social}`}
                        alt={social}
                        className="w-5 h-5"
                      />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border border-primary/10 bg-secondary/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
