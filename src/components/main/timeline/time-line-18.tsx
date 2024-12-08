import TimeLineContainer from '@/components/elements/timeline-container';

export default function TL18() {
  return (
    <TimeLineContainer isHalf leftContent={<Left />} rightContent={<Right />} />
  );
}

function Left() {
  return (
    <div>
      <p className="year">2018</p>
      <p className="my-10">
        Rose will be going to Cambodia to spend her two months summer vacation
        because her sister will give birth. However, Jerome and Rose were unsure
        how their relationship would function during this extended period of
        separation, especially for Rose, as Jerome was her first boyfriend, and
        for Jerome, who disliked long-distance relationships.
      </p>
      <p className="italic">PS: May paiyak-iyak pa, 2 months lang naman HAHA</p>
    </div>
  );
}

function Right() {
  return <div></div>;
}
