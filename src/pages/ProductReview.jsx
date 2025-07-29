import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import { EffectComposer, Bloom, SSAO } from "@react-three/postprocessing";
import { motion } from "framer-motion";
import * as THREE from "three";

// --- 3D Model Component ---
// This component loads your specific GLTF model.
function HeroModel(props) {
  // IMPORTANT: This assumes your model is in the public folder at /TRQQ.gltf
  const { scene } = useGLTF("/TRQQ.gltf");
  return <primitive object={scene} {...props} />;
}
// Pre-load the model for faster appearance
useGLTF.preload("/TRQQ.gltf");

// --- Animation Variants for Framer Motion ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// --- Main Product Review Section Component ---
const ProductReviewSection = () => {
  return (
    <section
      id='product-review'
      // The dark background from your original component
      className='bg-gray-900 text-white py-20 md:py-32'
    >
      <div className='container mx-auto px-6'>
        {/* Animated text content using Framer Motion */}
        <motion.div
          className='text-center mb-16'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2
            className='text-4xl md:text-5xl font-extrabold tracking-tight'
            variants={itemVariants}
          >
            Explore the STOMPVEN V.1 Prototype
          </motion.h2>
          <motion.p
            className='mt-4 text-lg text-gray-400 max-w-3xl mx-auto'
            variants={itemVariants}
          >
            An interactive look at the hardware that makes real-time safety
            possible. Engineered for performance, comfort, and reliability.
          </motion.p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* 3D Model Viewer */}
          <div className='h-96 lg:h-[500px] relative cursor-grab active:cursor-grabbing'>
            <Canvas
              shadows
              camera={{ position: [0, 0.5, 4], fov: 45 }}
              dpr={[1, 2]}
              gl={{
                antialias: true,
                outputEncoding: THREE.sRGBEncoding,
              }}
              onCreated={({ gl }) => {
                gl.toneMapping = THREE.ACESFilmicToneMapping;
                gl.toneMappingExposure = 1.25;
              }}
            >
              <Suspense fallback={null}>
                <Environment
                  preset="warehouse"
                  background
                />

                <HeroModel scale={28} position={[0, -0.5, 0]} />

                <ContactShadows
                  position={[0, -0.5, 0]}
                  scale={10}
                  blur={1.5}
                  far={1}
                  opacity={0.75}
                />
              </Suspense>

              <OrbitControls
                autoRotate
                autoRotateSpeed={0.5}
                enableZoom
                enablePan={false}
                target={[0, -0.25, 0]}
              />

              <EffectComposer>
                <SSAO
                  radius={0.4}
                  intensity={20}
                  luminanceInfluence={0.4}
                  color='black'
                />
                <Bloom
                  luminanceThreshold={0.6}
                  luminanceSmoothing={0.9}
                  height={300}
                  intensity={0.7}
                />
              </EffectComposer>
            </Canvas>
          </div>

          {/* Your original UI for features and review */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h3
              className='text-3xl font-bold mb-4 text-cyan-400'
              variants={itemVariants}
            >
              Design & Engineering
            </motion.h3>
            <motion.p className='text-gray-400 mb-6' variants={itemVariants}>
              The STOMPVEN V.1 is built from hypoallergenic, medical-grade
              materials, ensuring it remains unnoticed by the athlete while
              providing constant monitoring. The low-profile design fits
              seamlessly under any uniform.
            </motion.p>
            <motion.ul className='space-y-4 mb-8' variants={itemVariants}>
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
            </motion.ul>
            <motion.figure
              className='bg-black p-6 rounded-xl border border-gray-800'
              variants={itemVariants}
            >
              <blockquote className='text-gray-300 italic'>
                "Holding the prototype, you feel the density of the technology
                but also its lightness. It's clear this was designed with the
                athlete's experience as the top priority."
              </blockquote>
              <figcaption className='mt-4 text-right text-cyan-400 font-semibold'>
                - First Look Review, Athletic Tech Weekly
              </figcaption>
            </motion.figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductReviewSection;
