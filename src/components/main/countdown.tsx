'use client';

import { c } from '@/constant';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function CountDownTimer() {
  const targetDate = moment(c.date);
  const now = moment();
  const isMarried = now.isAfter(targetDate);

  const [timeCounter, setTimeCounter] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = moment();
      const isAfterTarget = now.isAfter(targetDate);

      const duration = isAfterTarget
        ? moment.duration(now.diff(targetDate))
        : moment.duration(targetDate.diff(now));

      setTimeCounter({
        years: Math.floor(duration.asYears()),
        months: Math.floor(duration.asMonths()) % 12,
        days: Math.floor(duration.asDays()) % 30,
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      });
    };

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="my-10 flex w-full flex-wrap items-start justify-center gap-4">
      {timeCounter.years > 0 && (
        <Timers time={timeCounter.years} title="Years" isMarried={isMarried} />
      )}
      {timeCounter.months > 0 && (
        <Timers
          time={timeCounter.months}
          title="Months"
          isMarried={isMarried}
        />
      )}
      <Timers time={timeCounter.days} title="Days" isMarried={isMarried} />
      <Timers time={timeCounter.hours} title="hours" isMarried={isMarried} />
      <Timers
        time={timeCounter.minutes}
        title="Minutes"
        isMarried={isMarried}
      />
      <Timers
        time={timeCounter.seconds}
        title="Seconds"
        isMarried={isMarried}
      />
    </div>
  );
}

interface ITimers {
  readonly time: number;
  readonly title: string;
  readonly isMarried: boolean;
}

function Timers({ time, title, isMarried }: ITimers) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 1000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, [time]);

  const animateClass = isMarried ? 'animate-count-up' : 'animate-count-down';

  const displayTitle = time <= 1 ? title.slice(0, -1) : title;

  const c = twMerge('mb-1 text-center', animate ? animateClass : '');

  return (
    <div className="mb-1 w-24 rounded-lg bg-white p-2 text-3xl font-bold shadow-lg">
      <p className={c}>{time}</p>
      <p className="w-full text-center text-base">{displayTitle}</p>
    </div>
  );
}
