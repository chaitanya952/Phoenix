// src/pages/Home/index.tsx
import React from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Products } from './sections/Products';
import { Quality } from './sections/Quality';
import { Services } from './sections/Services';
import { Customers } from './sections/Customers';
import { News } from './sections/News';
import { CSR } from './sections/CSR';
import { RnD } from './sections/RnD';
import { Awards } from './sections/Awards';
import { Contact } from './sections/Contact';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Quality />
      <Services />
      <Customers />
      <News />
      <CSR />
      <RnD />
      <Awards />
      <Contact />
    </>
  );
};

export default HomePage;