import Header from "@/app/components/header";
import styles from "./page.module.css"
import Button from "./components/button";
import Image from "next/image";
import logo from "/public/logo.png"

export default function Home() {
  return (

    <>
      <header className={styles.headerElements}>
        <Header menuItens={
          [{ name: "Home", link: "/home" },
          { name: "Sobre Nós", link: "#about" },
          { name: "Serviços", link: "/services" },
          { name: "Seja Um Consultor", link: "/work-us" },
          { name: "Fale Conosco", link: "/contact" }
          ]}
        />
        <div className={styles.responsiveBox}>
          <div className={styles.contentBox}>
            <h1 className={styles.slogan}>Reabilite seu crédito e transforme seu futuro financeiro!</h1>
            <p className={styles.justifyElement}>Especialistas em transformar sua vida financeira com confiança e segurança.</p>
            <Button />
          </div>
        </div>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.about} id="about">
          <div>
            <Image src={logo} alt="Logo Image" height={400} width={400} />
          </div>
          <div className={styles.textAbout}>
            <h2>Quem Somos</h2>
            <p>Nós mais do que ninguém entendemos o seu momento. </p>
            <p>Utilizamos uma abordagem personalizada, analisando sua situação financeira única para criar um plano de ação eficaz.</p>
            <p>Utilizamos uma abordagem personalizada, analisando sua situação financeira única para criar um plano de ação eficaz.</p>
            <Button />
          </div>
        </section>

        <section className={styles.services} id="services">

        </section>
      </main>
    </>
  );
}
