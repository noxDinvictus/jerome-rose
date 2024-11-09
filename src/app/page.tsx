import PageContainer from '@/components/elements/page-container';
import CountDownTimer from '@/components/main/countdown';
import WeddingPlace from '@/components/main/wedding-place';
import Header from '@/components/templates/header';
import { headerId } from '@/constant';

export default function Home() {
  return (
    <>
      <Header />
      <PageContainer id={headerId.preNup}>
        <h1 className="animate__animated animate__flipInX text-center text-5xl font-bold text-groom-100">
          WE ARE GETTING MARRIED !
        </h1>
        <CountDownTimer />
        <WeddingPlace />
      </PageContainer>
    </>
  );
}
