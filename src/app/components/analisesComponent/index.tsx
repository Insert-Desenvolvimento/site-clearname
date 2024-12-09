import React from "react";
import Button from "../button";
import "./analise.scss";
import Image from "next/image";
import imgElement from "/public/imgSectionAnalises.jpeg";

export default function Analises() {
  return (
    <div className="containerAnalises" id="analises">
      <div className="contentElement">
        <div>
          <Image
            src={imgElement}
            alt="Image references for request analises "
            width={700}
          ></Image>
        </div>
        <div className="contentText">
          <h2>
          Limpe seu <span className="focus">Nome</span> Conosco!
          </h2>
          <p>
            Nós da equipe Nayhara Soares, estamos dispostos a renovar suas
            finanças.
          </p>
          <div className="listBenefits">
            <h2>Vantagens:</h2>
            <ul>
              <li>
                Remoção de todas as dívidas dos órgãos de proteção ao crédito
                (Serasa, SPC, Boa Vista).
              </li>
              <li>
                Restauração do score para a maior pontuação dos últimos 5 anos.
              </li>
              <li>
                Ideal para quem busca eliminar o constrangimento de ter o nome
                negativado.
              </li>
              <li>Acesso imediato ao mercado de crédito.</li>
            </ul>
          </div>
          <Button router={"analitic"} name={"Faça uma Análise"} />
        </div>
      </div>
    </div>
  );
}
