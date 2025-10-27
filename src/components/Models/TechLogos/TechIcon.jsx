import React, { createContext, useContext, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { getDevicePerformance, getPerformanceSettings } from '../../../utils/performanceDetection';

// Create a context for shared Canvas
const TechCanvasContext = createContext();

// Shared Canvas Provider
export const TechCanvasProvider = ({ children }) => {
  const performanceTier = getDevicePerformance();
  const settings = getPerformanceSettings(performanceTier);

  return (
    <TechCanvasContext.Provider value={{ settings, performanceTier }}>
      <Canvas
        dpr={settings.pixelRatio}
        antialias={settings.antialias}
        gl={{ 
          powerPreference: "high-performance",
          antialias: settings.antialias,
          alpha: false,
          stencil: false,
          depth: true
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5,5,5]} intensity={1}/>
        <Environment preset="city" />
        {children}
      </Canvas>
    </TechCanvasContext.Provider>
  );
};

// Individual Tech Icon Component
const TechIconModel = ({ model, index }) => {
  const scene = useGLTF(model.modelPath);
  const { settings } = useContext(TechCanvasContext);

  useEffect(() => {
    if (model.name === 'Interactive Developer') {
        scene.scene.traverse((child) => {
            if (child.isMesh  && child.name === 'Object_5') {
                child.material  = new THREE.MeshStandardMaterial({ color: 'white'})
            }
        })
    }
  },[scene])

  return (
    <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
      <group scale={model.scale} rotation={model.rotation}>
        <primitive object={scene.scene} />
      </group>
    </Float>
  );
};

// Optimized TechIcon wrapper
const TechIcon = ({ model, index }) => {
  return (
    <div className="w-full h-full">
      <TechCanvasProvider>
        <TechIconModel model={model} index={index} />
      </TechCanvasProvider>
    </div>
  );
};

export default TechIcon;