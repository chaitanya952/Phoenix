// src/pages/Home/index.tsx
import React from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Products } from './sections/Products';
import { Contact } from './sections/Contact';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Contact />
    </>
  );
};

export default HomePage;