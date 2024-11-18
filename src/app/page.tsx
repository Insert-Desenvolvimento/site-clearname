"use client";
import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/header";
import styles from "./page.module.css";
import Button from "./components/button";
import Image from "next/image";
import logo from "/public/logo.png";
import CardService from "./components/cardService";
import nayharaImg from "/public/nayhara-fundo-preto.jpeg";
import mateus from "/public/matheus.jpg";
import irmao from "/public/irmao.jpg";
import FormComponent from "./components/formComponent";
import CardIcon from "/public/cardcreadit.svg";
import ChartLine from "/public/charLine.svg";
import CardLineSerasa from "/public/cardLineSerasa.svg";
import contractIcon from "/public/contractIcon.svg";
import checkElement from "/public/checkElement.svg";
import consult from "/public/consult.svg";
import imgEbook from "/public/ebook.png";
import Whatsapp from "./components/Whatsapp";
import Link from "next/link";
import Banner from "./components/banner";
import Services from "./components/services";
import About from "./components/about";
import Group from "./components/group";
import Specialist from "./components/specialists";
import EbookComponent from "./components/ebookComponent";

interface Counts {
  clientes: number;
  cidades: number;
  consultores: number;
  reducao: number;
}

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [counts, setCounts] = useState<Counts>({
    clientes: 0,
    cidades: 0,
    consultores: 0,
    reducao: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targetCounts: Counts = {
        clientes: 500,
        cidades: 35,
        consultores: 100,
        reducao: 70,
      };

      const incrementCounts = () => {
        setCounts((prevCounts) => {
          const newCounts = { ...prevCounts };
          (Object.keys(targetCounts) as (keyof Counts)[]).forEach((key) => {
            if (prevCounts[key] < targetCounts[key]) {
              newCounts[key] = Math.min(prevCounts[key] + 1, targetCounts[key]);
            }
          });
          return newCounts;
        });
      };

      const interval = setInterval(incrementCounts, 5); // Ajuste o intervalo para controlar a velocidade
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <header className={styles.headerElements}>
        <Header
          menuItens={[
            { name: "Home", link: "/home" },
            { name: "Sobre Nós", link: "#about" },
            { name: "Serviços", link: "/services" },
            { name: "Seja Um Consultor", link: "/work-us" },
            { name: "Fale Conosco", link: "/contact" },
          ]}
        />
        <Banner />
      </header>

      <main className={styles.mainContent}>
        <Services />
        <About />
        <Group />
        <Specialist />
        <EbookComponent/>

        

        <div className={styles.sectionFormContainer}>
          <Button router={"analitic"} name={"Faça uma Análise"} />
        </div>
      </main>
      <Whatsapp />
    </>
  );
}
