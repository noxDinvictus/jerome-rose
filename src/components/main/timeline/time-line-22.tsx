import TimeLineContainer from '@/components/elements/timeline-container';

export default function HTime() {
  return (
    <TimeLineContainer isHalf leftContent={<Left />} rightContent={<Right />} />
  );
}

function Left() {
  return (
    <>
      <p className="year">2022</p>
      <p className="my-5">
        Rose resigned from her job and was counting down her last days at the
        office. They were scheduled to depart for Cambodia in the third week of
        January when the pandemic unexpectedly forced Cambodia to close its
        borders. Strict restrictions made obtaining work visas extremely
        difficult, and to make matters worse, they had already resigned from
        their positions. With their future in Cambodia uncertain, they began
        applying to various companies in Manila. While they received some job
        offers, the salaries were insufficient to cover the high cost of living
        in Manila. The challenges they faced were overwhelming, and their hope
        began to dwindle. However, a turning point arrived when Rose&apos;s
        sister contacted them, urging them to book a flight immediately due to
        changes in Cambodia&apos;s regulations.
      </p>

      <p>
        In February, they arrived in Cambodia and, to their relief, found new
        jobs within a few weeks.
      </p>

      <p>
        December, Rose and Jerome together with the whole family of Rose went to
        Siem Reap to spend the Christmas Holidays.
      </p>
    </>
  );
}

function Right() {
  return <div>Picture here</div>;
}
