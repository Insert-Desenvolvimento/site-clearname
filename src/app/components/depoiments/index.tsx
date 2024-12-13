import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; 
import DepoimentCard from '../depoimentsCard';
import './depoiments.scss';

const depoiments = [
  { image: '/depoiments/depo1.jpg' },
  { image: '/depoiments/depo2.jpg' },
  { image: '/depoiments/depo3.jpg' },
  { image: '/depoiments/depo4.jpg' },
];

const Depoiments: React.FC = () => {
  return (
    <div className="container-all-depoiments">
        <div className="content">
      <div className="container-text">
        <h2 className="title">O Que Nossos Clientes Estão Dizendo</h2>
        <p>Confira as histórias e experiências de quem confiou em nosso trabalho e ficou completamente satisfeito.</p>
      </div>
      <Splide
        className="depoiments-splide"
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
          interval: 1500, 
          pauseOnHover: true, 
          rewind: true
        }}
      >
        {depoiments.map((depoiment, index) => (
          <SplideSlide key={index}>
            <DepoimentCard depoiment={depoiment} />
          </SplideSlide>
        ))}
      </Splide>
      </div>
    </div>
  );
};

export default Depoiments;
