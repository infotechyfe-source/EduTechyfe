import { Target, Eye, Rocket, MonitorSpeakerIcon, IdCard, IdCardIcon } from "lucide-react";
import {
  Users,
  User,
  Settings,
} from "lucide-react";
const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-16 pt-4 md:pt-24 pb-4 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
            Built for Every Role in Your School
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-600">
            Smart, role-based access ensures each user sees exactly what they need — nothing more, nothing less.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Administrator */}
          <div className="group bg-gradient-to-br from-indigo-50 to bg-purple-100 rounded-3xl p-8 shadow-lg border border-indigo-200 hover:shadow-2xl transition-all duration-300 hover:ring-indigo-400 cursor-pointer">
            <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl transform group-hover:scale-110 transition-transform duration-300">
              <Settings className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
              Administrators
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Centralized dashboards to manage staff, monitor academics, track finances, and make data-driven decisions with confidence.
            </p>
          </div>

          {/* Teachers */}
          <div className="group bg-gradient-to-br from-green-50 to-teal-100 rounded-3xl p-8 shadow-lg border border-indigo-200 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white text-2xl transform group-hover:scale-110 transition-transform duration-300">
              <User className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-green-500 transition-colors duration-300">
              Teachers
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Easily manage classes, mark attendance, assign homework, conduct exams, and track student progress from one dashboard.
            </p>
          </div>

          {/* Parents */}
          <div className="group bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-8 shadow-lg border border-indigo-200 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white text-2xl transform group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-yellow-500 transition-colors duration-300">
              Parents
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Stay informed with real-time access to attendance, results, fees, announcements, and direct communication with teachers.
            </p>
          </div>

          {/* Students */}
          <div className="group bg-gradient-to-br from-pink-50 to-rose-100 rounded-3xl p-8 shadow-lg border border-indigo-200 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-2xl transform group-hover:scale-110 transition-transform duration-300">
              <IdCardIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-pink-500 transition-colors duration-300">
              Students
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              View timetables, submit assignments, check exam schedules, and access learning resources anytime, anywhere.
            </p>
          </div>

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
    </section>
  );
};

export default AboutSection;
