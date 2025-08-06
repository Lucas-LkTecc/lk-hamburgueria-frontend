import React from "react";
import './ContactSection.css';
import {FaFacebookF, FaInstagram, FaWhatsapp} from 'react-icons/fa';

function ContactSection() {
    return (
        <section className="contact-section">
            <div className="section-container1">
                <div className="contact-info">
                    <h3>Fique por Dentro</h3>
                    <p>
                        Assine nosso boletim informativo e receba promoções e novidades exclusivas em primeira mão!
                    </p>
                </div>
                <form className="Newsletter-form">
                    <input 
                        type="email"
                        placeholder="Seu e-mail"
                        className="newsletter-input"
                    />
                    <button type="submit" className="newsletter-button">ASSINAR</button>
                </form>
                <div className="social-media">
                    <a href="#" className="social-icon"> <FaFacebookF/> </a>
                    <a href="#" className="social-icon"> <FaInstagram/> </a>
                    <a href="#" className="social-icon"> <FaWhatsapp/> </a>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;