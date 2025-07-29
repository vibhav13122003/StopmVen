// src/components/3dModels/HeroModel.js

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ✨ Note: Replaced useLoader with useGLTF from drei for better suspense integration
// and easier access to nodes/materials if needed later.
export function HeroModel(props) {
  const { scene } = useGLTF("/TRQQ.gltf");
  const modelRef = useRef();

  // ✨ NEW: Interactive rotation based on mouse movement
  useFrame((state) => {
    if (modelRef.current) {
      // Get mouse coordinates (values between -1 and 1)
      const { x, y } = state.mouse;

      // Calculate target rotation
      // The model will tilt up/down slightly with vertical mouse movement
      // and rotate left/right with horizontal mouse movement.
      const targetRotation = new THREE.Euler(
        -y * 0.2, // Tilt based on mouse Y
        x * 0.4, // Pan based on mouse X
        0
      );

      // ✨ Smoothly interpolate to the target rotation (lerp)
      // This prevents jerky movements and feels more natural.
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        targetRotation.y,
        0.05
      );
      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        targetRotation.x,
        0.05
      );
    }
  });

  // ✨ Using a ref to apply the rotation to the primitive object
  return <primitive ref={modelRef} object={scene} {...props} />;
}

// ✨ Pro-tip: For performance, pre-load assets
useGLTF.preload("/TRQQ.gltf");
