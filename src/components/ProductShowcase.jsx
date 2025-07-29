import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, Stage } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Helper for class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

// == 3D MODEL COMPONENTS ==
// Model for the Hero section
function HeroModel(props) {
  // Using a placeholder URL for a conceptual 3D model.
  const { scene } = useLoader(
    GLTFLoader,
    "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf"
  );

  useFrame((state, delta) => {
    if (scene) {
      scene.rotation.y += delta * 0.2;
    }
  });

  return <primitive object={scene} {...props} />;
}
const Hero3D = () => {
  return (
    <section className='relative h-screen w-full bg-black text-white overflow-hidden'>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        className='absolute inset-0 z-0'
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <HeroModel scale={1.2} position={[0, -0.5, 0]} />
          <Environment preset='city' />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      <div className='absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='relative z-20 text-center px-6'>
          <h1
            className='text-4xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4'
            style={{ textShadow: "0 4px 15px rgba(0,0,0,0.7)" }}
          >
            Intelligence Embodied.
            <br />
            <span className='text-cyan-400'>Safety Realized.</span>
          </h1>
          <p className='max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-8'>
            Our AI-powered wearable provides a new dimension of proactive
            safety, turning real-time biometric data into life-saving action.
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

const ProductShowcase = () => {
  return (
    <section
      id='product-review'
      className='bg-gray-900 text-white py-20 md:py-32'
    >
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight'>
            Explore the STOMPVEN V.1 Prototype
          </h2>
          <p className='mt-4 text-lg text-gray-400 max-w-3xl mx-auto'>
            An interactive look at the hardware that makes real-time safety
            possible. Engineered for performance, comfort, and reliability.
          </p>
        </div>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* 3D Model Viewer */}
          <div className='h-96 lg:h-[500px] bg-black rounded-2xl border border-gray-800 p-4'>
            <Canvas camera={{ fov: 50 }}>
              <Suspense fallback={null}>
                <Stage environment='city' intensity={0.6}>
                  <ProductModel scale={0.01} />
                </Stage>
              </Suspense>
              <OrbitControls autoRotate enableZoom />
            </Canvas>
          </div>
          {/* Features & Review */}
          <div>
            <h3 className='text-3xl font-bold mb-4 text-cyan-400'>
              Design & Engineering
            </h3>
            <p className='text-gray-400 mb-6'>
              The STOMPVEN V.1 is built from hypoallergenic, medical-grade
              materials, ensuring it remains unnoticed by the athlete while
              providing constant monitoring. The low-profile design fits
              seamlessly under any uniform.
            </p>
            <ul className='space-y-4 mb-8'>
              <li className='flex items-center'>
                <span className='text-cyan-400 mr-3'>✓</span> Multi-lead
                biometric sensors for EKG-level accuracy.
              </li>
              <li className='flex items-center'>
                <span className='text-cyan-400 mr-3'>✓</span> Integrated GPS and
                accelerometer for precise location and fatigue tracking.
              </li>
              <li className='flex items-center'>
                <span className='text-cyan-400 mr-3'>✓</span> Haptic feedback
                engine for discreet on-person alerts.
              </li>
              <li className='flex items-center'>
                <span className='text-cyan-400 mr-3'>✓</span> 24-hour battery
                life with rapid wireless charging.
              </li>
            </ul>
            <figure className='bg-black p-6 rounded-xl border border-gray-800'>
              <blockquote className='text-gray-300 italic'>
                "Holding the prototype, you feel the density of the technology
                but also its lightness. It's clear this was designed with the
                athlete's experience as the top priority."
              </blockquote>
              <figcaption className='mt-4 text-right text-cyan-400 font-semibold'>
                - First Look Review, Athletic Tech Weekly
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductShowcase;
