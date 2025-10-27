const Earth = () => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
      dpr={[1, 2]} // Adjust DPR based on device capability
    >
      {/* ... rest of your Earth component */}
    </Canvas>
  );
};