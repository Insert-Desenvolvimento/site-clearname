import Image from "next/image";
import React from "react";
import imgSegredos from "/public/segredosScore.jpeg";
import whats from "/public/whatsapp.png";
import "./ebook.scss";
export default function Ebook() {
  return (
    <div className="container">
      <main>
        <div className="contentBanner">
          <div className="textLeft">
            <div className="btnReturn">Retornar a Página Principal</div>
            <h1>
              <span className="textOverlay">
                Cansado de esperar que seu Score aumente sozinho?
              </span>
              <br /> Descubra os segredos para destravar sua pontuação de forma
              simples.
            </h1>
            <div className="containerBtnVip">
              <Image src={whats} className="imgWhats" alt="Imagem Whatsapp"/>
              <button>Entrar Para Grupo VIP </button>
            </div>
          </div>
          <div className="ebookImgContainer">
            <Image src={imgSegredos} alt="Imagem Ebook Segredos do Score" />
          </div>
        </div>
      </main>
    </div>
  );
}
