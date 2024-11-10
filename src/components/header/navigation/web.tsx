import { I } from '@/interface';
import NavButton from './button';

export function NavigationWeb({ navigate }: Readonly<I.Navigate>) {
  return (
    <nav className="absolute left-5 top-[50%] z-20 md:top-[30%] md:hidden">
      <div className="flex h-full flex-col gap-5 text-white">
        <NavButton
          navigate={navigate}
          className="animate__animated animate__lightSpeedInLeft text-left"
          delay
        />
      </div>
    </nav>
  );
}
