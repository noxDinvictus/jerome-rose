'use client';

import { IMAGES } from '@/constant/media.constant';
import { useIsMobile } from '@/hooks/is-mobile';
import { I } from '@/interface';
import { goToId } from '@/utils/custom-function';
import clsx from 'clsx';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { NavigationBody } from '../header/navigation/body';
import { NavigationResponsive } from '../header/navigation/responsive';
import { NavigationWeb } from '../header/navigation/web';
import ProgressBar from '../header/progress-bar';
import { JeromeAndRose } from '../shared/svg/jerome-and-rose.svg';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const navRef = useRef<HTMLDivElement | null>(null);

  const isMobile = useIsMobile(); // Use the custom hook here

  const router = useRouter();
  const route = usePathname();

  useEffect(() => {
    const currentNavRef = navRef.current;

    const ob = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsSticky(true);
          setInitialLoad(false);
        } else {
          setIsSticky(false);
        }
      },
      { threshold: 0 },
    );

    if (currentNavRef) ob.observe(currentNavRef);

    return () => {
      if (currentNavRef) ob.unobserve(currentNavRef);
    };
  }, []);

  const navigate = (data: Readonly<I.Navigation>) => {
    const { id, link } = data;

    if (id === '/') router.push(id);
    else if (route === link) goToId(id);
    else if (link) router.push(link);
    else goToId(id);
  };

  const animate = 'animate__animated animate__zoomInUp text-groom-100';

  return (
    <header id="header" className="font-pw" role="banner">
      <ProgressBar />

      <div className="container relative h-dvh" ref={navRef}>
        <Image
          src={IMAGES.FORMAL.J}
          alt="hero"
          className="absolute -z-[1] object-cover"
          fill
          loading="lazy"
        />

        <NavigationWeb navigate={navigate} />
        <NavigationResponsive navigate={navigate} />

        <div className="center relative isolate h-screen w-full flex-col">
          <h1 className="couple-name w-1/2 md:w-96 md:max-w-4xl sm:max-w-fit">
            <JeromeAndRose />
          </h1>
          <div className="absolute bottom-[70px] flex flex-col text-center">
            <p
              className={clsx(
                animate,
                `text-3xl md:text-xl animate__delay-${isMobile ? '1' : '5'}s`,
              )}
            >
              <span className="mr-2">Isaiah 60:22:</span>
            </p>

            <p
              className={clsx(
                animate,
                `text-2xl md:text-xl animate__delay-${isMobile ? '2' : '5'}s`,
              )}
            >
              <q>When the time is right, I the Lord will make it happen</q>
            </p>
          </div>
        </div>
      </div>

      {!initialLoad && (
        <NavigationBody navigate={navigate} isSticky={isSticky} />
      )}
    </header>
  );
}
