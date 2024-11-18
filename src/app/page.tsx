"use client";
import Header from "@/app/components/header";
import styles from "./page.module.css";
import Button from "./components/button";
import Whatsapp from "./components/Whatsapp";
import Banner from "./components/banner";
import Services from "./components/services";
import About from "./components/about";
import Group from "./components/group";
import Specialist from "./components/specialists";
import EbookComponent from "./components/ebookComponent";

export default function Home() {
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
