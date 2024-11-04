import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  readonly leftContent: ReactNode;
  readonly rightContent: ReactNode;
  readonly isHalf?: boolean;
}

export default function TimeLineContainer({
  leftContent,
  rightContent,
  isHalf,
}: IProps) {
  return (
    <section className="my-5 flex gap-3 md:flex-col">
      <div className={twMerge('md:w-full', isHalf ? 'w-1/2' : 'w-1/3')}>
        {leftContent}
      </div>

      <div className={twMerge('md:w-full', isHalf ? 'w-1/2' : 'w-2/3')}>
        {rightContent}
      </div>
    </section>
  );
}
