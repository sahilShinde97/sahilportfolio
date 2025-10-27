import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber"; // <-- Import Canvas from fiber
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { getDevicePerformance, getPerformanceSettings } from "../../utils/performanceDetection";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  
  // Get performance settings based on device
  const performanceTier = getDevicePerformance();
  const settings = getPerformanceSettings(performanceTier);

  return (
    <Canvas 
      camera={{ position: [0, 0, 15], fov: settings.fov }}
      dpr={settings.pixelRatio}
      antialias={settings.antialias}
      shadows={settings.enableShadows}
      performance={{ min: 0.5 }}
      gl={{ 
        powerPreference: "high-performance",
        antialias: settings.antialias,
        alpha: false,
        stencil: false,
        depth: true
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
        />

        <HeroLights maxLights={settings.maxLights} enableShadows={settings.enableShadows} />
        <Particles count={settings.particleCount} />

        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room 
            enablePostprocessing={settings.enablePostprocessing} 
            performanceTier={performanceTier}
          />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
