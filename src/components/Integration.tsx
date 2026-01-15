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

           {/* Action Buttons */}
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
  
  {/* Integration Guide Button */}
  <button
    className="
      inline-flex items-center gap-3
      px-7 py-4 rounded-xl
      border border-indigo-200
      bg-indigo-400
      text-white font-semibold
      hover:bg-indigo-500
      transition-colors
    "
  >
    Request Integration Guide
    <ArrowRight className="w-5 h-5" />
  </button>

  {/* WhatsApp Chat Button */}
  <button
    onClick={() =>
      window.open(
        "https://wa.me/919718820229?text=Hi%20I%20want%20to%20know%20more%20about%20your%20school%20management%20software",
        "_blank"
      )
    }
    className="
      group inline-flex items-center gap-3
      px-7 py-4 rounded-xl
      bg-gradient-to-r from-green-500 to-emerald-500
      text-white font-semibold
      shadow-md shadow-green-500/30
      hover:shadow-lg hover:shadow-green-500/40
      hover:scale-[1.03]
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2
    "
    aria-label="Chat with WhatsApp Agent"
  >
    {/* WhatsApp Icon */}
    <svg
      className="w-5 h-5 fill-current"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.003 3C9.383 3 4 8.383 4 15.003c0 2.65.87 5.1 2.34 7.08L4 29l7.15-2.27c1.94 1.06 4.16 1.67 6.85 1.67C24.62 28.4 30 23.02 30 16.4 30 9.78 24.62 3 16.003 3zm6.92 17.38c-.29.82-1.44 1.5-2.3 1.6-.6.1-1.37.15-4.4-.94-3.88-1.36-6.37-4.69-6.56-4.95-.18-.27-1.58-2.1-1.58-4.01s1-2.84 1.36-3.23c.36-.4.79-.5 1.05-.5h.76c.24 0 .56-.1.87.66.31.76 1.05 2.6 1.14 2.79.1.2.17.44.03.71-.14.27-.21.44-.42.68-.2.24-.43.54-.62.72-.2.2-.4.42-.17.83.23.4 1.02 1.68 2.2 2.73 1.52 1.36 2.8 1.78 3.2 1.98.4.2.63.17.86-.1.24-.27.99-1.16 1.26-1.56.27-.4.53-.34.89-.2.36.14 2.3 1.09 2.7 1.29.4.2.66.3.76.46.1.17.1.93-.19 1.75z" />
    </svg>

    <span>Queries on WhatsApp</span>
  </button>

</div>

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
