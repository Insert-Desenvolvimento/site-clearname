import Header from "@/app/components/header";
import styles from "./page.module.css"
import Button from "./components/button";
import Image from "next/image";
import logo from "/public/logo.png"
import CardService from "./components/cardService";
import nayharaImg from "/public/nayhara-fundo-preto.jpeg";
import mateus from "/public/matheus.jpeg"
import irmao from "/public/irmao.jpeg"
import FormComponent from "./components/formComponent";
import CardIcon from "/public/cardcreadit.svg"
import ChartLine from "/public/charLine.svg"
import CardLineSerasa from "/public/cardLineSerasa.svg"
import contractIcon from "/public/contractIcon.svg"
import checkElement from "/public/checkElement.svg"
import consult from "/public/consult.svg"

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

        <section className={styles.services} id="services">
          <div className={styles.containerServices}>
            <div className={styles.textTitleElement}>
              <h2 className={styles.servicesTitle}>Nossos Serviços</h2>
              <p className={styles.paragraph}>Temos o serviço ideal para resolver a sua vida financeira.</p>
            </div>
            <div className={styles.cardContainer}>
              <CardService text={"Reabilitação de Crédito"} icon={CardIcon} paragraph={"Remova todas as dívidas negativadas do seu CPF ou CNPJ sem precisar renegociar ou quitar. Nosso processo via ação liminar é ideal para quem deseja se livrar das restrições financeiras imediatamente, restaurando o score de crédito para o nível mais alto obtido nos últimos cinco anos."} />
              <CardService text={"Aumento de Score"} icon={ChartLine} paragraph={"Aumente suas chances de aprovação de crédito com nossa consultoria especializada em score e rating bancário. Avaliamos seus hábitos financeiros e oferecemos um plano personalizado para melhorar sua reputação junto às instituições financeiras."} />
              <CardService text={"Consulta a CPF e CNPJ"} icon={CardLineSerasa} paragraph={"Identifique pendências financeiras e proteja seu nome e o da sua empresa. Nossa consulta rápida e eficiente ao CPF e CNPJ revela dívidas ou restrições que podem estar prejudicando sua vida financeira."} />
              <CardService text={"Consultoria Clínica de Crédito"} icon={consult} paragraph="Oferecemos uma análise clínica detalhada da sua situação financeira. Identificamos suas pendências e traçamos as melhores estratégias para que você recupere o controle das suas finanças e tenha acesso às melhores opções de crédito." />
              <CardService text={"Regularização de Cheques"} icon={checkElement} paragraph={"Pendências com cheques podem prejudicar sua reputação no mercado. Nosso serviço de regularização de cheques ajuda você a resolver esses problemas de forma rápida e eficiente, para que possa recuperar a credibilidade no mercado."} />
              <CardService text={"Revisões Contratuais"} icon={contractIcon} paragraph={"Você sabia que muitos contratos financeiros possuem cláusulas abusivas? Nossa equipe realiza uma análise minuciosa dos seus contratos para identificar pontos que podem estar prejudicando suas finanças"} />
            </div>
          </div>
        </section>

        <section className={styles.about} id="about">
          <div className={styles.containerAbout}>
            <div className={styles.textAbout}>
              <h2>Sobre Nós</h2>
              <p>Nós mais do que ninguém entendemos o seu momento. </p>
              <p>Utilizamos uma abordagem personalizada, analisando sua situação financeira única para criar um plano de ação eficaz.</p>
              <p>Utilizamos uma abordagem personalizada, analisando sua situação financeira única para criar um plano de ação eficaz.</p>
              <Button />
            </div>
            <div>
              <Image className={styles.specialist} src={logo} alt="Logo Image" height={300} width={300} />
            </div>
          </div>
        </section>

        <section className={styles.group}>
          <div className={styles.contentGroup}>
            <div className={styles.perfilImg}>
              <Image className={styles.imgItem} src={nayharaImg} alt="Nayhara soares posando para fodo de perfil" height={400} width={400} />
              <p className={styles.imgText}>Nayhara Soares - CEO</p>
              <ul className={styles.listAtractive}>
                <li className={styles.listBullet}><span className={styles.evidence}>+1000 <br /></span>Cliente</li>
                <li className={styles.listBullet}><span className={styles.evidence}>+35 <br /></span>Cidade</li>
                <li className={styles.listBullet}><span className={styles.evidence}>+100</span> <br />Consultores</li>
                <li className={styles.listBullet}><span className={styles.evidence}>+70% <br /></span>De Redução</li>
              </ul>
            </div>
            <div className={styles.textGroup}>
              <h2>Nayhara Soares - CEO</h2>
              <p>Hoje, após ajudar inúmeras pessoas a limparem seus nomes e elevarem seus scores, Nayhara tem a certeza de que encontrou seu propósito.</p>
              <p>Seu trabalho vai além de oferecer consultoria financeira; é sobre transformar vidas, devolver a confiança e permitir que seus clientes voltem a sonhar.</p>
              <Button />
            </div>
          </div>
        </section>


        {/* <div className={styles.otherGroups}> */}

        <div className={styles.specialistSection}>
          <h2>Especialistas</h2>
          <div className={styles.listSpecialist}>
            <div className={styles.cardSpecialist}>
              <Image className={styles.specialist} src={mateus} alt="Foto do especialista Mateus" width={250} height={250} />
              <p>Utilizamos uma abordagem personalizada, analisando sua situação financeira única para criar um plano de ação eficaz.</p>
            </div>
            <div className={styles.cardSpecialist}>
              <Image className={styles.specialist} src={irmao} alt="Foto do especialista Irmao" width={250} height={250} />
              <p>Utilizamos uma abordagem personalizada, analisando sua situação financeira única para criar um plano de ação eficaz.</p>
            </div>
          </div>
        </div>

        {/* </div> */}

        <div className={styles.containerEbook}>
          <div className={styles.containerSquare}>
            <div className={styles.squareElement}>
              <h1>Quer aprender a Aumentar seu Score ?</h1>
            </div>
            <div className={styles.textContainer}>
              <h2>E-Book</h2>
              <p>Descubra por meio de nossa Ebook as melhores técnicas para ter uma score alto e de qualidade. Permita-se a ter crédito....</p>
              <Button />
            </div>
          </div>
        </div>


        <div className={styles.sectionFormContainer}>
          <div className={styles.sectionForm}>
            <FormComponent />
            <section className={styles.textElement}>
              <h2>Solicite uma Analise</h2>
              <p>Termo de Consentimento para Contato
                Seus dados pessoais estão seguros e serão tratados de acordo com a Lei Geral de Proteção de Dados (LGPD). Não compartilharemos suas informações com terceiros e não enviaremos spam.
                Autorizo o contato por telefone, WhatsApp e e-mail.
              </p>
              <form action="">
                <input className={styles.checkelement} type="checkbox" name="agreen" id="agreen" />
                <label htmlFor="agreen">Sim, autorizo o contato</label>
              </form>
              <h3>Recupere seu crédito e volte a brilhar: limpe seu nome conosco
                e abra as portas para novas oportunidades!</h3>
            </section>
          </div>
        </div>
      </main >
    </>
  );

}
