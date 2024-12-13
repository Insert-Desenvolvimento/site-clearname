'use client'
import { useEffect, useState } from 'react';
import React from 'react';
import "./whatsapp.scss";

const Whatsapp = () => {
  const [bottomOffset, setBottomOffset] = useState(20);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight - 200) {
        setBottomOffset(scrollPosition - documentHeight + 200);
      } else {
        setBottomOffset(20);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="whats" style={{ bottom: `${bottomOffset}px` }}>
      <a href='https://wa.me/553299986585?text=Olá! Venho pelo o Site e Tenho interesse em saber mais.' target='_blank' rel="noopener noreferrer">
        <img src="/variableImg/whatsapp.png" alt="Icone whatsapp para entrar em contato com a Nayhara Soares" title='Fale com Nayhara Soares' />
      </a>
    </div>
  );
};

export default Whatsapp;
