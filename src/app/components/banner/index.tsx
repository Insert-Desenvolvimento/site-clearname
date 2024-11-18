import React from "react";
import Button from "../button";
import "./banner.scss"

const Banner: React.FC = () => {
  return (
    <div className="contentBanner">
      <div className="responsiveBox">
        <div className="contentBox">
          <h1 className="slogan">Reabilite seu crédito e transforme seu futuro financeiro!</h1>
          <p className="justifyElement">Especialistas em transformar sua vida financeira com confiança e segurança.</p>
          <Button router={"/analitic"} name={"Contato"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
