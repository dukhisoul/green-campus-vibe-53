
import { useEffect, useState, useRef } from 'react';
import { BookOpen, Users, Trophy, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  {
    icon: BookOpen,
    value: 150,
    label: "Courses Offered",
    color: "text-emerald-500",
  },
  {
    icon: Users,
    value: 5000,
    label: "Students Enrolled",
    color: "text-blue-500",
  },
  {
    icon: Trophy,
    value: 95,
    label: "Awards Won",
    color: "text-amber-500",
  },
  {
    icon: GraduationCap,
    value: 250,
    label: "Faculty Members",
    color: "text-purple-500",
  },
];

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const counterElement = document.getElementById(`counter-${index}`);
      if (!counterElement) return;

      let start = 0;
      const end = stat.value;
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      const increment = end / totalFrames;

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          counterElement.textContent = end.toString();
          clearInterval(counter);
        } else {
          counterElement.textContent = Math.floor(start).toString();
        }
      }, frameDuration);
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-college-700 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center flex flex-col items-center border border-college-600 bg-college-800/30 rounded-lg p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm"
            >
              <div className={cn("rounded-full p-3 mb-4", stat.color.replace("text-", "bg-").concat("/10"))}>
                <stat.icon className={cn("h-8 w-8", stat.color)} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                <span id={`counter-${index}`}>0</span>
                <span className="text-college-300">+</span>
              </h3>
              <p className="text-college-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
