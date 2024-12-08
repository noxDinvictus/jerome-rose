'use client';

import { c, headerId } from '@/constant';
import { IMAGES } from '@/constant/media.constant';
import { I } from '@/interface';
import { DinnerTableSvg } from '@shared/svg/dinner-table.svg';
import MapLocation from '@shared/svg/map-location.svg';
import WeddingRingSvg from '@shared/svg/wedding-ring.svg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import GoogleMap from './google-map';

export default function WeddingPlace() {
  const [loadMap, setLoadMap] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const isVisible = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (mapRef.current) observer.observe(mapRef.current);

    return () => observer.disconnect();
  };

  useEffect(() => {
    isVisible();
  }, []);

  return (
    <>
      <div
        ref={mapRef}
        className="center w-full gap-7 pt-10 text-white md:flex-col md:pt-8"
        id={headerId.reception}
      >
        <PlaceDescription
          src={IMAGES.FORMAL.G}
          alt="wedding"
          time={c.ceremony.time}
          location={c.ceremony.location}
          map={c.ceremony.googleMap}
          place={c.ceremony.place}
          title="Wedding Ceremony"
        >
          <WeddingRingSvg />
        </PlaceDescription>

        <PlaceDescription
          src={IMAGES.CAMBODIA.E}
          alt="reception"
          time={c.reception.time}
          location={c.reception.location}
          map={c.reception.googleMap}
          place={c.reception.place}
          title="Wedding Reception"
        >
          <DinnerTableSvg />
        </PlaceDescription>
      </div>

      <GoogleMap loadMap={loadMap} />
    </>
  );
}

interface IPlaceDescription extends I.Image, I.Child {
  readonly time: string;
  readonly location: string;
  readonly map: string;
  readonly place: string;
  readonly title: string;
}

function PlaceDescription(props: IPlaceDescription) {
  return (
    <div className="relative isolate mt-14 h-[706px] w-[48%] gap-4 [transition:width_0.5s_ease] md:mt-0 md:w-full">
      <Image
        src={props.src}
        fill
        alt={props.alt}
        className="-z-1 aspect-video rounded-3xl object-cover"
        loading="lazy"
      />

      <div className="absolute h-full w-full rounded-3xl bg-black opacity-[30%]" />

      <div className="z-1 absolute flex h-full w-full flex-col items-center justify-between rounded-3xl bg-opacity-30 px-11 py-32">
        <div className="center">{props.children}</div>
        <div className="text-center">
          <p className="mb-3 text-3xl font-bold">{props.title}</p>

          <hr className="border-orchid-600 w-full border" />
        </div>

        <p className="text-lg font-bold">{props.time}</p>

        <p className="text-center text-3xl font-bold leading-10">
          {props.place}
        </p>

        <p className="text-center text-base font-light">{props.location}</p>

        <a
          href={props.map}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`map location ${props.title}`}
          className="center text-orchid-500 inline-flex h-14 w-full rounded-2xl bg-white text-black"
        >
          <MapLocation />
          <p className="text-orchid-500">Open Map</p>
        </a>
      </div>
    </div>
  );
}
