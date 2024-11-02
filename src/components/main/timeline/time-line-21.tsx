import TimeLineContainer from '@/components/elements/timeline-container';

export default function TL21() {
  return <TimeLineContainer leftContent={<Left />} rightContent={<Right />} />;
}

function Left() {
  return <div>Picture here</div>;
}

function Right() {
  return (
    <>
      <p className="year">2021</p>
      <p>
        Rose shared her plans of moving abroad to be with her siblings. They
        have been discussing it for several months, then Jerome finally decided
        to quit his job told Rose that he will be going with her. Rose knew this
        was a significant decision for Jerome, given his stable career and
        income as a government employee and part-time university teacher.
        Despite the risks involved, Jerome was determined to be with Rose and
        pursue opportunities abroad.
      </p>
    </>
  );
}
