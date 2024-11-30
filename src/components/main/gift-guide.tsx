import { headerId } from '@/constant';

export default function GiftGuide() {
  return (
    <div id={headerId.giftGuide}>
      <h1 className="my-3 mt-20 text-center text-3xl text-bride-100 md:text-xl">
        Gift Guide
      </h1>
      <p className="default-p">
        With all that we have, we&apos;ve been truly blessed.
      </p>
      <p className="default-p">
        Your Presence and prayers are all that we request.
      </p>
      <p className="default-p">But if you desire tyo give nonetheless,</p>
      <p className="default-p">
        <b>Monetary gift</b> is one we suggest.
      </p>

      <h1 className="my-3 mt-20 text-center text-3xl text-bride-100 md:text-xl">
        Share the love
      </h1>
      <p className="default-p">Help us to capture moment.</p>
      <p className="default-p">Share our photos thru google drive:</p>
    </div>
  );
}
