import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; 
import depo1 from '/public/depoiments/depo1.jpg';
import depo2 from '/public/depoiments/depo2.jpg';
import depo3 from '/public/depoiments/depo3.jpg';
import depo4 from '/public/depoiments/depo4.jpg';
import DepoimentCard from '../depoimentsCard';
import './depoiments.scss';

const depoiments = [
  { image: depo1 },
  { image: depo2 },
  { image: depo3 },
  { image: depo4 },
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
