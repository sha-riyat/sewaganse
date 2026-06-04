import bt1 from '../assets/images/bt1.png';
import bt2 from '../assets/images/bt2.png';
import agentity from '../assets/images/agentity_new.jpg';
import seiro from '../assets/images/seiro.jpg';
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
  url?: string;
}

export const projects: Project[] = [
  {
    id: 'seiro-agency',
    title: { fr: 'Seiro Agency', en: 'Seiro Agency' },
    client: { fr: 'Seiro', en: 'Seiro' },
    services: {
      fr: 'Automatisation IA, Développement Web',
      en: 'AI Automation, Web Development',
    },
    description: {
      fr: "Seiro conçoit des systèmes d'automatisation IA sur mesure qui éliminent les frictions et décuplent l'intelligence opérationnelle des entreprises modernes.",
      en: 'Seiro designs bespoke AI automation systems that eliminate friction and amplify the operational intelligence of modern businesses.',
    },
    thumb: seiro,
    hero: seiro,
    images: [seiro],
    url: 'https://seiro-ai-agency.vercel.app/',
  },
  {
    id: 'agentity',
    title: { fr: 'Agentity', en: 'Agentity' },
    client: { fr: 'Personnel', en: 'Personal' },
    services: {
      fr: 'Développement Web, Identité Cryptographique',
      en: 'Web Development, Cryptographic Identity',
    },
    description: {
      fr: "Protocole d'identité cryptographique open source pour les agents IA. Agentity permet à chaque agent de recevoir un DID compatible W3C et un document d'identité signé avec des clés Ed25519, garantissant sécurité et traçabilité dans les infrastructures HTTP.",
      en: 'Open source cryptographic identity protocol for AI agents. Agentity provides every agent with a W3C-compatible DID and a signed identity document with Ed25519 keys, ensuring security and traceability across HTTP infrastructure.',
    },
    thumb: agentity,
    hero: agentity,
    images: [agentity],
    url: 'https://agentity-website.vercel.app/',
  },
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
