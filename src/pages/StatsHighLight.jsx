import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Custom hook to animate numbers
const useCountUp = (start, end, duration, trigger) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!trigger) return;
    let current = start;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = (end - start) / steps;

    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      setValue(current);
    }, stepTime);

    return () => clearInterval(interval);
  }, [trigger, end, start, duration]);

  return Math.round(value);
};

const parseStat = (stat) => {
  if (stat.includes("MINS")) {
    return [parseInt(stat), " MINS"];
  }
  if (stat.includes("M+")) {
    return [parseFloat(stat), "M+"];
  }
  if (stat.includes("K+")) {
    return [parseFloat(stat), "K+"];
  }
  return [parseInt(stat), ""];
};

const StatsHighlightSection = () => {
  const stats = [
    {
      number: "7.9M+",
      title: "Student Athletes",
      description:
        "Participating in high school sports in the U.S. alone, representing a massive community in need of protection.",
    },
    {
      number: "250K+",
      title: "Data Points Per Hour",
      description:
        "Our AI analyzes over a quarter-million biometric data points per athlete, per hour to detect subtle risks.",
    },
    {
      number: "4 MINS",
      title: "Faster Response",
      description:
        "Teams using  STOMPVEN have shown an average 4-minute reduction in time-to-first-response for critical events.",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false, // allows re-trigger
    threshold: 0.3, // 30% visible to trigger
  });

  return (
    <section ref={ref} className='bg-gray-900 py-24'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          {stats.map((stat, index) => {
            const [num, suffix] = parseStat(stat.number);
            const animated = useCountUp(0, num, 1000, inView);

            return (
              <div
                key={index}
                className='bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 transition-transform duration-300'
              >
                <p className='text-5xl font-extrabold text-[#C8102E]'>
                  {animated}
                  {suffix}
                </p>
                <h3 className='text-xl font-bold text-white mt-4'>
                  {stat.title}
                </h3>
                <p className='text-gray-400 mt-2 max-w-xs'>
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsHighlightSection;
