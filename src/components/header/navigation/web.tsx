import { headerId } from '@/constant';
import { I } from '@/interface';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import NavButton from './button';

export function NavigationWeb({ navigate }: Readonly<I.Navigate>) {
  const route = usePathname();

  const isWedding = route === headerId.wedding ? 'top-[40%] ' : 'top-[50%] ';

  return (
    <nav
      className={clsx('absolute left-5 z-20 md:top-[30%] md:hidden', isWedding)}
    >
      <div className="flex h-full flex-col gap-5 text-groom-100">
        <NavButton
          navigate={navigate}
          className="animate__animated animate__lightSpeedInLeft text-left"
          delay
        />
      </div>
    </nav>
  );
}
