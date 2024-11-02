import dynamic from 'next/dynamic';
import CountDownTimer from '../main/countdown';
import TL15 from '../main/timeline/time-line-15';

const link = '../main/timeline/time-line';

const TL16 = dynamic(() => import(`${link}-16`).then((mod) => mod.default));
const TL17 = dynamic(() => import(`${link}-17`).then((mod) => mod.default));
const TL18 = dynamic(() => import(`${link}-18`).then((mod) => mod.default));
const TL19 = dynamic(() => import(`${link}-19`).then((mod) => mod.default));
const TL20 = dynamic(() => import(`${link}-20`).then((mod) => mod.default));
const TL21 = dynamic(() => import(`${link}-21`).then((mod) => mod.default));
const TL22 = dynamic(() => import(`${link}-22`).then((mod) => mod.default));
const TL23 = dynamic(() => import(`${link}-23`).then((mod) => mod.default));
const TL24 = dynamic(() => import(`${link}-24`).then((mod) => mod.default));

export default function Main() {
  return (
    <main>
      <div className="container mx-auto p-10">
        <CountDownTimer />

        <div className="m-auto flex max-w-7xl flex-col items-center lg:max-w-5xl md:mx-8">
          <TL15 />
          <TL16 />
          <TL17 />
          <TL18 />
          <TL19 />

          <div className="text-white">
            <TL20 />
            <TL21 />
            <TL22 />
            <TL23 />
            <TL24 />
          </div>
        </div>
      </div>
    </main>
  );
}
