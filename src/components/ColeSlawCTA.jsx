import React from "react";
import './ColeSlawCTA.css';
import grillImage from '../assets/menu/grelha.jpg';

function ColeSlawCTA () {
    const ctaStyle = {
        backgroundImage: `url(${grillImage})`,
    };

    return (
        <section className="cole-slaw-cta" style={ctaStyle}>
            <div className="cta-overlay"></div>
            <div className="cta-content">
                <h2>TEMOS SALADA DE REPOLHO</h2>
                <button className="cta-button">MENU</button>
            </div>
        </section>
    );
}

export default ColeSlawCTA