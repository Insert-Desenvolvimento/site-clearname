import CardIcon from "/public/cardcreadit.svg";
import ChartLine from "/public/charLine.svg";
import CardLineSerasa from "/public/cardLineSerasa.svg";
import contractIcon from "/public/contractIcon.svg";
import checkElement from "/public/checkElement.svg";
import consult from "/public/consult.svg";
import CardService from '../cardService';
import "./services.scss"

export default function Services() {
  return (
    <section className="services" id="services">
    <div className="containerServices">
      <div className="textTitleElement">
        <h2 className="servicesTitle">Nossos Serviços</h2>
        <p className="paragraph">Temos o serviço ideal para resolver a sua vida financeira.</p>
      </div>
      <div className="cardContainer">
        <CardService text={"Reabilitação de Crédito"} icon={CardIcon} paragraph={"Remova todas as dívidas negativadas do seu CPF ou CNPJ sem precisar renegociar ou quitar. Nosso processo via ação liminar é ideal para quem deseja se livrar das restrições financeiras imediatamente, restaurando o score de crédito para o nível mais alto obtido nos últimos cinco anos."} />
        <CardService text={"Aumento de Score"} icon={ChartLine} paragraph={"Aumente suas chances de aprovação de crédito com nossa consultoria especializada em score e rating bancário. Avaliamos seus hábitos financeiros e oferecemos um plano personalizado para melhorar sua reputação junto às instituições financeiras."} />
        <CardService text={"Consulta a CPF e CNPJ"} icon={CardLineSerasa} paragraph={"Identifique pendências financeiras e proteja seu nome e o da sua empresa. Nossa consulta rápida e eficiente ao CPF e CNPJ revela dívidas ou restrições que podem estar prejudicando sua vida financeira."} />
        <CardService text={"Consultoria Clínica de Crédito"} icon={consult} paragraph="Oferecemos uma análise clínica detalhada da sua situação financeira. Identificamos suas pendências e traçamos as melhores estratégias para que você recupere o controle das suas finanças e tenha acesso às melhores opções de crédito." />
        <CardService text={"Regularização de Cheques"} icon={checkElement} paragraph={"Pendências com cheques podem prejudicar sua reputação no mercado. Nosso serviço de regularização de cheques ajuda você a resolver esses problemas de forma rápida e eficiente, para que possa recuperar a credibilidade no mercado."} />
        <CardService text={"Revisões Contratuais"} icon={contractIcon} paragraph={"Você sabia que muitos contratos financeiros possuem cláusulas abusivas? Nossa equipe realiza uma análise minuciosa dos seus contratos para identificar pontos que podem estar prejudicando suas finanças"} />
      </div>
    </div>
  </section>
  )
}



