import { I } from '@/interface';
import clsx from 'clsx';

interface IProps extends Readonly<I.Child> {
  readonly isOpen: boolean;
}

export default function AutoExpand({ isOpen, children }: IProps) {
  return (
    <div className={clsx('auto-expand', isOpen && 'auto-expand--show')}>
      <div className="auto-expand__object">{children}</div>
    </div>
  );
}
