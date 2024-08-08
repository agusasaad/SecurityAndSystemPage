"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import logoSAS from "../../../public/logoSAS.png";
import logoSAS_Mobile from "../../../public/logo_mobile.png";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import { GrServices } from "react-icons/gr";
import { PiUsersThreeLight } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { poppins } from "@/Fonts/fonts";
import gsap from "gsap";

const NavBar = () => {
  const navBarAnimate = useRef(null);

  const [showMenu, setShowMenu] = useState(false);

  //Animaciones GSAP
  useEffect(() => {
    gsap.set(navBarAnimate.current, {
      y: 100,
      opacity: 0,
      visibility: "hidden",
    });
    gsap.to(navBarAnimate.current, {
      opacity: 1,
      y: 0,
      duration: 0.9,
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

          <Image
            src={logoSAS_Mobile}
            alt="Logo de la empresa Security And System"
            className={styles.LogoNavMobile}
            width={150}
            height={"auto"}
          />
        </div>
        <div className={`${styles.center} ${showMenu ? styles.show : ""}`}>
          <div className={styles.onClose}>
            <button onClick={() => setShowMenu(false)}>
              <IoClose />
            </button>
          </div>
          <ul className={poppins.className}>
            <li>
              <CiHome className={styles.icon} />
              Inicio
            </li>
            <li>
              <GrServices className={styles.icon} />
              Servicios
            </li>
            <li>
              <PiUsersThreeLight className={styles.icon} />
              Sobre Nosotros
            </li>
            <li>
              <GrProjects className={styles.icon} />
              Nuestros Trabajos
            </li>
          </ul>
        </div>
        <div className={styles.end}>
          <button className={`${poppins.className} ${styles.button}`}>
            Contactanos
          </button>
        </div>
        <div className={styles.hamburguerButton}>
          <button onClick={() => setShowMenu(!showMenu)}>
            <TbMenuDeep />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
