import { headerId } from '@/constant';
import { IMAGES } from '@/constant/media.constant';
import Image from 'next/image';

export default function GiftGuide() {
  return (
    <div id={headerId.giftGuide}>
      <h1 className="my-3 mt-20 text-center text-3xl text-bride-100 md:text-xl">
        Gift Guide
      </h1>
      <p className="default-p">
        With all that we have, we have been truly blessed.
      </p>
      <p className="default-p">Your presence and prayers are all we request.</p>
      <p className="default-p">But if you desire to give nonetheless,</p>
      <p className="default-p">
        a <b>monetary gift</b> is one we suggest.
      </p>

      <h1 className="my-3 mt-20 text-center text-3xl text-bride-100 md:text-xl">
        Share the love
      </h1>
      <p className="default-p">Help us capture the moment.</p>
      <p className="default-p">Share the photos through our telegram</p>

      <Telegram />
    </div>
  );
}

function Telegram() {
  return (
    <div className="center flex-wrap gap-5">
      <Image
        src={IMAGES.TELEGRAM.JEROME}
        alt="Jerome Telegram"
        width={200}
        height={200}
        loading="lazy"
        className="rounded-2xl"
      />

      <Image
        src={IMAGES.TELEGRAM.ROSE_ANNE}
        alt="Rose Anne Telegram"
        width={200}
        height={200}
        loading="lazy"
        className="rounded-2xl"
      />
    </div>
  );
}
