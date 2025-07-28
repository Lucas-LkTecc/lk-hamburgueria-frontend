import React from 'react';
import './BurgerLocator.css';

const LocationIcon = () => (
    <svg className="location-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
    </svg>
);

function BurgerLocator() {
  return (
    <section className="burger-locator">
      <div className="locator-content-wrapper"> {/* Novo wrapper para o layout horizontal */}
        <div className="locator-left">
          <LocationIcon /> {/* O ícone de localização */}
          <h2 className="locator-title">ENCONTRE SUA HAMBURGUERIA</h2>
        </div>
        <div className="locator-right">
          <p className="locator-description">
            Descubra a unidade mais próxima <br />de você e saboreie o melhor hambúrguer!
          </p>
          <button className="find-burgers-button">ENCONTRAR HAMBURGUERIAS</button>
        </div>
      </div>
    </section>
  );
}

export default BurgerLocator;