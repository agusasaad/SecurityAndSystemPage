"use client";
import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import logoSAS from "../../../public/logoSAS.png";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.containerNav}>
      <div className={styles.nav}>
        <div className={styles.start}>
          <Image
            src={logoSAS}
            alt="Logo de la empresa Security And System"
            className={styles.LogoNav}
            width={30}
            height={"auto"}
          />
        </div>
        <div className={`${styles.center} ${showMenu ? styles.show : ""}`}>
          <ul>
            <li>Inicio</li>
            <li>Servicios</li>
            <li>Sobre Nosotros</li>
            <li>Nuestros Trabajos</li>
          </ul>
        </div>
        <div className={styles.end}>
          <button>Contactanos</button>
        </div>
        <div className={styles.hamburguerButton}>
          <button onClick={() => setShowMenu(!showMenu)}>
            <IoMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
