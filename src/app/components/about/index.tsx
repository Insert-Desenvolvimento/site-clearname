import "./about.scss"
import Button from "../button";
import Image from "next/image";
import logo from "/public/logo.png";
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
        <p>Eu entendo profundamente as dores de uma pessoa superendividada e os impactos</p>
        <p>emocionais que as dívidas causam. Por isso, estabeleci como uma das minhas missões de vida</p>
        <Button router={"analitic"} name={"Contato"}/>
      </div>
      {isClient && (
        <div>
          <Image className="logoAbout" src={logo} alt="Logo Image" height={300} width={300} />
        </div>
      )}
    </div>
  </section>
  )
}



