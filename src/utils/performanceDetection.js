// Performance detection utility
export const getDevicePerformance = () => {
  // Check for mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Check for low-end devices based on hardware concurrency
  const cores = navigator.hardwareConcurrency || 4;
  const isLowEnd = cores <= 2;
  
  // Check for WebGL capabilities
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  const isWebGLSupported = !!gl;
  
  // Determine performance tier
  if (isMobile || isLowEnd || !isWebGLSupported) {
    return 'low';
  } else if (cores <= 4) {
    return 'medium';
  } else {
    return 'high';
  }
};

export const getPerformanceSettings = (tier = 'medium') => {
  const settings = {
    low: {
      pixelRatio: 0.5,
      antialias: false,
      particleCount: 25,
      shadowMapSize: 512,
      maxLights: 2,
      enablePostprocessing: false,
      enableShadows: false,
      lodDistance: 5,
      fov: 50
    },
    medium: {
      pixelRatio: 1,
      antialias: true,
      particleCount: 50,
      shadowMapSize: 1024,
      maxLights: 4,
      enablePostprocessing: true,
      enableShadows: true,
      lodDistance: 10,
      fov: 45
    },
    high: {
      pixelRatio: Math.min(window.devicePixelRatio, 2),
      antialias: true,
      particleCount: 100,
      shadowMapSize: 2048,
      maxLights: 6,
      enablePostprocessing: true,
      enableShadows: true,
      lodDistance: 15,
      fov: 45
    }
  };
  
  return settings[tier];
};
