import { useEffect, useRef, useState } from "react";
import { School, Users, BookOpen, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: School,
    value: 3,
    suffix: "+",
    label: "Years in Education Tech",
    description: "Supporting schools since 2022",
    iconStyle: "bg-indigo-50 text-indigo-600",
    border: "border-indigo-200",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Partner Schools",
    description: "Institutions using our platform daily",
    iconStyle: "bg-emerald-50 text-emerald-600",
    border: "border-emerald-200",
  },
  {
    icon: BookOpen,
    value: 2000,
    suffix: "+",
    label: "Students Managed",
    description: "Admissions, academics & attendance",
    iconStyle: "bg-sky-50 text-sky-600",
    border: "border-sky-200",
  },
  {
    icon: GraduationCap,
    value: 50,
    suffix: "+",
    label: "Cities Covered",
    description: "Trusted across multiple regions",
    iconStyle: "bg-violet-50 text-violet-600",
    border: "border-violet-200",
  },
];

type AnimatedCounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-slate-900">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="pt-4 md:pt-20 bg-slate-50 relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-indigo-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-sky-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Trusted by Educational Institutions
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5">
            Real Impact Through
            <span className="block text-indigo-600">
              Smarter School Management
            </span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg">
            Helping schools streamline operations, improve visibility, and
            deliver better academic outcomes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                bg-white 
                rounded-3xl 
                p-6 md:p-8 
                text-center 
                border border-indigo-200
                shadow-sm 
                hover:shadow-lg 
                hover:-translate-y-1 
                transition-all
              `}
            >
              {/* Icon */}
              <div
                className={`mx-auto mb-4 w-14 h-14 rounded-xl flex items-center justify-center ${stat.iconStyle}`}
              >
                <stat.icon className="w-7 h-7" />
              </div>

              <AnimatedCounter end={stat.value} suffix={stat.suffix} />

              <div className="mt-2 font-semibold text-slate-900">
                {stat.label}
              </div>

              <div className="mt-1 text-sm text-slate-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
