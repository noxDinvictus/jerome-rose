import { useEffect, useState } from 'react';

const useScrollTop = (): boolean => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the user is already scrolled
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isAtTop;
};

export default useScrollTop;
