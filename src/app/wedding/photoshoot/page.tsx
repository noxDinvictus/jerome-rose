import PageContainer from '@/components/elements/page-container';
import { headerId } from '@/constant';
import { IMAGES } from '@/constant/media.constant';
import Image from 'next/image';

export default function Page() {
  return (
    <PageContainer id={headerId.photoShoot}>
      <div className="flex flex-col gap-5">
        <Images images={IMAGES.FORMAL} />
        <Cambodia />
        <Images images={IMAGES.WEDDING} />
      </div>
    </PageContainer>
  );
}

interface IProps {
  readonly images: Record<string, string>;
}
function Images({ images }: IProps) {
  const className = 'aspect-square rounded-3xl object-cover object-top sha';
  const size = 200;

  return (
    <div className="center flex-wrap gap-5">
      {Object.entries(images).map(([key, src]) => (
        <Image
          key={key}
          src={src}
          alt={key}
          width={size}
          height={size}
          className={className}
          loading="lazy"
        />
      ))}
    </div>
  );
}

function Cambodia() {
  const className = 'aspect-square rounded-3xl object-scale-down';
  const size = 300;

  return (
    <>
      <div className="center flex-wrap gap-5 md:gap-10">
        {Object.entries(IMAGES.CAMBODIA)
          .slice(0, 7)
          .map(([key, src]) => (
            <Image
              key={key}
              src={src}
              alt={key}
              width={size}
              height={size}
              className={className}
              loading="lazy"
            />
          ))}
      </div>

      <div className="center gap-10">
        {Object.entries(IMAGES.CAMBODIA)
          .slice(7, 10)
          .map(([key, src]) => (
            <Image
              key={key}
              src={src}
              alt={key}
              width={size}
              height={size}
              className={className}
              loading="lazy"
            />
          ))}
      </div>
    </>
  );
}
