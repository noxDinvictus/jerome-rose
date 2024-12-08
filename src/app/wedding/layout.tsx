import Header from '@/components/templates/header';
import { headerId } from '@/constant';
import { I } from '@/interface';

export default function Layout({ children }: Readonly<I.Child>) {
  return (
    <div id={headerId.wedding} aria-hidden="true">
      <Header />
      {children}
    </div>
  );
}
