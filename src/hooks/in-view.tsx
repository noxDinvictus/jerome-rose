import { useEffect, useMemo, useRef, useState } from 'react';

export function useInView<T extends HTMLElement>() {
  const options: IntersectionObserverInit = useMemo(
    () => ({ threshold: 0 }),
    [],
  );

  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return { ref, isInView };
}
