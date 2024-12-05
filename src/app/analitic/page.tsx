import React from "react";
import FormComponent from "../components/formComponent";
import "./analitic.scss";
import img from "/public/imgForm.png";
import Image from "next/image";
export default function Analitic() {
  return (
    <div className="container">
      <div className="content">
        <div className="containerRight">
            <h2>Solicite uma Análise</h2>
          <FormComponent />
          <section className="term">
            <p>
              Termo de Consentimento para Contato: Seus dados pessoais estão
              seguros e serão tratados de acordo com a Lei Geral de Proteção de
              Dados (LGPD). Não compartilharemos suas informações com terceiros
              e não enviaremos spam. Autorizo o contato por telefone, WhatsApp e
              e-mail.<br/>
              <i className="warning">Ao clicar em Enviar você confirma que está de acordo com os termos</i>
            </p>
          </section>
        </div>
        <div className="containerLeft">
          <Image src={img} alt="Imagem ajudamos você"/>
        </div>
      </div>
    </div>
  );
}
