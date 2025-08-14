// src/pages/Home/index.tsx
import React from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Products } from './sections/Products';
import { Services } from './sections/Services';
import { Quality } from './sections/Quality';
import { WhyPhoenix } from './sections/WhyPhoenix';
import { Clients } from './sections/Clients';
import { Contact } from './sections/Contact';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Services />
      <Quality />
      <WhyPhoenix />
      <Clients />
      <Contact />
    </>
  );
};

export default HomePage;