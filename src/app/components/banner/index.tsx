import React, { useRef } from "react";
import Button from "../button";
import "./banner.scss";

const Banner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement | null>(null);  

  return (
    <div
      ref={bannerRef}
      className="contentBanner"
    >
      <div className="responsiveBox">
        <div className="contentBox">
          <h1 data-text="Reabilite seu crédito e transforme seu futuro financeiro!" className="slogan">Reabilite seu crédito e transforme seu futuro financeiro!</h1>
          <p className="justifyElement">Especialistas em transformar sua vida financeira com confiança e segurança.</p>
          <Button router={"analitic"} name={"Contato"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
