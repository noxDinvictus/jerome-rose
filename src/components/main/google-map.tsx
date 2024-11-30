import Loader from '../elements/loader';

interface IProps {
  readonly loadMap: boolean;
}
export default function GoogleMap({ loadMap }: IProps) {
  return (
    <div className="w-full">
      {loadMap ? (
        <iframe
          className="mt-7 w-full rounded-3xl border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.0895281164344!2d104.92580487505327!3d11.545435288653955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310950d88c985dc7%3A0x78fd1442fb04f1a9!2sEmbassy%20Of%20The%20Republic%20Of%20The%20Philippines!5e0!3m2!1sen!2skh!4v1730766036823!5m2!1sen!2skh"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Map of Baguio"
          height="450"
          title="googl map"
        />
      ) : (
        <Loader notScreen={true} />
      )}
    </div>
  );
}
