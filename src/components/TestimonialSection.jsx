import React from 'react';
import './TestimonialSection.css';

// Dados de exemplo para os depoimentos
const testimonials = [
  {
    id: 1,
    text: '“Os hambúrgueres da LK são, sem dúvida, os melhores que já provei. A carne é suculenta e o pão sempre fresquinho. Recomendo!”',
    author: 'Ana Carolina',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

function TestimonialSection() {
  // Duplicamos a lista de depoimentos para criar o efeito infinito
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="testimonial-section">
      <div className="section-header">
        <h2 className="section-title">O que nossos clientes dizem</h2>
        <p className="section-subtitle">
          Veja a opinião de quem já se deliciou com nossos hambúrgueres.
        </p>
      </div>

      <div className="testimonial-carousel-container">
        <div className="testimonial-carousel">
          {infiniteTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="testimonial-card">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.author} className="author-image" />
                <p className="author-name">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default TestimonialSection;