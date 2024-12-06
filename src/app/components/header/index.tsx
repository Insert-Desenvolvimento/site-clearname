import React, { useState } from "react";
import logo from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import "./header.scss";
import { MenuProps } from "@/app/Types";
import { redirect } from "next/navigation";

interface MenuElements {
    menuItens: MenuProps[]
}

const Header = ({ menuItens }:MenuElements) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="headerMenu">
      <div className="imglogo">
        <Image src={logo} alt="Logo" width={50} />
      </div>
      <ul className="headerList">
        {menuItens?.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
        <div className="clientArea" onClick={()=> redirect("/analitic")}>
          <p>Limpe seu Nome</p>
        </div>
      </ul>
      <div
        className={`hamburgerMenu ${isMenuOpen ? "show" : ""}`}
        onClick={toggleMenu}
      >
        <button className="hamburgerButton">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className="headerListMobile">
          {menuItens?.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
          <div className="clientArea">
            <p>Área do Cliente</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
