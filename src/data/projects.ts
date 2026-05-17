import bt1 from '../assets/images/bt1.png';
import bt2 from '../assets/images/bt2.png';
import type { ImageMetadata } from 'astro';

export interface Project {
  id: string;
  title: { fr: string; en: string };
  client: { fr: string; en: string };
  services: { fr: string; en: string };
  description: { fr: string; en: string };
  thumb: ImageMetadata;
  hero: ImageMetadata;
  images: ImageMetadata[];
}

export const projects: Project[] = [
  {
    id: 'benin-tour',
    title: { fr: 'Bénin Tour', en: 'Benin Tour' },
    client: { fr: 'Personnel', en: 'Personal' },
    services: {
      fr: 'Conception UI, Développement Mobile',
      en: 'UI Design, Mobile Development',
    },
    description: {
      fr: "Application mobile de guidage touristique développée avec Flutter, proposant des circuits culturels, des informations sur les sites historiques et une cartographie interactive.",
      en: 'Tourist guide mobile app built with Flutter, offering cultural tours, historical site info, and interactive mapping.',
    },
    thumb: bt1,
    hero: bt1,
    images: [bt1, bt2],
  },
];
