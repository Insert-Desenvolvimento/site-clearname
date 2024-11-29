"use client"
import Image from "next/image";
import React from "react";
import imgSegredos from "/public/segredosScore.jpeg";
import whats from "/public/whatsapp.png";
import "./ebook.scss";
import { redirect } from "next/navigation";

const handleJoinVipGroup = () => {
  const whatsappGroupUrl = "https://chat.whatsapp.com/I7cn8BdW02vEcH8UhhOoR6";
  window.open(whatsappGroupUrl, "_blank", "noopener,noreferrer");
};

export default function Ebook() {
  return (
    <div className="container">
      <main>
        <div className="contentBannerEbook">
          <div className="textLeft">
            <div className="btnReturn" onClick={() => redirect("/")}>Retornar a Página Principal</div>
            <h1>
              <span className="textOverlay">
                Cansado de esperar que seu Score aumente sozinho?
              </span>
              <br /> Descubra os segredos para destravar sua pontuação de forma
              simples.
            </h1>
            <div className="containerBtnVip">
              <button onClick={handleJoinVipGroup}>Entrar Para Grupo VIP</button>
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
