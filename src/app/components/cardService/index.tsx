import React, { useState } from "react";
import { Text } from "@/app/Types";
import IconArrow from "/public/variableImg/arrowIcon.svg";
import "./card.scss";

const CardService = ({ text, icon, paragraph, list }: Text) => {
  const [isListVisible, setListVisible] = useState(false);

  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  return (
    <div className="card">
      <div className="containerIcons">
        <img
          src={icon}
          width={25}
          height={25}
          alt="Card element icon"
          className="iconElement"
        />
        <button className="toggleButton" onClick={toggleListVisibility}>
          <img
            src={IconArrow.src}
            width={25}
            height={25}
            alt="Toggle list visibility"
            className={`iconElement ${isListVisible ? "rotate" : ""}`}
          />
        </button>
      </div>
      <div className="textElement">
        <h2 id="title">{text}</h2>
        <p className="textParagraph">{paragraph}</p>
        {isListVisible && list.length > 0 && (
          <ul className="overlayList">
            <p className="benefitsService"><strong>Beneficíos</strong><br /></p>
            {list?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CardService;
