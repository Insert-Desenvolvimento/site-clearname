'use client'; // Indica que o componente é renderizado no cliente

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Importando o componente Image do Next.js
import './social.scss';

// Importando as imagens diretamente
import img1 from '/public/social/img1.jpeg';
import img2 from '/public/social/img2.jpeg';
import img3 from '/public/social/img3.jpeg';
import img4 from '/public/social/img4.jpeg';
import img5 from '/public/social/img5.jpeg';
import img6 from '/public/social/img6.jpeg';
import img7 from '/public/social/img7.jpeg';
import img8 from '/public/social/img8.jpeg';
import img9 from '/public/social/img9.jpeg';
import img10 from '/public/social/img10.jpeg';
import img11 from '/public/social/img11.jpeg';
import img12 from '/public/social/img12.jpeg';
import Header from '../components/header';

const Social = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 2500); // 2.5 segundos para transição automática
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="social-container">
       <Header
          menuItens={[
            { name: "Home", link: "/" },
            { name: "Sobre Nós", link: "#about" },
            { name: "Serviços", link: "/services" },
            { name: "Seja Um Consultor", link: "/work-us" },
            { name: "Fale Conosco", link: "/contact" },
            { name: "Apoio Social", link: "/social" },
          ]}
        />
      <header className="header">
        <h1 className="company-name">Nayhara Soares</h1>
        <p className="tagline">Compromisso com a ética social e o bem-estar da comunidade</p>
      </header>

      <section className="commitment-section">
        <h2 className="section-title">Nosso Compromisso Social</h2>
        <p>
          A Nayhara Soares tem como missão promover ações e iniciativas que contribuam para o
          desenvolvimento social, fortalecendo comunidades e impactando positivamente o ambiente.
        </p>
        <p>
          Atuamos em diversas áreas, como educação, saúde e inclusão social, com o compromisso
          de gerar resultados duradouros e efetivos.
        </p>
      </section>


    <div className='containerGallery'>
      <section className="image-gallery">
        <h2 className="section-title">Nossas Ações</h2>
        <div className="carousel-container">
          <button className="prev-btn" onClick={prevSlide}>❮</button>
          <div className="carousel">
            <div
              className="carousel-slide"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {images.map((img, index) => (
                <div className="slide" key={index}>
                  <Image src={img} alt={`Ação social ${index + 1}`} width={600} height={400} />
                </div>
              ))}
            </div>
          </div>
          <button className="next-btn" onClick={nextSlide}>❯</button>
        </div>
      </section>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Nayhara Soares | Todos os direitos reservados</p>
        <div className="social-links">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
        </div>
      </footer>
    </div>
  );
};

export default Social;
