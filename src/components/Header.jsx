import React from "react";
import './Header.css';
import { FaBars, FaTimes } from 'react-icons';

function Header({ isHero }) {
    return (
        <header className={`header ${isHero ? 'header-hero' : ''}`}>
            <div className="header-container">
                <div className="logo">
                    <h1>LK Hamburgueria</h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#locais">Locais</a></li>
                        <li><a href="#clube">Clube LK</a></li>
                        <li><a href="#sobre">Sobre Nós</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;