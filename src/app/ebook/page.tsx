'use client';

import Image from "next/image";
import React from "react";
import imgSegredos from "/public/segredosScore.jpeg";
import "./ebook.scss";
import { redirect } from "next/navigation";
import Whatsapp from "../components/Whatsapp";

const handleJoinVipGroup = () => {
  const whatsappGroupUrl = "https://chat.whatsapp.com/I7cn8BdW02vEcH8UhhOoR6";
  window.open(whatsappGroupUrl, "_blank", "noopener,noreferrer");
};

export default function Ebook() {
  return (
    <div className="container">
      <main>
        <div className="contentBannerEbook">
          <div className="textLeftEbook">
            <div className="btnReturn" onClick={() => redirect("/")}>
              Retornar a Página Principal
            </div>
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

        <section className="product-section">
          <div>
          <h2 className="section-title">Ebook Segredos do Score Alto</h2>
          </div>
          <div>
          <p>
            Um guia completo e prático para entender e aplicar estratégias que
            destravam e aumentam a sua pontuação do score de forma eficaz.
          </p>
          <ul>
            <li>O que é o Score</li>
            <li>Fatores que influenciam sua pontuação</li>
            <li>Mitos sobre o Score</li>
            <li>O que pode prejudicar sua pontuação</li>
            <li>Plano de ação para destravar seu Score</li>
            <li>Estratégias para aumentar o Score</li>
          </ul>
          </div>
        </section>

        <section className="product-section">
          <div>
          <h2 className="section-title">Mentoria Score Alto na Prática</h2>
          </div>
          <div>
          <p>
            Com ebook incluído, 2 aulas online e ao vivo por mês, grupo de suporte
            exclusivo no Whatsapp e acompanhamento por 90 dias.
          </p>
          </div>
        </section>

        <section className="product-section">
          <div>
          <h2 className="section-title">Serviço de Execução</h2>
          </div>
          <div>
          <p>
            Estratégias diretamente nos cadastros Serasa dos clientes.
          </p>
          </div>
        </section>
        <div className="containerBtnVipFooter">
              <button className="btn" onClick={handleJoinVipGroup}>Entrar Para Grupo VIP</button>
            </div>
      </main>
      <Whatsapp/>
    </div>
  );
}
