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
          <CardService
            text={"Processo Limpa nome"}
            icon={CardIcon}
            paragraph={"Remova todas as dívidas negativadas do seu CPF ou CNPJ sem precisar renegociar ou quitar. Nosso processo via ação liminar é ideal para quem deseja se livrar das restrições financeiras imediatamente, restaurando o score de crédito para o nível mais alto obtido nos últimos cinco anos."} list={
              ["Remoção de todas as dívidas dos órgãos de proteção ao crédito (Serasa, SPC, BoaVista).",
                "Restauração do score para a maior pontuação dos últimos 5 anos.",
                "Ideal para quem busca eliminar o constrangimento de ter o nome negativado.",
                "Acesso imediato ao mercado de crédito"
              ]} />
          <CardService text={"Aumento de Score"}
            icon={ChartLine}
            paragraph={"Alcance um score de crédito elevado e desbloqueie mais oportunidades financeiras! Nosso serviço combina estratégias eficazes e suporte personalizado para melhorar sua pontuação no Serasa de forma prática e rápida."}
            list={
              [
                "Ebook Exclusivo: Um guia prático para entender o score, evitar erros e aplicar estratégias comprovadas para aumentá-lo.",
                "Mentoria Especializada: Aulas online ao vivo, suporte dedicado e acompanhamento contínuo por 90 dias.",
                "Serviço de Execução Direta: Deixe nossa equipe aplicar as estratégias diretamente nos seus cadastros, garantindo resultados mais rápidos."
              ]
            }
          />
          <CardService text={"Consulta a CPF e CNPJ"} icon={CardLineSerasa} paragraph={"Identifique pendências financeiras e proteja seu nome e o da sua empresa. Nossa consulta rápida e eficiente ao CPF e CNPJ revela dívidas ou restrições que podem estar prejudicando sua vida financeira."} list={[]} />

          <CardService text={"Perícia Avaliativa de Crédito"}
            icon={consult}
            paragraph="Nosso serviço de perícia avaliativa de crédito é o primeiro passo para transformar sua relação com o mercado financeiro. Realizamos uma análise clínica e detalhada da sua situação junto aos órgãos de proteção ao crédito, como SPC e Serasa, além de consultar registros no CADIN e BACEN."
            list={[
              "Diagnóstico Completo: Identificamos todas as pendências financeiras que estão impactando seu score e restringindo seu acesso ao crédito.",
              "Análise Estratégica: Investigamos registros em bases oficiais como CADIN e BACEN, verificando irregularidades e possíveis soluções.",
              "Plano de Ação Personalizado: Oferecemos estratégias sob medida para regularizar sua situação e reabilitar seu nome no mercado."
            ]}
          />
          <CardService text={" Redução de Juros Abusivos"}
            icon={checkElement}
            paragraph={"Com nosso serviço de redução de juros abusivos e intermediação de negociação de dívidas, você pode diminuir o valor das suas pendências em até 90%! Realizamos uma análise detalhada de financiamentos, empréstimos e cartões de crédito para identificar e corrigir cobranças indevidas, garantindo que você pague apenas o valor correto, sem taxas excessivas."}
            list={[
              "Análise Especializada: Identificação de juros abusivos e irregularidades em contratos financeiros.",
              "Negociação Estratégica: Intermediação direta com credores para garantir as melhores condições de pagamento.",
              "Apoio Personalizado: Orientação completa durante todo o processo para alcançaruma solução que cabe no seu bolso.",
              "Redução de dívidas em até 90%.",
              "Mais tranquilidade financeira com parcelas ajustadas ao seu orçamento."
            ]}
          />
          <CardService text={"Revisões Contratuais"} icon={contractIcon} paragraph={"Você sabia que muitos contratos financeiros possuem cláusulas abusivas? Nossa equipe realiza uma análise minuciosa dos seus contratos para identificar pontos que podem estar prejudicando suas finanças"} list={[]} />
        </div>
      </div>
    </section>
  )
}



