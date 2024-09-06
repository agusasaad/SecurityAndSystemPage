"use client";
import styles from "./ButtonOpenModal.module.css";
import { poppins } from "@/Fonts/fonts";
import { useEffect, useRef } from "react";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import gsap from "gsap";
import gifBlubble from "./../../../../public/mecanografia.gif";
import fondo from "./../../../../public/fondoBotton.png";

const ButtonOpenModal = ({ isModalOpen, setModalOpen }) => {
  const handleClick = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.containerButton}>
      <button className={poppins.className} onClick={handleClick}>
        <img
          src={fondo.src}
          alt="fondo"
          width={100}
          height={100}
          className={styles.buttonFondo}
        />
        <img
          className={styles.buttonGif}
          src={gifBlubble.src}
          alt=""
          width={90}
          height={100}
        />
      </button>
    </div>
  );
};

export default ButtonOpenModal;
