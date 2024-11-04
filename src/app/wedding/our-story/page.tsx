import PageContainer from '@/components/elements/page-container';
import TL15 from '@/components/main/timeline/time-line-15';
import { headerId } from '@/constant';
import dynamic from 'next/dynamic';

const timelines = Array.from({ length: 9 }, (_, i) => {
  const Component = dynamic(() =>
    import(`@/components/main/timeline/time-line-${16 + i}`).then(
      (mod) => mod.default,
    ),
  );
  Component.displayName = `TL${16 + i}`;
  return Component;
});

export default function Page() {
  return (
    <PageContainer id={headerId.ourStory}>
      <TL15 />
      {timelines.slice(0, 4).map((TimeLine) => (
        <TimeLine key={TimeLine.displayName} />
      ))}

      <div className="text-white">
        {timelines.slice(4).map((TimeLine) => (
          <TimeLine key={TimeLine.displayName} />
        ))}
      </div>
    </PageContainer>
  );
}
