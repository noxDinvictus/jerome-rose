import TimeLineContainer from '@/components/elements/container';

export default function TL16() {
  return (
    <TimeLineContainer isHalf leftContent={<Left />} rightContent={<Right />} />
  );
}

function Left() {
  return (
    <>
      <p className="year">2016</p>
      <p className="my-10">
        Jerome already graduated from college and Rose was reassigned back at
        the Asset Management Department. November 2016, Jerome passed the
        Licensure examination for Civil Engineers. By December , Jerome visited
        the office and helped. That&apos;s their first interaction after several
        months. Rose kept on calling Jerome &quot;Kuya Je&quot; &quot;Kuya
        Jerome&quot; &quot;Sir Jerome&quot; to help her in some processes but
        Jerome is not looking at her or giving her any attention at all. Then
        suddenly Rose shouted &quot;Engineer!&quot; and that&apos;s the only
        time Jerome gave his attention. (Rose and Jerome can still vividly
        remember this scene because it&apos;s so genuine and full of
        laughter...)
      </p>

      <p className="italic">
        PS: Ayaw mamansin pag sa pangalan tinatawag, dapat Engineer! HAHAHA
      </p>
    </>
  );
}

function Right() {
  return <div>Picture here</div>;
}
