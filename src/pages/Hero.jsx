import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { HeroModel } from "../components/3dModels"; // Your 3D model
import { PlayIcon } from "../components/Icons"; // Your Icon

const Hero3D = () => {
  return (
    <section className='relative h-screen w-full bg-black text-white overflow-hidden'>
      {/* 1. Background Video (Correctly placed at the bottom layer) */}
      <video
        src='/Video.mp4'
        poster='/video-poster.jpg' // Optional: An image placeholder
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
        autoPlay
        loop
        muted
        playsInline // Important for iOS and mobile autoplay
      />

      {/* 2. 3D Canvas (with transparent background) */}

      {/* 3. UI Overlay (with a semi-transparent gradient for readability) */}
      <div className='absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/50 to-transparent'>
        <div className='relative text-center px-6 animate-fadeInUp'>
          {/* ... Rest of your UI code ... */}
          <h1
            className='text-4xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4'
            style={{ textShadow: "0 4px 15px rgba(0,0,0,0.7)" }}
          >
            Fuel The
            <br />
            <span className='text-cyan-400'>Bold.</span>
          </h1>
          <p className='max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-8'>
            AI-powered wearable that detect early signs of cardiac arrest and
            guide real-time CPR to save athletes` lives
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='#demo'
              className='bg-cyan-400 text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-cyan-300 transition-all transform hover:scale-105'
            >
              Request a Live Demo
            </a>
            <a
              href='#product-review'
              className='bg-transparent border-2 border-gray-400 text-gray-200 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-700 hover:border-gray-700 transition-all transform hover:scale-105 flex items-center justify-center'
            >
              <PlayIcon />
              Explore the Prototype
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
