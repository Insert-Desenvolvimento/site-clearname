import React from "react";
import { Text } from "@/app/Types";
import Image from "next/image";
import IconArrow from "/public/arrowIcon.svg";
import "./card.scss";

const CardService = ({ text, icon, paragraph }: Text) => {
  return (
    <div className="card">
      <div className="containerIcons">
        {" "}
        <Image
          src={icon}
          width={25}
          height={25}
          alt="Card element icon"
          className="iconElement"
        />
        <Image
          src={IconArrow}
          width={25}
          height={25}
          alt="Card element icon"
          className="iconElement"
        />
      </div>
      <div className="textElement">
        <h2  id="title">
          {text}
        </h2>
        <p className="textParagraph">{paragraph}</p>
      </div>
    </div>
  );
};

export default CardService;
