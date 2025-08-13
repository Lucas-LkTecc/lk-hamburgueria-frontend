import React, { useState } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import lkLogo from '../assets/menu/lkLogo.png';

function Header({ isHero }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header  className={`header ${isHero ? 'header-hero' : '' }`}>
            <div className="header-container">
                <div className="logo">
                    <img src={lkLogo} alt="LK Hamburgueria Logo" className="logo.img" />
                </div>

                <div className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes/> : <FaBars />}
                </div>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ""}`}>
                    <ul>
                        <li><a href="#menu" onClick={toggleMenu}>Menu</a></li>
                        <li><a href="#locais" onClick={toggleMenu}>Locais</a></li>
                        <li><a href="#clube" onClick={toggleMenu}>Clube LK</a></li>
                        <li><a href="#sobre" onClick={toggleMenu}>Sobre Nós</a></li>
                        <li><a href="#contato" onClick={toggleMenu}>Contatos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;