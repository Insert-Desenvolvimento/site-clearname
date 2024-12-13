import "./about.scss"
import logo from "/public/variableImg/logo.png";
import { useEffect, useState } from "react";

export default function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <section className="about" id="about">
      <div className="containerAbout">
        <div className="textAbout">
          <h2>Sobre Nós</h2>

          <p>
            Na Nayhara Soares Reabilitação de Crédito, acreditamos que recuperar sua
            credibilidade no mercado financeiro é o primeiro passo para reconstruir sonhos. Nossa
            missão é restabelecer seu acesso ao crédito e oferecer soluções que devolvam a
            tranquilidade e a confiança necessárias para planejar um futuro melhor.
          </p>

          <p>
            Trabalhamos com dedicação para ajudar pessoas que enfrentam restrições financeiras
            ou dificuldades em obter crédito, mesmo sem dívidas, a retomarem seu lugar no
            mercado.
          </p>

          <p>
            Oferecemos orientação especializada, fortalecemos seu relacionamento
            bancário, aumentamos seu score de crédito e garantimos acesso às melhores condições
            financeiras.
            Além disso, combatemos juros abusivos e desenvolvemos estratégias personalizadas
            para que você possa quitar suas dívidas de forma justa.
          </p>

        </div>
        {isClient && (
          <div className="imageAboutContainer">
            <img className="logoAbout" src={logo.src} alt="Logo Image" width={300} />
          </div>
        )}
      </div>
    </section >
  )
}



