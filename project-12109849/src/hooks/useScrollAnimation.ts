import { useEffect, useRef, useState, useCallback } from 'react';

type AnimationType = 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'fade-in-up';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function useScrollAnimation<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.12,
  rootMargin = '0px 0px -50px 0px',
  animation = 'fade-in-up',
  delay = 0,
  duration = 700,
  once = true,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      });
    },
    [once]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [observerCallback, threshold, rootMargin]);

  const baseClasses = 'transition-all';

  const animationClasses = {
    'fade-in': `opacity-0 ${isVisible ? 'opacity-100' : ''}`,
    'slide-up': `opacity-0 translate-y-10 ${isVisible ? 'opacity-100 translate-y-0' : ''}`,
    'slide-left': `opacity-0 translate-x-10 ${isVisible ? 'opacity-100 translate-x-0' : ''}`,
    'slide-right': `opacity-0 -translate-x-10 ${isVisible ? 'opacity-100 translate-x-0' : ''}`,
    'fade-in-up': `opacity-0 translate-y-8 ${isVisible ? 'opacity-100 translate-y-0' : ''}`,
  }[animation];

  const style: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
  };

  return {
    ref,
    className: `${baseClasses} ${animationClasses}`,
    style,
    isVisible,
  };
}