// src/components/SolutionSection.jsx

import React from "react";
import { motion } from "framer-motion"; // NEW: Import motion
import {
  WearableIcon,
  BrainIcon,
  AlertIcon,
  HeartPlusIcon,
} from "../components/Icons";

const SolutionSection = () => {
  const steps = [
    {
      icon: <WearableIcon />,
      title: "WEAR",
      description:
        "An ultra-light, non-invasive sensor worn comfortably during high-intensity sports.",
    },
    {
      icon: <BrainIcon />,
      title: "MONITOR",
      description:
        "Our AI continuously analyzes heart rate, HRV, and fatigue metrics against a personalized baseline.",
    },
    {
      icon: <AlertIcon />,
      title: "ALERT",
      description:
        "The system detects high-risk patterns and instantly sends a critical alert with name and GPS location.",
    },
    {
      icon: <HeartPlusIcon />,
      title: "ACT",
      description:
        "The app provides real-time, on-screen CPR guidance and automated emergency service contact.",
    },
  ];

  // NEW: Staggered animation for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // NEW: Animation for each card
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id='solution' className='bg-black text-white py-20 md:py-32'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight'>
          From Real-Time Data to Decisive Action.
        </h2>
        <p className='mt-4 text-lg text-gray-400 max-w-3xl mx-auto'>
          Our system works in four seamless steps to provide an unparalleled
          layer of safety.
        </p>
       
        <motion.div
          className='mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            // UPDATED: Changed div to motion.div for animation
            <motion.div
              key={index}
              className='bg-gray-900 p-8 rounded-2xl border border-gray-800 text-left'
              variants={cardVariants}
              // NEW: Added hover effect
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(34, 211, 238, 0.3)",
                transition: { duration: 0.2 },
              }}
            >
              <div className='bg-gray-800 text-cyan-400 w-16 h-16 rounded-xl flex items-center justify-center mb-6'>
                {React.cloneElement(step.icon, { className: "h-8 w-8" })}
              </div>
              <h3 className='text-xl font-bold tracking-wider uppercase mb-3'>
                {step.title}
              </h3>
              <p className='text-gray-400'>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
