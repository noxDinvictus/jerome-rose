'use client';

import TimeLineContainer from '@/components/elements/container';
import useInView from '@/hooks/use-in-view';

export default function TL20() {
  const { isInView, elementRef } = useInView();

  console.log({ isInView });

  return (
    <div ref={elementRef}>
      <TimeLineContainer
        isHalf
        leftContent={<Left />}
        rightContent={<Right />}
      />

      {isInView ? 'In View' : 'Not In View'}
    </div>
  );
}

function Left() {
  return (
    <>
      <p className="year">2020</p>
      <p className="my-5">
        Jerome and Rose&apos;s flight back to the Philippines is scheduled on
        January 6. However, Rose doesn&apos;t want to go back and wants to stay
        there with her family. Jerome on the other hand, started applying for
        jobs. They even thought of not coming back and staying in Cambodia if
        they get job offers. Unfortunately, during their stay there, they
        didn&apos;t get any feedback forcing them to go home. Exactly 2 days
        after they arrived in the Philippines, Jerome received an offer from a
        company asking him if he can start by January 16. They felt that it was
        a missed opportunity and even contemplated returning to Cambodia, but
        fortunately, they avoided doing so as the pandemic struck in March.
      </p>

      <p>
        August, Jerome and Rose was able to purchase their very first car and
        they named it Zoro.
      </p>
    </>
  );
}

function Right() {
  return <div>Picture here</div>;
}
