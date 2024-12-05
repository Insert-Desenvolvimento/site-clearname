"use client"
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image'; 

import renato from '/public/renato.jpg';
import luana from '/public/luana.jpg';
import fernanda from '/public/fernanda.jpg';
import rosemary from '/public/rosemary.jpg';
import roney from '/public/roney.jpg';
import alessandra from '/public/alessandra.jpg';
import "./other.scss"

const OtherSpecialist: React.FC = () => {
  const specialists = [
    { name: 'Renato', position: 'Consultor(a)', image: renato },
    { name: 'Luana', position: 'Brand Manager & Web Designer', image: luana },
    { name: 'Fernanda', position: 'Consultor(a)', image: fernanda },
    { name: 'Rosemary', position: 'Consultor(a)', image: rosemary },
    { name: 'Roney', position: 'Consultor(a)', image: roney },
    { name: 'Alessandra', position: 'Consultor(a)', image: alessandra },
  ];

  return (
    <div className="specialists-gallery">
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
          gap: '10px',
          pagination: false,
          arrows: true,
          autoplay: true, 
          interval: 2000, 
          pauseOnHover: true, 
          rewind: true
        }}
      >
        {specialists.map((specialist, index) => (
          <SplideSlide key={index}>
            <div className="specialist-item">
              <Image src={specialist.image} alt={specialist.name} />
              <div className="caption">
                <h4>{specialist.name}</h4>
                <p>{specialist.position}</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default OtherSpecialist;
