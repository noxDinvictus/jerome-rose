'use client';

import { headerNav } from '@/constant';
import { I } from '@/interface';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

interface IProps extends Readonly<I.Navigate> {
  readonly className?: string;
  readonly delay?: boolean;
}

export default function NavigationButton(props: IProps) {
  const { navigate, className, delay } = props;

  const route = usePathname();

  const isActive = (data: Readonly<I.Navigation>) => {
    if (route === data.link) return 'is-active';
  };

  return (
    <>
      {headerNav.map((e, i) => {
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
            {e.name}
          </button>
        );
      })}
    </>
  );
}
