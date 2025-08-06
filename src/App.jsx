import React from 'react'
import './App.css'
import HeroSection from './components/HeroSection';
import BurgerLocator from './components/BurgerLocator';
import ProductHighlightSection from './components/ProductHighlightSection';
import TestimonialSection from './components/TestimonialSection';
import ColeSlawCTA from './components/ColeSlawCTA';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <>
      <HeroSection/>
      <BurgerLocator />
      <ProductHighlightSection />
      <TestimonialSection />
      <ColeSlawCTA />
      <ContactSection />
      {/* Aqui é onde o código do cabeçalo e outras seções irão */}
    </>
  );
}

export default App;