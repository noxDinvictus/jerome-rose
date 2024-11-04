import Footer from '@/components/templates/footer';
import Header from '@/components/templates/header';
import { I } from '@/interface';

export default function Layout({ children }: Readonly<I.Child>) {
  return (
    <div id="wedding">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
