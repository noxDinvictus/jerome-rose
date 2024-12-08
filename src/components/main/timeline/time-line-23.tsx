import TimeLineContainer from '@/components/elements/timeline-container';

export default function HTime() {
  return (
    <TimeLineContainer isHalf leftContent={<Left />} rightContent={<Right />} />
  );
}

function Left() {
  return <div></div>;
}

function Right() {
  return (
    <>
      <p className="year">2023</p>
      <p className="my-5">
        Rose and Jerome were very excited to plan their first trip together.
        They decided to spend their holiday in Vietnam. Jerome took the lead in
        planning everything, from flight bookings and hotel accommodations to
        tours and navigating Google Maps. Rose contributed by managing the
        budget and packing their belongings. This trip was incredibly memorable
        for both of them, as they were thrilled to explore a new country
        together.
      </p>

      <p className="my-5">
        Jerome knew that Rose had always wanted to see the Golden Bridge in Da
        Nang (Rose didn&apos;t even know the name or the place; she described it
        as &quot;bridge na may malaking kamay&quot;). That&apos;s why Jerome
        included it in their itinerary. When Rose saw it for the first time, she
        became a bit emotional. Five years ago, she had come across a photo of
        the bridge on Facebook and told herself, &apos;One day, I will go
        there.&apos; And now, that day had finally arrived, even better, with
        the love of her life by her side.&quot;
      </p>

      <p className="my-5">
        After their first trip together, they realized that they wanted to do it
        more.. They promised each other that they will visit 1 country/province
        per year. But to their surprised .. They were able to visit more than 1.
      </p>

      <p className="my-5">July, they went to visit Kampot and Kep Province</p>

      <p className="my-5">
        September, they went to Thailand to take the Licensure Examinations for
        teachers (Yahoo! both of them passed! #RelationshipGoals!&quot;)
      </p>

      <p className="my-5">
        October, they went to Thailand again for the second time to tour around.
      </p>

      <p className="my-5">
        <span className="font-bold">October 20,2024</span> - One of the best
        moment of Rose&apos;s life ... Jerome proposed to her.
      </p>

      <p>December, they went to Malaysia and Singapore</p>
    </>
  );
}
