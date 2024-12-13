
import React from "react";
import nayharaImg from "/public/variableImg/nayhara-fundo-preto.jpeg";
import mateus from "/public/variableImg/matheus.jpg";
import irmao from "/public/variableImg/irmao.jpg";
import alissonImg from "/public/variableImg/alisson.jpg"
import "./specialist.scss";
import OtherSpecialist from "../otherSpecialist";

export default function Specialist() {
  return (
    <div className="container">
      <div className="specialistSection">
        <div className="text-speacilist">
          <h2>Nossa Equipe</h2>
          <p>
            Nosso time está aqui para ajudar você a limpar seu nome e recuperar sua credibilidade
            no mercado. Com soluções eficientes e orientação personalizada, facilitamos o
            processo para que você volte a ter acesso a crédito e novas oportunidades. Confie em
            quem entende e está ao seu lado para recomeçar.
          </p>
          <OtherSpecialist/>
        </div>
        <div className="listSpecialist">
          <div className="cardSpecialist">
            <div className="specialist">
              <img
                className="specialist"
                src={mateus.src}
                alt="Foto do especialista Mateus"
              />
            </div>
            <p>
              <strong>Parceiro Associado:</strong> Mateus Farias
              <br /> (Bicas / Mar de Espanha, MG)
            </p>
          </div>
          <div className="cardSpecialist">
            <div className="specialist">
              <img
                className="specialist"
                src={irmao.src}
                alt="Foto do especialista Alex Soares"
              />
            </div>
            <p>
              <strong>Parceiro Associado:</strong> Alex Soares
              <br /> (Valparaíso de Goiás, GO / Distrito Federal - DF)
            </p>
          </div>
          <div className="cardSpecialist">
            <div className="specialist">
              <img
                className="specialist"
                src={nayharaImg.src}
                alt="Foto do especialista Nayhara"
              />
            </div>
            <p>
              <strong>Fundadora e CEO:</strong> Nayhara Soares
              <br /> (Três Rios - RJ)
            </p>
          </div>
          <div className="cardSpecialist">
            <div className="specialist">
              <img
                className="specialist"
                src={alissonImg.src}
                alt="Foto do especialista Alisson"
              />
            </div>
            <p>
              <strong>Sócio e Co-fundador:</strong> Alisson Dias
              <br /> (Três Rios - RJ)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
