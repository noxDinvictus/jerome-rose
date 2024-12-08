import { getImages } from '@/utils/custom-function';

export const IMAGES = {
  hero: '/bg.webp',
  // * note size should be 1200x630
  // * https://chatgpt.com/c/672b9454-7e94-8003-8837-45295823023f
  og: '/og.jpg',

  FORMAL: getImages('formal'),
  CAMBODIA: getImages('cambodia'),
  WEDDING: getImages('wedding'),
  PROPOSAL: getImages('proposal'),
  TELEGRAM: {
    JEROME: '/telegram/jerome.jpg',
    ROSE_ANNE: '/telegram/rose-anne.jpg',
  },
};

export const VIDEO = {
  proposal: '/proposal.mp4',
};
