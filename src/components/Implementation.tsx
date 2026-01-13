import { Search, Database, GraduationCap, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We understand your academic structure, modules, workflows, and existing data sources.",
  },
  {
    icon: Database,
    title: "Data Import",
    description:
      "Securely migrate students, staff, classes, fee heads, and historical records.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description:
      "Role-based onboarding for administrators, teachers, and support staff.",
  },
  {
    icon: Rocket,
    title: "Go Live",
    description:
      "Assisted rollout with real-time monitoring and ongoing support.",
  },
];

export default function ImplementationTimeline() {
  return (
    <section
      id="implementation"
      className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/40 to-background"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Implementation Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            A Smooth Setup{" "}
            <span className="text-gradient">
              That Fits Your Academic Calendar
            </span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Our guided onboarding process ensures your school is live quickly,
            confidently, and without operational disruption.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-6xl mx-auto">

          {/* Progress line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center group"
              >
                {/* Icon */}
                <div className="relative z-10 mx-auto w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center shadow-sm group-hover:shadow-lg transition-all">
                  <step.icon className="w-9 h-9 text-primary group-hover:scale-110 transition-transform" />
                </div>

                {/* Step number */}
                <div className="mt-4 text-sm font-semibold text-accent">
                  Step {index + 1}
                </div>

                {/* Content */}
                <h3 className="mt-2 text-xl font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-3 text-muted-foreground text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom reassurance */}
        <div className="mt-24 max-w-4xl mx-auto text-center bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Go Live in Weeks — Not Months
          </h3>
          <p className="text-muted-foreground">
            Our proven onboarding framework ensures fast adoption, minimal downtime,
            and long-term success for your institution.
          </p>
        </div>

      </div>
    </section>
  );
}
