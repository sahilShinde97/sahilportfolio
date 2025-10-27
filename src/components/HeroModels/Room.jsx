import React, { useRef, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// LOD distances based on performance tier
const LOD_DISTANCES = {
  low: 5,
  medium: 10,
  high: 15
};

// Simplified materials for LOD
const createLODMaterial = (baseMaterial) => {
  return new THREE.MeshBasicMaterial({
    color: baseMaterial.color || "#ffffff",
    map: baseMaterial.map,
    transparent: baseMaterial.transparent,
    opacity: baseMaterial.opacity
  });
};

export function Room({ enablePostprocessing = true, performanceTier = 'medium', ...props }) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();
  const matcapTexture = useTexture("/images/textures/mat1.png");
  const cameraRef = useRef();
  
  const lodDistance = LOD_DISTANCES[performanceTier];

  // Create materials
  const curtainMaterial = new THREE.MeshPhongMaterial({
    color: "#d90429",
  });

  const bodyMaterial = new THREE.MeshPhongMaterial({
    map: matcapTexture,
  });

  const tableMaterial = new THREE.MeshPhongMaterial({
    color: "#582f0e",
  });

  const radiatorMaterial = new THREE.MeshPhongMaterial({
    color: "#fff",
  });

  const compMaterial = new THREE.MeshStandardMaterial({
    color: "#fff",
  });

  const pillowMaterial = new THREE.MeshPhongMaterial({
    color: "#8338ec",
  });

  const chairMaterial = new THREE.MeshPhongMaterial({
    color: "#000",
  });

  // Create LOD materials for low-end devices
  const lodMaterials = useMemo(() => {
    if (performanceTier === 'low') {
      return {
        curtain: createLODMaterial(curtainMaterial),
        body: createLODMaterial(bodyMaterial),
        table: createLODMaterial(tableMaterial),
        radiator: createLODMaterial(radiatorMaterial),
        comp: createLODMaterial(compMaterial),
        pillow: createLODMaterial(pillowMaterial),
        chair: createLODMaterial(chairMaterial),
      };
    }
    return null;
  }, [performanceTier]);

  // Get material based on LOD
  const getMaterial = (baseMaterial, lodMaterial) => {
    return performanceTier === 'low' ? lodMaterial : baseMaterial;
  };

  // Track camera distance for LOD
  useFrame((state) => {
    if (cameraRef.current) {
      const distance = state.camera.position.distanceTo(new THREE.Vector3(0, -3.5, 0));
      // You can use this distance to further optimize rendering
    }
  });

  return (
    <group {...props} dispose={null}>
      {enablePostprocessing && (
        <EffectComposer>
          <SelectiveBloom
            selection={screensRef}
            intensity={1.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            blendFunction={BlendFunction.ADD}
          />
        </EffectComposer>
      )}
      
      {/* High-priority meshes (always render) */}
      <mesh
        geometry={nodes.emis_lambert1_0.geometry}
        material={materials.lambert1}
        ref={screensRef}
      />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={getMaterial(compMaterial, lodMaterials?.comp)} />
      
      {/* Medium-priority meshes (render based on performance) */}
      {performanceTier !== 'low' && (
        <>
          <mesh
            geometry={nodes._________6_blinn1_0.geometry}
            material={getMaterial(curtainMaterial, lodMaterials?.curtain)}
          />
          <mesh geometry={nodes.body1_blinn1_0.geometry} material={getMaterial(bodyMaterial, lodMaterials?.body)} />
          <mesh geometry={nodes.cabin_blinn1_0.geometry} material={getMaterial(tableMaterial, lodMaterials?.table)} />
          <mesh
            geometry={nodes.chair_body_blinn1_0.geometry}
            material={getMaterial(chairMaterial, lodMaterials?.chair)}
          />
          <mesh
            geometry={nodes.handls_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.keyboard_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.monitor2_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.monitor3_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.pillows_blinn1_0.geometry}
            material={getMaterial(pillowMaterial, lodMaterials?.pillow)}
          />
          <mesh
            geometry={nodes.radiator_blinn1_0.geometry}
            material={getMaterial(radiatorMaterial, lodMaterials?.radiator)}
          />
          <mesh geometry={nodes.table_blinn1_0.geometry} material={getMaterial(tableMaterial, lodMaterials?.table)} />
        </>
      )}
      
      {/* Low-priority meshes (only render on high-end devices) */}
      {performanceTier === 'high' && (
        <>
          <mesh
            geometry={nodes.kovrik_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.lamp_bl_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.lamp_white_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.miuse_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.pCylinder5_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.polySurface53_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.radiator_blinn1_0001.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.railing_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.red_bttns_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.red_vac_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.stylus_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.tablet_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.triangle_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.vac_black_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.vacuum1_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.vacuumgrey_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.vires_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.window_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            geometry={nodes.window4_phong1_0.geometry}
            material={materials.phong1}
          />
        </>
      )}
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");