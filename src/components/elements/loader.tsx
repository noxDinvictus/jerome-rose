import clsx from 'clsx';

interface IProps {
  readonly notScreen?: boolean;
}

export default function Loader({ notScreen }: IProps) {
  const className = notScreen ? 'w-full' : 'w-screen';

  return (
    <div className={clsx('h-screen shadow-lg', className)}>
      <div className="center h-full w-full bg-groom-300">
        <div className="spinner center">
          <div className="heart heart--one" />
          <div className="heart heart--two" />
          <div className="heart" />
        </div>
      </div>
    </div>
  );
}
