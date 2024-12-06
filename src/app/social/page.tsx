'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './social.scss';

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
import logo from '/public/logo.png';

const Social: React.FC = () => {
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

  return (
    <div className="social-container">
      <Link href="/" className="back-button">Voltar à Página Principal</Link>
      <Image src={logo} alt="Logo Nayhara Soares" width={200} className="logo" />

      <header className="header">
        <h1 className="company-name">Nayhara Soares</h1>
        <p className="tagline">Ao utilizar nossos serviços, você também está apoiando causas sociais.</p>
      </header>

      <section className="commitment-section">
        <h2 className="section-title">Parte dos lucros da empresa é destinada a essas iniciativas. Exemplos de causas:</h2>
        <ul>
          <li>Apoio a famílias em vulnerabilidade financeira.</li>
          <li>Educação financeira para jovens e comunidades carentes.</li>
          <li>Doação de recursos para ONGs locais</li>
          <li>Apoio a iniciativas artísticas e culturais</li>
        </ul>
        <p>
          A Nayhara Soares tem como missão promover ações e iniciativas que contribuam para o
          desenvolvimento social, fortalecendo comunidades e impactando positivamente o ambiente.
        </p>
        <p>
          Atuamos em diversas áreas, como educação, saúde e inclusão social, com o compromisso
          de gerar resultados duradouros e efetivos.
        </p>
      </section>

      <div className="containerGallery">
        <section className="image-gallery">
          <h2 className="section-title">Nossas Ações</h2>
          <Splide
            options={{
              perPage: 3,
              breakpoints: {
                768: {
                  perPage: 2,
                },
                480: {
                  perPage: 1,
                },
              },
              gap: '20px',
              pagination: true,
              arrows: true,
              autoplay: true,
              interval: 2500,
              pauseOnHover: true,
              rewind: true,
            }}
          >
            {images.map((img, index) => (
              <SplideSlide key={index}>
                <div className="slide">
                  <Image src={img} alt={`Ação social ${index + 1}`} width={600} height={400} />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </section>
      </div>
    </div>
  );
};

export default Social;
