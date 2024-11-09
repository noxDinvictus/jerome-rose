import { I } from '@/interface';

export const c = {
  date: '2024-12-20T00:00:00.000Z', // 20 December 2024
  ceremony: {
    place: 'Embassy Of The Republic Of The Philippines',
    time: '07:00 - 08:00',
    location: 'Phnom, 182 Preah Norodom Blvd (41), Penh 12301',
    googleMap: 'https://maps.app.goo.gl/BF2u3819a8RTR3oG6',
  },
  reception: {
    place: 'The Table Steak',
    time: '11:00 - 14:00',
    location: 'Street 592, Phnom Penh 12152',
    googleMap: 'https://maps.app.goo.gl/MteDQQt8LiMYCsmG7',
  },
};

export const headerId = {
  wedding: '/',
  dressCode: 'dressCode',
  giftGuide: 'giftGuide',
  theProposal: 'the-proposal',
  reception: 'reception',
  ourStory: 'our-story',
};

export const headerNav: I.Navigation[] = [
  {
    name: 'Wedding',
    id: '/',
    link: '/',
  },
  {
    name: 'The Proposal',
    id: headerId.theProposal,
    link: `/wedding/${headerId.theProposal}`,
  },
  {
    name: 'Our Story',
    id: headerId.ourStory,
    link: `/wedding/${headerId.ourStory}`,
  },
];

export const landingPageSubNav: I.Navigation[] = [
  {
    name: 'Reception Venue',
    id: headerId.reception,
  },
  {
    name: 'Dress Code',
    id: headerId.dressCode,
  },
  {
    name: 'Gift Guide',
    id: headerId.giftGuide,
  },
];
