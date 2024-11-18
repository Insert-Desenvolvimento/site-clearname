import Image from "next/image";
import React from "react";
import Button from "../button";
import imgEbook from "/public/ebook.png";
import "./ebook.scss";

export default function EbookComponent() {
  return (
    <div className="containerEbook">
      <div className="contentEbook">
        <div className="containerSquare">
          <div className="squareElement">
            <div className="textCreditContainer">
              <h1>Quer aprender a Aumentar seu Score?</h1>
              <p>
                Aumente suas chances de aprovação de crédito com nossa
                consultoria especializada em score e rating bancário. Avaliamos
                seus hábitos financeiros e oferecemos um plano personalizado
                para melhorar sua reputação junto às instituições financeiras.
              </p>
              <p className="contentEbookInfo">
              <strong>Adquira nosso eBook exclusivo e descubra estratégias eficazes para melhorar sua reputação financeira e conquistar os melhores resultados:</strong>
              <ul>
                <li><strong>Análise personalizada:</strong> Avaliamos seus hábitos financeiros e indicamos pontos de melhoria.</li>
                <li><strong>Estratégias comprovadas:</strong> Conheça táticas para aumentar seu score e rating bancário de forma prática.</li>
                <li><strong>Plano de ação personalizado:</strong> Receba um passo a passo para melhorar suas chances de crédito.</li>
              </ul>
              <strong>Adquira agora o seu eBook e comece a transformar sua vida financeira!</strong>
              </p>
              <div className="containerButtonEbook">
              <Button router={"ebook"} name={"Compre"} />
              </div>
            </div>
          </div>
        </div>
        <Image src={imgEbook} alt="Book image" width={500} />
      </div>
    </div>
  );
}
