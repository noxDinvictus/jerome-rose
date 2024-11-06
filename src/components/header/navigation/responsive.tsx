'use client';

import { I } from '@/interface';
import clsx from 'clsx';
import { useState } from 'react';
import AutoExpand from '../../elements/auto-expand';
import NavButton from './button';

export function NavigationResponsive({ navigate }: Readonly<I.Navigate>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="fixed left-5 top-0 z-20 hidden text-white md:block">
      <div className="cursor-pointer">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative"
          aria-label="navigation toggle"
        >
          <div
            className={clsx(
              'animate__animated absolute rounded-xl bg-groom-100',
              isOpen ? 'animate__hinge' : 'animate__backInLeft',
            )}
          >
            <HamburgerMenu />
          </div>

          {isOpen && (
            <div className="animate__animated animate__backInLeft animate__delay-1s absolute rounded-full bg-groom-100">
              <Close />
            </div>
          )}
        </button>
        <AutoExpand isOpen={isOpen}>
          <div className="mt-8 flex flex-col gap-5 rounded-xl bg-groom-100 p-2 py-2 text-white">
            <NavButton navigate={navigate} className="text-left" />
          </div>
        </AutoExpand>
      </div>
    </aside>
  );
}

function HamburgerMenu() {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 6.5H19V8H5V6.5Z" fill="currentColor" />
      <path d="M5 16.5H19V18H5V16.5Z" fill="currentColor" />
      <path d="M5 11.5H19V13H5V11.5Z" fill="currentColor" />
    </svg>
  );
}

function Close() {
  return (
    <svg
      width="35px"
      height="35px"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
