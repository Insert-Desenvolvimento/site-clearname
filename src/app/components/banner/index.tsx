import React, { useEffect, useRef } from "react";
import Button from "../button";
import "./banner.scss";

const Banner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement | null>(null);  // Referência para o banner

  useEffect(() => {
    const lazyLoadBackground = (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        if (bannerRef.current) {
          bannerRef.current.style.setProperty(
            '--background-image', `url(${bannerRef.current.getAttribute('data-bg')})`
          );
        }
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(lazyLoadBackground);
    });

    if (bannerRef.current) {
      observer.observe(bannerRef.current); 
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className="contentBanner"
      data-bg="/back.jpg"
    >
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
