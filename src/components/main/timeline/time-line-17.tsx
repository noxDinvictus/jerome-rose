import TimeLineContainer from '@/components/elements/timeline-container';

export default function TL17() {
  return <TimeLineContainer leftContent={<Left />} rightContent={<Right />} />;
}

function Left() {
  return <div></div>;
}

function Right() {
  return (
    <>
      <p className="year">2017</p>
      <p className="my-5">
        January . Rose heard that Jerome is looking for a job that&apos;s why
        she asked Jerome&apos;s former boss for his number so that she can asked
        Jerome if he wanted to work for DPWH. Rose messaged Jerome asking if he
        is interested in submitting his application because she knows someone
        from the HR Department. (Jerome&apos;s version: Rose asked for his phone
        number because she was interested in him HAHAHA).
      </p>

      <p>After that interaction , they became textmates.</p>

      <div className="mb-8 ml-10 [&>p>span]:font-bold">
        <p>Then one night .. Their conversation went ...</p>
        <Jerome text="May sasabihin ako sayo" />
        <Rose text="Ano un ?" />
        <Jerome text="Huy bat ang tagal mong magreply?" />
        <Rose text="Reply saan ?" />
        <Jerome text="Sa sinabi ko?" />
        <Rose text="Wala ka namang sinabi" />
        <Jerome text="Gusto kita. Pwede ba kitang ligawan?" />
      </div>

      <p className="my-4 text-center">THE REST IS HISTORY</p>

      <div className="flex flex-col gap-5">
        <p className="italic">
          PS: Sisihin ang smart. late nareceive ang message HAHAHA
        </p>
        <p>
          <span className="font-bold">March 20,2017</span> is the day that Rose
          and Jerome started dating ..
        </p>
        <p>
          First date was supposed to be jogging at the Burnham Park then eating,
          however, these two have different things in mind! They spontaneously
          went to Dagupan for a day trip without having any plans at all ....
        </p>
        <p>
          Both of them can still remember how silly they were trying to plan
          dates away from Baguio to avoid being seen. They even went to Tarlac,
          Dagupan, La Union, Pangasinan, and so on.
        </p>
        <p>
          By May, Jerome had introduced Rose to his family. Rose went to
          Jerome&apos;s house to be a part of the birthday celebration of
          Jerome&apos;s brother.
        </p>
        <p>
          On June 24, 2017, at Good Taste Legarda, Rose invited Jerome to the
          birthday celebration of her brother. Rose can still recall how nervous
          Jerome was, sweating and feeling cold because this would be the first
          time Jerome would meet Rose&apos;s parents.
        </p>
      </div>
    </>
  );
}

interface IChat {
  text: string;
}

const Jerome = ({ text }: IChat) => {
  return (
    <p className="flex gap-1">
      <span>Jerome:</span>
      {text}
    </p>
  );
};

const Rose = ({ text }: IChat) => {
  return (
    <p className="flex gap-1">
      <span>Rose:</span>
      {text}
    </p>
  );
};
