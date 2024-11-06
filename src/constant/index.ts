import { I } from '@/interface';

export const c = {
  date: '2024-12-20T00:00:00.000Z', // 20 December 2024
};

export const headerId = {
  theProposal: 'the-proposal',
  ourStory: 'our-story',
  preNup: '/',
};

export const headerNav: I.Navigation[] = [
  {
    name: 'Pre-nup',
    id: '/',
    isLink: false,
  },
  {
    name: 'Reception Venue',
    id: 'reception',
    isLink: false,
  },
  {
    name: 'Dress Code',
    id: 'dressCode',
    isLink: false,
  },
  {
    name: 'Gift Guide',
    id: 'giftGuide',
    isLink: false,
  },

  {
    name: 'The Proposal',
    id: 'theProposal',
    isLink: true,
  },
  {
    name: 'Our Story',
    id: headerId.ourStory,
    isLink: true,
  },
];
