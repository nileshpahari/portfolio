"use client";
import { useState, useEffect } from 'react';

export const usePerformanceMode = () => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    const checkPerformance = () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const hasReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsLowPerformance(isMobile || hasReducedMotion);
    };

    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  return isLowPerformance;
}; 