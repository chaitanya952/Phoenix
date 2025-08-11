// src/pages/Home/index.tsx
import React from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Products } from './sections/Products';
import { Services } from './sections/Services';
import { Customers } from './sections/Customers';
import { Clients } from './sections/Clients';
import { Contact } from './sections/Contact';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Services />
      <Customers />
      <Clients />
      <Contact />
    </>
  );
};

export default HomePage;