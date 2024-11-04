'use client';

import { useEffect } from 'react';

export default function ProgressBar() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
      const progressBar = document.getElementById('progressBar') as HTMLElement;

      if (progressBar) progressBar.style.width = `${progress}%`;
    };

    document.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="progress-bar-striped fixed left-0 top-0 z-50 h-1 w-0 bg-groom-100 [transition:width_0.5s_ease]"
      id="progressBar"
    />
  );
}
