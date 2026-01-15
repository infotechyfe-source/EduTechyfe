import {
  Layers,
  Brain,
  Database,
  MessageSquare,
  ShieldCheck,
  Headphones,
  CheckCircleIcon,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "All-in-One School Platform",
    description:
      "Admissions, academics, fees, attendance, exams, and communication — all managed from one unified system.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Brain,
    title: "Smart Automation & Insights",
    description:
      "Automated workflows, performance tracking, and actionable insights to reduce manual effort and errors.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Database,
    title: "Single Source of Truth",
    description:
      "Centralized and secure data for students, staff, classes, finances, and reports — always up to date.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: MessageSquare,
    title: "Built-in Communication",
    description:
      "Real-time messaging, alerts, and announcements connecting admins, teachers, parents, and students.",
    color: "from-sky-500 to-cyan-600",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Role-based access, data security, regular backups, and high availability you can trust.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Implementation assistance, training, and ongoing support to ensure long-term success.",
    color: "from-rose-500 to-pink-600",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section
      id="why-us"
      className="scroll-mt-16 py-4 md:py-24 pb-4 bg-gradient-to-b from-slate-50 to-slate-100"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-20">
         

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            A Smarter Way to
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              {" "}Manage Your School
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600">
            Designed specifically for educational institutions to simplify
            operations, improve communication, and support better decision-making.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-blue-50 rounded-3xl p-8
              shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)]
              border border-slate-200
              hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]
              hover:-translate-y-2
              transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`mb-6 w-16 h-16 rounded-2xl
                bg-gradient-to-br ${feature.color}
                flex items-center justify-center text-white
                shadow-md
                group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-slate-600 bg-gray-50 border border-indigo-200 rounded-full px-6 py-3 shadow-md">
            <CheckCircleIcon className="w-5 h-5 text-blue-600" />
            Trusted by schools for smooth operations and better outcomes
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
