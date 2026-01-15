const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-200/40 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 right-1/3 w-[700px] h-[700px] bg-blue-200/40 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full border border-indigo-200 bg-white/70 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-sm font-semibold text-indigo-700">
              All-in-One School Management Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Run Your School
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Not Harder
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            A modern cloud-based Software that simplifies admissions, academics,
            attendance, fees, exams, and parent communication — all from a single,
            intelligent dashboard.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection("#demo")}
              className="
                px-8 py-4 rounded-xl
                bg-gradient-to-r from-indigo-600 to-blue-600
                text-white font-semibold
                shadow-lg shadow-indigo-600/30
                hover:shadow-xl hover:shadow-indigo-600/40
                hover:scale-[1.03]
                transition-all duration-300
              "
            >
              Request Free Demo
            </button>

            <button
              onClick={() => scrollToSection("#services")}
              className="
                px-8 py-4 rounded-xl
                border border-slate-300
                bg-white/70 backdrop-blur-sm
                text-slate-700 font-medium
                hover:bg-slate-100
                hover:border-slate-400
                transition-all duration-300
              "
            >
              Explore Features
            </button>
          </div>

          {/* Trust Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: "500+", label: "Schools Onboarded" },
              { value: "40%", label: "Admin Work Reduced" },
              { value: "99.9%", label: "System Uptime" },
              { value: "24/7", label: "Dedicated Support" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group text-center transition-transform hover:-translate-y-1"
              >
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          {/* WhatsApp Chat CTA */}
          <div className="mt-14 flex justify-center">
            <a
              href="https://wa.me/919718820229?text=Hi%20I%20want%20to%20know%20more%20about%20your%20school%20management%20software"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-[1.04] transition-all duration-300">
              {/* WhatsApp Icon */}
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.003 3C9.383 3 4 8.383 4 15.003c0 2.65.87 5.1 2.34 7.08L4 29l7.15-2.27c1.94 1.06 4.16 1.67 6.85 1.67C24.62 28.4 30 23.02 30 16.4 30 9.78 24.62 3 16.003 3zm6.92 17.38c-.29.82-1.44 1.5-2.3 1.6-.6.1-1.37.15-4.4-.94-3.88-1.36-6.37-4.69-6.56-4.95-.18-.27-1.58-2.1-1.58-4.01s1-2.84 1.36-3.23c.36-.4.79-.5 1.05-.5h.76c.24 0 .56-.1.87.66.31.76 1.05 2.6 1.14 2.79.1.2.17.44.03.71-.14.27-.21.44-.42.68-.2.24-.43.54-.62.72-.2.2-.4.42-.17.83.23.4 1.02 1.68 2.2 2.73 1.52 1.36 2.8 1.78 3.2 1.98.4.2.63.17.86-.1.24-.27.99-1.16 1.26-1.56.27-.4.53-.34.89-.2.36.14 2.3 1.09 2.7 1.29.4.2.66.3.76.46.1.17.1.93-.19 1.75z" />
              </svg>

              <span className="text-base">
                Chat with WhatsApp Agent
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border border-slate-300 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
