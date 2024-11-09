import { I } from '@/interface';
import clsx from 'clsx';
import NavButton from './button';

interface IProps extends Readonly<I.Navigate> {
  isSticky: boolean;
}

export function NavigationBody({ navigate, isSticky }: Readonly<IProps>) {
  return (
    <nav
      role="navigation"
      className={clsx(
        'animate__animated fixed top-0 z-10 w-full bg-gray-800 p-4 text-center text-white md:hidden',
        isSticky ? 'animate__bounceInLeft' : 'animate__bounceOutLeft',
      )}
    >
      <div className="header-nav-wrapper">
        <NavButton navigate={navigate} />
      </div>
    </nav>
  );
}
