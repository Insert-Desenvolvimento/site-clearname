import nayharaImg from "/public/variableImg/nayhara-fundo-preto.jpeg";
import "./group.scss";
import { useEffect, useRef, useState } from "react";
import Button from "../button";
import CardAbout from "../CardAbout";
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
export default function Group() {
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);



  useEffect(() => {
    setIsClient(true);
  }, []);




  return (
    <section className="group" ref={sectionRef} id="group">
      <div className="contentGroup">
        {isClient && (
          <div className="perfilImg">
            <img
              className="imgItem"
              src={nayharaImg.src}
              alt="Nayhara Soares posando para foto de perfil"
            />
          </div>
        )}
        <div className="textGroup"  >
          <h2>Nayhara Soares</h2>
          <p>
            Nayhara Soares entende as dores do superendividamento e os impactos emocionais
            das dívidas. Com uma abordagem humanizada e comprometida, ela tem ajudado
            inúmeras pessoas a limpar seus nomes, elevar seus scores e se restabelecer no mercado
            de crédito
          </p>
          <p>
            Sua missão vai além de oferecer consultoria e estratégias financeiras; é
            sobre transformar vidas, devolver a confiança e permitir que seus clientes voltem a
            sonhar e construir um futuro livre das limitações das dívidas.
          </p>
          <div className="pillarCard">
            <Splide
              className="ul"
              options={{
                perPage: 1,
                gap: "1rem",
                padding: { right: "50%" },
                arrows: true,
                pagination: false,
              }}
            >
              <SplideSlide className="li">
                <CardAbout cardItem={{
                  title: "Missão",
                  paragraph: "Restabelecer seu acesso ao crédito e oferecer soluções que devolvam a tranquilidade e a confiança necessárias para planejar um futuro melhor. Trabalhamos com dedicação para ajudar pessoas que enfrentam restrições financeiras ou dificuldades em obter crédito, mesmo sem dívidas, a retomarem seu lugar nomercado.",
                  list: []
                }} />
              </SplideSlide>
              <SplideSlide className="li">
                <CardAbout cardItem={{
                  title: "Visão",
                  paragraph: "Ser referência no mercado de reabilitação de crédito no Brasil, transformando vidas ao devolver credibilidade e possibilitar que nossos clientes voltem a sonhar e realizar.",
                  list: []
                }} />
              </SplideSlide>
              <SplideSlide className="li">
                <CardAbout cardItem={{
                  title: "Valores",
                  paragraph: "",
                  list: ["Transparência: Atuação clara e honesta em todas as etapas do processo.", "Confiança: Construção de relações sólidas e confiáveis com nossos clientes.", "Ética: Compromisso com práticas justas e responsáveis.", "Comprometimento: Dedicação total para alcançar os melhores resultados.", "Empatia: Entendimento das necessidades individuais de cada cliente."]
                }} />
              </SplideSlide>
            </Splide>
          </div>

          <Button router={"analitic"} name={"Contato"} />
        </div>
      </div>
    </section>
  );
}
