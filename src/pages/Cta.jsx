import React from "react";
import { LogoIcon } from "../components/Icons";

const CtaSection = () => {
  return (
    <section id='demo' className='bg-black text-white py-20 md:py-32'>
      <div className='container mx-auto px-6 text-center'>
        <LogoIcon className='h-16 w-16 text-cyan-400 mx-auto mb-6' />
        <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight'>
          Ensure Their Safety. Today.
        </h2>
        <p className='mt-4 text-lg text-gray-400 max-w-2xl mx-auto'>
          Get a personalized demo for your team. See the live dashboard, walk
          through an alert simulation, and learn how our technology can be
          integrated into your team's safety protocol.
        </p>
        <form className='mt-10 max-w-xl mx-auto flex flex-col sm:flex-row gap-4'>
          <input
            type='email'
            placeholder='Enter your work email'
            className='flex-grow bg-gray-800 border border-gray-700 rounded-lg py-4 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400'
            aria-label='Work email for demo request'
          />
          <button
            type='submit'
            className='bg-cyan-400 text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-cyan-300 transition-all transform hover:scale-105'
          >
            Request a Demo
          </button>
        </form>
      </div>
    </section>
  );
};

export default CtaSection;