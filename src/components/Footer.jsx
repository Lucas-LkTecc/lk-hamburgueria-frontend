import React from "react";
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear;

    return (
        <footer className="footer">
            <p>
                © {currentYear} LK Hamburgueria. Todos os direitor resrvados.
            </p>
        </footer>
    );
}

export default Footer;