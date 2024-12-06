"use client";
import Header from "@/app/components/header";
import styles from "./page.module.css";
import Whatsapp from "./components/Whatsapp";
import Banner from "./components/banner";
import Services from "./components/services";
import About from "./components/about";
import Group from "./components/group";
import Specialist from "./components/specialists";
import EbookComponent from "./components/ebookComponent";
import Analises from "./components/analisesComponent";
import Depoiments from "./components/depoiments";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <header className={styles.headerElements}>
        <Header
          menuItens={[
            { name: "Home", link: "/" },
            { name: "Sobre Nós", link: "#about" },
            { name: "Serviços", link: "#services" },
            { name: "Nossa Equipe", link: "#group" },
            { name: "Análise", link: "#analises" },
            { name: "Responsabilidade Social", link: "/social" },
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
        <Analises/>
        <Depoiments/>
        <Footer/>
      </main>
      <Whatsapp />
    </>
  );
}
