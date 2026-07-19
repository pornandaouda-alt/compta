import { useState, useCallback, useRef, useEffect } from 'react';

interface UseCountUpOptions {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function useCountUp({ target, suffix = '', prefix = '', duration = 1500 }: UseCountUpOptions) {
  const [display, setDisplay] = useState(target);
  const [hovered, setHovered] = useState(false);
  const [animating, setAnimating] = useState(false);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  const animate = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    startRef.current = 0;

    const step = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplay(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setAnimating(false);
      }
    };
    rafRef.current = requestAnimationFrame(step);
  }, [target, duration, animating]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const onMouseEnter = useCallback(() => {
    setHovered(true);
    animate();
  }, [animate]);

  const onMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  return {
    display: `${prefix}${display.toLocaleString()}${suffix}`,
    hovered,
    onMouseEnter,
    onMouseLeave,
  };
}