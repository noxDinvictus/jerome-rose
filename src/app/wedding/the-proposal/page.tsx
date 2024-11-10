import PageContainer from '@/components/elements/page-container';
import { headerId } from '@/constant';
import { IMAGES } from '@/constant/media.constant';
import Image from 'next/image';

export default function Page() {
  return (
    <PageContainer id={headerId.theProposal}>
      <Gallery />
    </PageContainer>
  );
}

function Gallery() {
  return (
    <article className="gallery">
      {Array.from({ length: 9 }).map((_, index) => (
        <Image
          key={index}
          src={index % 2 ? IMAGES.og : IMAGES.hero}
          alt="hero"
          width={100}
          height={100}
          className="image"
        />
      ))}
    </article>
  );
}
