import React from 'react';
import './ProductHighlightSection.css';
import ProductCard from './ProductCard';

import promoBurger1 from '../assets/menu/xburger-duplo.jpg';
import promoBurger2 from '../assets/menu/chama-negra.jpg';

function ProductHighlightSection() {
    return (
        <section className="product-highlight-section">
            <div className="section-container">
                {/* are para redenrizar os ProdctCards */}

                <ProductCard
                    image={promoBurger1}
                    alt="Black jack X-Burger Duplo Club"
                    title="BLACK JACK X-BURGER DUPLO CLUB"
                    description="O sabor inconfundivel do hamburguer de grelha com um toque especial."
                    linkText="VER DETALHES"
                    linkHref="#menu"
                />

                <ProductCard
                    image={promoBurger2}
                    alt="Ganhe um Hambúrguer Grátis!"
                    title="GANHE UM HAMBÚGUER GRÁTIS!"
                    description="Participe do nosso clube de fidelidade e ganhe um hambúrguer grátis."
                    linkText="PARTICIPE AGORA"
                    linkHref="#clube"
                />
                {/* adicionar mais cards aqui */}
            </div>
        </section>
    );
}

export default ProductHighlightSection;