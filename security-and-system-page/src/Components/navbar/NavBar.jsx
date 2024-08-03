"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import logoSAS from "../../../public/logoSAS.png";
import { IoMenu } from "react-icons/io5";
import { poppins } from "@/fonts/fonts";
import gsap from "gsap";

const NavBar = () => {
  const navBarAnimate = useRef(null);

  const [showMenu, setShowMenu] = useState(false);

  //Animaciones GSAP
  useEffect(() => {
    gsap.set(navBarAnimate.current, {
      y: -50,
      opacity: 0,
      visibility: "hidden",
    });
    gsap.to(navBarAnimate.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "back.inOut",
      stagger: 0.5,
      visibility: "visible",
    });
  }, []);

  return (
    <div className={styles.containerNav} ref={navBarAnimate}>
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
          <ul className={poppins.className}>
            <li>Inicio</li>
            <li>Servicios</li>
            <li>Sobre Nosotros</li>
            <li>Nuestros Trabajos</li>
          </ul>
        </div>
        <div className={styles.end}>
          <button className={`${poppins.className} ${styles.button}`}>
            Contactanos
          </button>
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
