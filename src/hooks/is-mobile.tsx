import { useEffect, useState } from 'react';

export const useIsMobile = (breakpoint = 767) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Run the check on initial load
    checkIsMobile();

    // Add a resize event listener to update isMobile on window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [breakpoint]);

  return isMobile;
};
