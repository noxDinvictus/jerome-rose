import { I } from '@/interface';

export default function PageContainer({ children }: Readonly<I.Child>) {
  return (
    <main className="font-pw">
      <div className="container mx-auto p-10 md:p-5">
        <div className="m-auto flex max-w-7xl flex-col items-center lg:max-w-5xl">
          {children}
        </div>
      </div>
    </main>
  );
}
