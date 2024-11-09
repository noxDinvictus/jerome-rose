'use client';

import { c, headerId } from '@/constant';
import { IMAGES } from '@/constant/media.constant';
import { useIsMobile } from '@/hooks/is-mobile';
import { I } from '@/interface';
import { goToId } from '@/utils/custom-function';
import clsx from 'clsx';
import moment from 'moment';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { NavigationBody } from '../header/navigation/body';
import { NavigationResponsive } from '../header/navigation/responsive';
import { NavigationWeb } from '../header/navigation/web';
import ProgressBar from '../header/progress-bar';

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
    else if (route.includes(headerId.ourStory)) goToId(id);
    else if (link) router.push(link);
    else goToId(id);
  };

  return (
    <header id="header" className="font-pw" role="banner">
      <ProgressBar />

      {!initialLoad && (
        <NavigationBody navigate={navigate} isSticky={isSticky} />
      )}

      <div className="container relative h-screen" ref={navRef}>
        <Image
          src={IMAGES.hero}
          alt="hero"
          className="absolute -z-[1] object-cover"
          fill
          loading="lazy"
        />

        <NavigationWeb navigate={navigate} />
        <NavigationResponsive navigate={navigate} />

        <div className="absolute bottom-0 z-10 mb-20 w-full text-center text-white">
          <h1
            className={clsx(
              'animate__animated animate__zoomInDown mb-5 font-allura text-7xl font-bold md:text-5xl',
              !isMobile && 'animate__delay-3s',
            )}
          >
            Jerome & Rose
          </h1>
          <p
            className={clsx(
              'animate__animated animate__zoomInUp',
              isMobile ? 'animate__delay-1s' : 'animate__delay-4s',
            )}
          >
            {moment(c.date).format('MMMM DD, YYYY')}
          </p>
        </div>
      </div>
    </header>
  );
}
