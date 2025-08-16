import React, { useState, useEffect } from 'react';
import './TestimonialSection.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
    {
        id:1,
        text:'"Os hambúrgueres da LK são, sem dúvida, os melhores que já provei. A carne é suculenta e o pão sempre fresquinho. Recomendo!"',
        author: 'Ana Carolina',
        image:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop',
    },
    {
        id: 2,
        text: '“Atendimento impecável e um sabor inigualável. O hambúrguer de costela deles é simplesmente divino. Virou meu lugar favorito!”',
        author: 'João Silva',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop',
    },
    {
        id: 3,
        text: '“Uma experiência gastronômica completa! O ambiente é super agradável e os molhos da casa são fantásticos. Cinco estrelas!”',
        author: 'Mariana Lima',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&auto=format&fit=crop',
    },
    {
        id: 4,
        text: '“Preço justo e qualidade que surpreende. Fiquei fã do hambúrguer vegetariano. Perfeito para quem busca uma opção deliciosa sem carne.”',
        author: 'Pedro Santos',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop',
    },

]

function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    // Efeito de carrossel automático a cada 5 segundos
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]); // Reinicia o timer sempre que o slide muda

  return (
    <section className="testimonial-section">
      <div className="section-header">
        <h2 className="section-title">O que nossos clientes dizem</h2>
        <p className="section-subtitle">
          Veja a opinião de quem já se deliciou com nossos hambúrgueres.
        </p>
      </div>

      <div className="testimonial-carousel-container">
        <div className="testimonial-carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.author} className="author-image" />
                <p className="author-name">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="carousel-nav">
        <button className="nav-button" onClick={handlePrev}><FaChevronLeft /></button>
        <button className="nav-button" onClick={handleNext}><FaChevronRight /></button>
      </div>

    </section>
  );
}

export default TestimonialSection;