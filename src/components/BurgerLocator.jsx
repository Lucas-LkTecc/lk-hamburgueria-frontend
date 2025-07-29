import React from 'react';
import './BurgerLocator.css';
import { FaMapMarkedAlt } from 'react-icons/fa';

function BurgerLocator() {
  return (
    <section className="burger-locator">
      <div className="locator-content-wrapper"> {/* Novo wrapper para o layout horizontal */}
        <div className="locator-left">
          <FaMapMarkedAlt className="location-icon" />
          <h2 className="locator-title">ENCONTRE SUA HAMBURGUERIA</h2>
        </div>
        <div className="locator-right">
          <p className="locator-description">
            Descubra a unidade mais próxima de você e <br />saboreie o melhor hambúrguer!
          </p>
          <button className="find-burgers-button">ENCONTRAR HAMBURGUERIAS</button>
        </div>
      </div>
    </section>
  );
}

export default BurgerLocator;