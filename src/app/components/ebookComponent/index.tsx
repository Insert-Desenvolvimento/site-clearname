
import React from "react";
import Button from "../button";
import imgEbook from "/public/variableImg/ebook.jpeg";
import "./ebook.scss";

export default function EbookComponent() {
  return (
    <div className="containerEbook">
      <div className="contentEbook">
        <div className="containerSquare">
          <div className="squareElement">
            <div className="textCreditContainerScore">
              <h1>Quer aprender a Aumentar seu Score?</h1>
              <p>
              Aprenda como destravar e aumentar o seu score com estratégias simples e eficazes!
              </p>
              <div className="contentEbookInfo">
              <h2>Adquira nosso eBook exclusivo e descubra estratégias eficazes</h2>
              <br/>
              <p>
              Ebook Exclusivo: Um guia prático para entender o score, evitar erros e aplicar estratégias comprovadas para aumentá-lo.
Mentoria Especializada: Aulas online ao vivo, suporte dedicado e acompanhamento contínuo por 90 dias.
Serviço de Execução Direta: Deixe nossa equipe aplicar as estratégias diretamente nos seus cadastros, garantindo resultados mais rápidos.
              </p>
              </div>
              <div className="containerButtonEbook">
              <Button router={"ebook"} name={"COMPRE"} />
              </div>
            </div>
          </div>
        </div>
        <img src={imgEbook.src} className="imgEbookContainer" alt="Book image"  />
      </div>
    </div>
  );
}
