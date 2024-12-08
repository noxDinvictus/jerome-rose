'use client';

import PageContainer from '@/components/elements/page-container';
import { headerId } from '@/constant';
import { IMAGES, VIDEO } from '@/constant/media.constant';
import { useInView } from '@/hooks/in-view';
import Image from 'next/image';

export default function Page() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <PageContainer id={headerId.theProposal}>
      <div ref={ref}>
        <Gallery />
      </div>

      {isInView && <Video />}
    </PageContainer>
  );
}

function Gallery() {
  const arr = Object.entries(IMAGES.PROPOSAL);
  return (
    <article className="gallery">
      {arr.slice(0, 9).map(([key, src]) => (
        <Image
          key={key}
          src={src}
          alt={key}
          width={100}
          height={100}
          className="image"
          loading="lazy"
        />
      ))}
    </article>
  );
}

function Video() {
  return (
    <video
      src={VIDEO.proposal}
      controls={true}
      autoPlay={true}
      loop={true}
      muted={true}
      className="mt-10 h-full w-80 shadow-2xl"
    >
      Your browser does not support the video tag.
    </video>
  );
}
