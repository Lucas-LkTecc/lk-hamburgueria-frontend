import React from "react";
import './TestimonialSection.css';

function TestimonialSection() {
    return (
        <section className="testimonial-section">
            <div className="sectionn-container">
                <h2 className="section-title">O que nossos clientes dizem</h2>
                <p className="section-subtitle">
                    Na LK Hamburgueria, a sua opnião é a nossa maior inspiração. Veja o que nossos clientes têm a dizer sobre a experiência LK!
                </p>
                <div className="testimonials-grid"></div>
            </div>
        </section>
    );
}

export default TestimonialSection;