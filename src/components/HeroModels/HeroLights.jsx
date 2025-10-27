import * as THREE from "three";

const HeroLights = ({ maxLights = 6, enableShadows = true }) => {
  const lights = [];
  
  // Primary lighting
  lights.push(
    <spotLight
      key="main"
      position={[2, 5, 6]}
      angle={0.15}
      intensity={100}
      penumbra={0.2}
      color="white"
      castShadow={enableShadows}
    />
  );

  // Secondary lighting (only if we have room for more lights)
  if (maxLights >= 2) {
    lights.push(
      <spotLight
        key="secondary"
        position={[4, 5, 4]}
        angle={0.3}
        intensity={40}
        penumbra={0.2}
        color="#4cc9f0"
        castShadow={enableShadows}
      />
    );
  }

  // Tertiary lighting (only if we have room for more lights)
  if (maxLights >= 3) {
    lights.push(
      <spotLight
        key="tertiary"
        position={[-3, 5, 5]}
        angle={0.4}
        intensity={60}
        penumbra={1}
        color="#9d4edd"
        castShadow={enableShadows}
      />
    );
  }

  // Area light (only if we have room for more lights)
  if (maxLights >= 4) {
    lights.push(
      <primitive
        key="area"
        object={new THREE.RectAreaLight('#A259ff', 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={15}
        rotation={[Math.PI / 4, Math.PI / 4, 0]}
      />
    );
  }

  // Point lights (only if we have room for more lights)
  if (maxLights >= 5) {
    lights.push(
      <pointLight
        key="point1"
        position={[0, 1, 0]}
        intensity={10}
        color="#7209b7"
      />
    );
  }

  if (maxLights >= 6) {
    lights.push(
      <pointLight
        key="point2"
        position={[1, 2, -2]}
        intensity={10}
        color="#0d00a4"
      />
    );
  }

  return <>{lights}</>;
};

export default HeroLights;
