import Image from "next/image";
import React, { useState } from "react";
import nayharaImg from "/public/nayhara-fundo-preto.jpeg";
import mateus from "/public/matheus.jpg";
import irmao from "/public/irmao.jpg";
import "./specialist.scss";

export default function Specialist() {
  return (
    <div className="specialistSection">
      <div className="text-speacilist">
        <h2>Especialistas</h2>
        <p>Conheça nosso time de especialistas</p>
        <p>Nós somos especialistas em recuperar sua saúde financeira.</p>
      </div>
      <div className="listSpecialist">
        <div className="cardSpecialist">
          <Image
            className="specialist"
            src={mateus}
            alt="Foto do especialista Mateus"
            width={150}
            height={150}
          />
          <p>Consultor: Mateus Farias (Mar de Espanha, MG)</p>
        </div>
        <div className="cardSpecialist">
          <Image
            className="specialist"
            src={irmao}
            alt="Foto do especialista Irmao"
            width={150}
            height={150}
          />
          <p>Consultor: Alex Soares (Valparaíso de Goiás, GO)</p>
        </div>
        <div className="cardSpecialist">
          <Image
            className="specialist"
            src={nayharaImg}
            alt="Foto do especialista Nayhara"
            width={150}
            height={150}
          />
          <p>CEO: Nayhara Soares (Três Riosn - RJ)</p>
        </div>
      </div>
    </div>
  );
}
