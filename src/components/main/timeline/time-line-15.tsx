import TimeLineContainer from '@/components/elements/timeline-container';

export default function TL15() {
  return <TimeLineContainer leftContent={<Left />} rightContent={<Right />} />;
}

function Left() {
  return <div>Picture here</div>;
}

function Right() {
  return (
    <>
      <p className="year">2015</p>
      <p className="my-5">
        Jerome and Rose first met at the University of Baguio (Asset Management
        Department). Jerome was already working as a student assistant at the
        Inventory Office and Rose was just assigned at the property office.
        Jerome kept on teasing Rose about everything ... from the way she
        dressed (he keeps on telling that it&apos;s like a curtain or a table
        cloth), her grades (he knows that Rose is grade conscious in college),
        and so on and so forth ... But that moment only ended for a few months
        because Rose was reassigned to another office, resulting in no
        interaction between them.
      </p>

      <div className="mb-8 ml-10 [&>p>span]:font-bold">
        <p>
          Until .... Jerome messaged Rose in Facebook one day and the
          conversation goes ...
        </p>
        <p className="flex gap-1">
          <span>Jerome:</span>Hi, kumusta
        </p>
        <p className="flex gap-1">
          <span>Rose:</span>Bakit?!
        </p>
        <p className="flex gap-1">
          <span>Jerome:</span>Sungit naman neto?!
        </p>
      </div>

      <p className="text-center">THE END</p>
    </>
  );
}
