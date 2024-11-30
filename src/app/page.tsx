'use client';

import PageContainer from '@/components/elements/page-container';
import CountDownTimer from '@/components/main/countdown';
import DressCode from '@/components/main/dress-code';
import GiftGuide from '@/components/main/gift-guide';
import WeddingPlace from '@/components/main/wedding-place';
import Header from '@/components/templates/header';
import { c, headerId } from '@/constant';
import { useIsMobile } from '@/hooks/is-mobile';
import clsx from 'clsx';
import moment from 'moment';

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <PageContainer id={headerId.wedding}>
        <h1 className="animate__animated animate__flipInX text-center text-5xl font-bold text-groom-100">
          WE ARE GETTING MARRIED !
        </h1>
        save the date
        <p
          className={clsx(
            'text-3xl text-white md:text-xl',
            isMobile ? 'animate__delay-1s' : 'animate__delay-4s',
          )}
        >
          {moment(c.date).format('MMMM DD, YYYY')}
        </p>
        <CountDownTimer />
        <WeddingPlace />
        <DressCode />
        <GiftGuide />
      </PageContainer>
    </>
  );
}
