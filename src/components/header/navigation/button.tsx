'use client';

import { headerNav } from '@/constant';
import { I } from '@/interface';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

interface IProps extends Readonly<I.Navigate> {
  readonly className?: string;
  readonly delay?: boolean;
}

export default function NavigationButton({
  navigate,
  className,
  delay,
}: IProps) {
  const route = usePathname();

  const getName = (data: Readonly<I.Navigation>) => {
    if (data.id === '/') return data.name;

    if (route.includes(data.id)) return 'Start';
    else return data.name;
  };

  return (
    <>
      {headerNav.map((e, i) => {
        return (
          <button
            onClick={() => navigate(e)}
            aria-label="navigation toggle"
            key={e.id}
            className={clsx(className, delay && `animate__delay-${i}s`)}
          >
            {getName(e)}
          </button>
        );
      })}
    </>
  );
}
