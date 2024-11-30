'use client';

import { headerId, headerNav, landingPageSubNav } from '@/constant';
import { I } from '@/interface';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface IProps extends Readonly<I.Navigate> {
  readonly className?: string;
  readonly delay?: boolean;
  readonly isSticky?: boolean;
}

export default function NavigationButton(props: IProps) {
  const { navigate, className, delay, isSticky } = props;

  const [currentNav, setCurrentNav] = useState(Array.from(headerNav));

  const route = usePathname();

  const isActive = (data: Readonly<I.Navigation>) => {
    if (route === data.link) return 'is-active';
  };

  useEffect(() => {
    if (route === headerId.wedding) {
      const updatedNav = [...headerNav];
      updatedNav.splice(1, 0, ...landingPageSubNav);
      setCurrentNav(updatedNav);
    } else {
      setCurrentNav([...headerNav]);
    }
  }, [route]);

  return (
    <>
      {currentNav.map((e, i) => {
        return (
          <button
            onClick={() => navigate(e)}
            aria-label="navigation toggle"
            key={e.id}
            className={clsx(
              isActive(e),
              className,
              delay && `animate__delay-${i}s`,
            )}
            name={e.name}
          >
            <span className={clsx(!e.link && !isSticky && 'ml-4')}>
              {e.name}
            </span>
          </button>
        );
      })}
    </>
  );
}
