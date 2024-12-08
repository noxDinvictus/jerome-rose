import { I } from '@/interface';

interface IProps extends Readonly<I.Child> {
  readonly id: string;
}

export default function PageContainer({ children, id }: IProps) {
  return (
    <main className="font-pw" id={id} role="main">
      <div className="container mx-auto p-10 md:p-5">
        <div className="m-auto flex max-w-7xl flex-col items-center lg:max-w-5xl">
          {children}
        </div>
      </div>
    </main>
  );
}
