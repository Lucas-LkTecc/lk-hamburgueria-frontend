import React from 'react';
import './HeroSection.css';
import Header from './Header'; // Importamos o Header aqui
import burgerImage from '../assets/hamburguer2.avif';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <img src={burgerImage} alt="Hambúrguer Delicioso" className="hero-image" />
      </div>
      <div className="hero-content">
        <Header isHero={true} /> {/* Passamos a prop 'isHero' para o Header */}
        <div className="hero-text">
          <h1>EAT BETTER <br/> BURGERS</h1>
          <button className="view-burgers-button">VIEW OUR BURGERS</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;