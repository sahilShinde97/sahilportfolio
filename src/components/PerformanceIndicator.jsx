import React, { useState, useEffect } from 'react';
import { getDevicePerformance, getPerformanceSettings } from '../utils/performanceDetection';

const PerformanceIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(false);
  const [performanceTier, setPerformanceTier] = useState('medium');
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const tier = getDevicePerformance();
    const perfSettings = getPerformanceSettings(tier);
    setPerformanceTier(tier);
    setSettings(perfSettings);

    // Show indicator for 3 seconds on load
    setShowIndicator(true);
    const timer = setTimeout(() => {
      setShowIndicator(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showIndicator || !settings) return null;

  const getTierColor = (tier) => {
    switch (tier) {
      case 'low': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'high': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getTierLabel = (tier) => {
    switch (tier) {
      case 'low': return 'Low Performance Mode';
      case 'medium': return 'Medium Performance Mode';
      case 'high': return 'High Performance Mode';
      default: return 'Unknown Mode';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-3 text-white text-sm border border-white/20">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${getTierColor(performanceTier).replace('text-', 'bg-')}`}></div>
        <span className="font-medium">{getTierLabel(performanceTier)}</span>
      </div>
      <div className="mt-2 text-xs text-gray-300">
        <div>Particles: {settings.particleCount}</div>
        <div>Lights: {settings.maxLights}</div>
        <div>Shadows: {settings.enableShadows ? 'On' : 'Off'}</div>
        <div>Post-processing: {settings.enablePostprocessing ? 'On' : 'Off'}</div>
      </div>
    </div>
  );
};

export default PerformanceIndicator;
