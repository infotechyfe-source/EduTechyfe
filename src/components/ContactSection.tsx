import { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  Clock,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: GraduationCap,
    title: "Built for Schools",
    content: "SIS • CRM • LMS • ERP — All in One Platform",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info.techyfe@gmail.com",
    link: "mailto:info.techyfe@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 97188 20229",
    link: "tel:+919718820229",
  },
  {
    icon: Clock,
    title: "Support Hours",
    content: "Mon – Sat | 10:00 AM – 7:00 PM",
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1000));

    toast({
      title: "Demo Request Sent",
      description: "Our team will contact you shortly.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 pt-4 md:pt-20 pb-4 bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
       <div className="w-full md:max-w-5xl md:mx-auto text-center mb-12 px-2">

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            See How Your School{" "}
            <span className="text-gradient">Runs Smarter</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Schedule a personalized demo tailored for principals,
            administrators, teachers, and IT teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-4 rounded-xl bg-card border border-indigo-200"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {info.title}
                  </h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">
                      {info.content}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-6 p-6 rounded-xl bg-primary/5 border border-indigo-200">
              <p className="text-sm text-muted-foreground">
                Trusted by schools to manage admissions, fees,
                academics, communication, and operations from a
                single dashboard.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 md:p-10 border border-indigo-200 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-8">
                Request a Personalized Demo
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  name="role"
                  placeholder="Your Role (Principal, Admin, IT...)"
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-8">
                <Textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your school or specific requirements"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="
    w-full 
    relative 
    overflow-hidden
    rounded-xl
    bg-gradient-to-r from-indigo-600 to-blue-600
    text-white
    font-semibold
    shadow-lg
    transition-all duration-300
    hover:shadow-xl hover:scale-[1.02]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
    disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none
    group
  "
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? "Submitting..." : "Book Demo"}
                  <Send className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>

                {/* subtle shine effect */}
                <span className="pointer-events-none absolute inset-0
    bg-gradient-to-r from-white/10 via-white/30 to-white/10
    opacity-0
    group-hover:opacity-100
    transition-opacity duration-300
  " />
              </Button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
