import { Hero } from './blocks/Hero';
import { Features } from './blocks/Features';
import { Navbar } from './blocks/Navbar';
import { Footer } from './blocks/Footer';
import { Pricing } from './blocks/Pricing';

export const COMPONENT_MAP: Record<string, any> = {
  Hero: Hero,
  Features: Features,
  Navbar: Navbar,
  Footer: Footer,
  Pricing: Pricing,
};