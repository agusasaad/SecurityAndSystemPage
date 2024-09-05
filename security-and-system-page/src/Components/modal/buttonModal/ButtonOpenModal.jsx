"use client";
import styles from "./ButtonOpenModal.module.css";
import { poppins } from "@/Fonts/fonts";
import { useEffect, useRef } from "react";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import gsap from "gsap";
import gifBlubble from "./../../../../public/mecanografia.gif";

const ButtonOpenModal = ({ isModalOpen, setModalOpen }) => {
  const handleClick = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.containerButton}>
      <button className={poppins.className} onClick={handleClick}>
        <img src={gifBlubble.src} alt="" width={60} height={60} />
      </button>
    </div>
  );
};

export default ButtonOpenModal;
