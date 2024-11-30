import nayharaImg from "/public/nayhara-fundo-preto.jpeg";
import "./group.scss";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "../button";
interface Counts {
  clientes: number;
  cidades: number;
  consultores: number;
  reducao: number;
}

export default function Group() {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

      const interval = setInterval(incrementCounts, 30);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section className="group" ref={sectionRef} id="group">
      <div className="contentGroup">
        {isClient && (
          <div className="perfilImg">
            <Image
              className="imgItem"
              src={nayharaImg}
              alt="Nayhara Soares posando para foto de perfil"
            />
            <span className="circleLeft">CEO - Nayhara Soares</span>
          </div>
        )}
        <div className="textGroup">
          <h2>Nayhara Soares</h2>
          <p>
            Hoje, após ajudar inúmeras pessoas a limparem seus nomes e elevarem
            seus scores, Nayhara tem a certeza de que encontrou seu propósito.
          </p>
          <p>
            Seu trabalho vai além de oferecer consultoria financeira; é sobre
            transformar vidas, devolver a confiança e permitir que seus clientes
            voltem a sonhar.
          </p>
          <Button router={"analitic"} name={"Contato"} />
        </div>
      </div>
      <ul className="listAtractive">
        <li className="listBullet">
          <span className="evidence">
            +{counts.clientes} <br />
          </span>
          Clientes
        </li>
        <li className="listBullet">
          <span className="evidence">
            +{counts.cidades} <br />
          </span>
          Cidades
        </li>
        <li className="listBullet">
          <span className="evidence">+{counts.consultores}</span> <br />
          Consultores
        </li>
        <li className="listBullet">
          <span className="evidence">
            +{counts.reducao}% <br />
          </span>
          De Redução
        </li>
      </ul>
    </section>
  );
}
