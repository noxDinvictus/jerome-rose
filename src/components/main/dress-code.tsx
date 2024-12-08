import { headerId } from '@/constant';
import { useInView } from '@/hooks/in-view';
import { I } from '@/interface';
import clsx from 'clsx';
import { MouseEvent, useRef } from 'react';

export default function DressCode() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  const colors = [
    'bg-groom-900',
    'bg-groom-100',
    'bg-bride-900',
    'bg-bride-100',
  ];

  return (
    <div ref={ref} id={headerId.dressCode} className="mt-3">
      <Text />

      <div className="my-10 flex flex-wrap justify-center gap-10">
        <DressCodeCard className={clsx(isInView && 'dress-code--male-1')}>
          <Tux />
        </DressCodeCard>
        <DressCodeCard className={clsx(isInView && 'dress-code--male-2')}>
          <Tux />
        </DressCodeCard>
        <DressCodeCard className={clsx(isInView && 'dress-code--female-1')}>
          <Dress />
        </DressCodeCard>
        <DressCodeCard className={clsx(isInView && 'dress-code--female-2')}>
          <Dress />
        </DressCodeCard>
      </div>

      <div className="center mt-3 gap-3">
        {colors.map((e) => {
          return (
            <div
              key={e}
              className={clsx('h-20 w-10 rounded-lg border-2 border-white', e)}
            />
          );
        })}
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="mt-20 md:mt-3">
      <p className="default-h">Dress Code</p>
      <p className="default-p">Please come in casual attire.</p>
      <p className="default-p">
        We encourage you to dress according to our theme.
      </p>
    </div>
  );
}
interface DressCodeCard extends Readonly<I.Child> {
  readonly className: string;
}
function DressCodeCard({ children, className }: DressCodeCard) {
  const cardRef = useRef<HTMLButtonElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xCenter = rect.width / 2;
    const yCenter = rect.height / 2;

    const rotateX = ((y - yCenter) / yCenter) * -30;
    const rotateY = ((x - xCenter) / xCenter) * 30;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <button
      ref={cardRef}
      type="button"
      aria-label="dress code"
      className={clsx(
        'rounded-3xl bg-white p-4 shadow-2xl transition-transform duration-500 ease-out',
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}

function Tux() {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 116.28"
      width="200"
      height="200"
    >
      <defs>
        <style>{`.cls-1{fill-rule:evenodd;}`}</style>
      </defs>
      <title>men-suit-tuxedo</title>
      <path
        className="cls-1"
        d="M108.24,15.9C99.41,12.15,90.57,8.75,81.92,1.26c3.59,12.4-6.64,40.68-20.59,73.21C52,49.2,40.7,23.08,41,1.26A47.94,47.94,0,0,1,28.87,9.75L14.43,16.11C10.16,18,8.58,22.71,8.28,28.85,3.8,57.92-.14,87,0,116.07H21.23L24.2,69a91.61,91.61,0,0,1,3.23,13.41c1.64,10,1.33,15.38.25,25.21l-.94,8.49H58.68l2.81-15.43,3.24,15.64H96.4l-.83-8.53c-.93-9.52-1.21-14.37.28-24,.73-4.76,1.73-9.6,3-14.52l2.86,47.08h21.22c-.1-28.28-3.16-56.82-8.28-85.52.21-8.28-1.93-13.21-6.36-14.86ZM58.39,4.13h6.09A22,22,0,0,1,75.5,0a58.31,58.31,0,0,0,0,14.64,20.58,20.58,0,0,1-11-4.1h-6a20.61,20.61,0,0,1-11,4.1A58.31,58.31,0,0,0,47.38,0a22,22,0,0,1,11,4.13Zm1.69,1.71h2.71v3H60.08v-3Zm1.36,87.1A2.48,2.48,0,1,1,59,95.42a2.47,2.47,0,0,1,2.48-2.48Zm18.2-51.17H96.16a.25.25,0,0,1,.26.25v3.66a.25.25,0,0,1-.26.25H79.64a.25.25,0,0,1-.25-.25V42a.25.25,0,0,1,.25-.25ZM61.44,77.23A2.48,2.48,0,1,1,59,79.71a2.47,2.47,0,0,1,2.48-2.48Z"
      />
    </svg>
  );
}

function Dress() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 351 511.31"
      height={200}
      width={200}
    >
      <path d="M176.72 66.38c14.91-16.17 31.24-22.87 45.48-23.09V0h23.7v49.9c12.88 8.54 18.96 24.34 11.23 41.39l-24.06 53.09c-4.11 10.44-6.34 20.76-3.69 30.79 1.8 6.78 5.82 13.42 13 19.88 55.58 51.13 99.88 110.47 107.53 196.46 0 24.81 5.79 62.1-9.31 82.49-11.97 16.17-29.13 17.92-50.66 7.46-19.16 24.44-44.38 30.16-76.52 14.48-24.55 21.62-49.74 19.97-75.48-2.07-26.41 15.8-52.3 13.09-77.54-12.41-12.65 3.31-25.01 4.46-36.7.43C-5.1 471.94.43 455.71.43 430.64c0-46.77 9.08-83.51 27.48-127.04 17.81-42.11 35.26-65.17 61.01-92.75 23.79-25.48 45.21-32.37 25.24-71.64l-18.6-45.74c-7.51-18.45.63-35.33 15.37-43.87V0h23.69v43.79c13.9.44 29.12 7.07 42.1 22.59z" />
    </svg>
  );
}
