import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Computer from "./Computer";
import { getDevicePerformance, getPerformanceSettings } from "../../../utils/performanceDetection";

const ContactExperience = () => {
  const performanceTier = getDevicePerformance();
  const settings = getPerformanceSettings(performanceTier);

  return (
    <Canvas 
      shadows={settings.enableShadows} 
      camera={{ position: [0, 3, 7], fov: settings.fov }}
      dpr={settings.pixelRatio}
      antialias={settings.antialias}
      gl={{ 
        powerPreference: "high-performance",
        antialias: settings.antialias,
        alpha: false,
        stencil: false,
        depth: true
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} color="#fff4e6" />

        <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

        {settings.enableShadows && (
          <directionalLight
            position={[5, 9, 1]}
            castShadow
            intensity={2.5}
            color="#ffd9b3"
          />
        )}

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
        />

        <group scale={[1, 1, 1]}>
          <mesh
            receiveShadow={settings.enableShadows}
            position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#a46b2d" />
          </mesh>
        </group>

        <group scale={0.03} position={[0, -1.49, -2]} castShadow={settings.enableShadows}>
          <Computer />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;