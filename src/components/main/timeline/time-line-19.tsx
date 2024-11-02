import TimeLineContainer from '@/components/elements/container';

export default function TL19() {
  return (
    <TimeLineContainer isHalf leftContent={<Left />} rightContent={<Right />} />
  );
}

function Left() {
  return <div>Picture here</div>;
}

function Right() {
  return (
    <>
      <p className="year">2019</p>
      <p className="my-5">
        Rose graduated from college and, after two weeks, was able to get a job
        at a government agency. However, she was not comfortable in the working
        environment, so Jerome sent Rose&apos;s credentials to the University of
        Baguio. Rose got a call for an initial interview and examination, which
        she was able to pass. She then received a call for a final interview.
        Rose was hesitant to go to the interview, but Jerome was very
        persistent. He even went to pick up Rose from the office, bought her
        some formal clothes, and accompanied her to her final interview.
      </p>

      <p>
        Jerome and Rose&apos;s first international flight together took place in
        December. They spent the holidays in Cambodia, marking the first time
        Jerome had been able to celebrate Christmas and New Year with
        Rose&apos;s entire family.
      </p>
    </>
  );
}
