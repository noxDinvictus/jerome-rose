'use client';

import { c, headerId } from '@/constant';
import { I } from '@/interface';
import { goToId } from '@/utils/custom-function';
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
    const { id, isLink } = data;

    if (id === '/') router.push(id);
    else if (route.includes(headerId.ourStory)) goToId(id);
    else if (isLink) router.push(`wedding/${id}`);
    else goToId(id);
  };

  return (
    <header id="header" className="font-pw">
      <ProgressBar />

      {!initialLoad && (
        <NavigationBody navigate={navigate} isSticky={isSticky} />
      )}

      <div className="container relative isolate h-screen" ref={navRef}>
        <Image
          src="/bg.webp"
          alt="hero"
          className="absolute -z-[1] object-cover"
          fill
          loading="lazy"
        />

        <NavigationWeb navigate={navigate} />
        <NavigationResponsive navigate={navigate} />

        <div className="absolute bottom-0 z-10 mb-20 w-full text-center text-white">
          <h1 className="animate__animated animate__zoomInDown animate__delay-7s mb-5 font-allura text-7xl font-bold">
            Rose &amp; Jerome
          </h1>
          <p className="animate__animated animate__zoomInUp animate__delay-8s">
            {moment(c.date).format('MMMM DD, YYYY')}
          </p>
        </div>
      </div>
    </header>
  );
}
