import TimeLineContainer from '@/components/elements/container';

export default function HTime() {
  return (
    <TimeLineContainer isHalf leftContent={<Left />} rightContent={<Right />} />
  );
}

function Left() {
  return (
    <>
      <p className="year">2024</p>
      <p className="my-5">
        January, They just came back from their Malaysia-Singapore Trip and now
        they are planning another holiday again after telling themselves that no
        more travelling and they need to start saving for the wedding! (but then
        again, travel is life!)
      </p>

      <p className="my-5">
        April, they spent their holiday in Phu Quoc, Vietnam, they fell in love
        with the island and wants to go back there again.
      </p>

      <p className="my-5">July, they went to Vung Tau Vietnam.</p>

      <p className="my-5">August, they went to Siem Reap</p>
      <p className="my-5">
        October, they went to Vietnam (Ha Long Bay, Sapa, Hanoi)
      </p>

      <p className="my-5">
        December, they planned on spending the Christmas holiday with the
        families in Da Lat, Vietnam
      </p>
    </>
  );
}

function Right() {
  return <div>Picture here</div>;
}
