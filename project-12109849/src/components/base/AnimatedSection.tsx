import { ReactNode } from 'react';
import useScrollAnimation, { type UseScrollAnimationOptions } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps extends UseScrollAnimationOptions {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export default function AnimatedSection({
  children,
  className = '',
  as: Tag = 'div',
  threshold,
  rootMargin,
  animation,
  delay,
  duration,
  once,
}: AnimatedSectionProps) {
  const { ref, className: animClass, style } = useScrollAnimation({
    threshold,
    rootMargin,
    animation,
    delay,
    duration,
    once,
  });

  return (
    <Tag ref={ref} className={`${animClass} ${className}`} style={style}>
      {children}
    </Tag>
  );
}