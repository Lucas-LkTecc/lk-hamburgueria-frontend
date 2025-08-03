import React from 'react'
import './App.css'
import HeroSection from './components/HeroSection';
import BurgerLocator from './components/BurgerLocator';
import ProductHighlightSection from './components/ProductHighlightSection';

function App() {
  return (
    <>
      <HeroSection/>
      <BurgerLocator />
      <ProductHighlightSection />
      {/* Aqui é onde o código do cabeçalo e outras seções irão */}
      <h1>LK Hamburgueria Landing Page</h1>
    </>
  );
}

export default App;