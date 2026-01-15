import {
  CreditCard,
  Mail,
  Video,
  Database,
  ArrowRight,
} from "lucide-react";

const integrations = [
  {
    icon: CreditCard,
    title: "Payments & Billing",
    description:
      "Collect fees, issue refunds, auto-generate receipts, and track transactions across branches with secure payment gateways.",
    accent: "border-emerald-400 text-emerald-600 bg-emerald-50",
  },
  {
    icon: Mail,
    title: "Email & SMS Automation",
    description:
      "Automated alerts for admissions, attendance, fees, exams, and announcements using smart templates.",
    accent: "border-sky-400 text-sky-600 bg-sky-50",
  },
  {
    icon: Video,
    title: "Online Classes & Calendars",
    description:
      "Attach live class links, sync academic calendars, and manage virtual classrooms effortlessly.",
    accent: "border-violet-400 text-violet-600 bg-violet-50",
  },
  {
    icon: Database,
    title: "Data, APIs & Integrations",
    description:
      "Export CSV/XLS data, connect third-party tools, and automate workflows using APIs & webhooks.",
    accent: "border-amber-400 text-amber-600 bg-amber-50",
  },
];

export default function IntegrationsSection() {
  return (
    <section
      id="integrations"
      className="scroll-mt-16 pt-4 md:pt-24 pb-4 bg-slate-50"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-600">
              Integrations & Payments
            </span>

            <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Seamlessly Connected
              <span className="block text-indigo-600">
                School Operations
              </span>
            </h2>

            <p className="text-lg text-slate-600 max-w-xl">
              Payments, communication, learning tools, and data — all working
              together in one intelligent ecosystem built for schools.
            </p>

            <button className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-xl border border-indigo-200 bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors">
              Explore Integrations
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-8">
            {integrations.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-3xl bg-indigo-50 p-8 border border-indigo-200
                hover:border-slate-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6
                  border ${item.accent}`}
                >
                  <item.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="rounded-2xl border border-indigo-200 bg-gradient-to-bl from-fuchsia-50 to-rose-100 p-4 md:p-8 text-center shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Designed to Fit Your School — Not the Other Way Around
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Our platform integrates smoothly with the tools you already use,
            reducing friction and accelerating adoption across your institution.
          </p>
        </div>

      </div>
    </section>
  );
}
