"use client";
import styles from "./ButtonOpenModal.module.css";
import { poppins } from "@/Fonts/fonts";
import gif_button from "./../../../../public/gif_button.gif";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ButtonOpenModal = ({ isModalOpen, setModalOpen }) => {
  const buttonRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      buttonRef.current,
      {
        width: "100%",
      },
      {
        width: "150px",
        ease: "linear",
        duration: 0.2,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
  }, []);
  return (
    <div className={styles.containerButton} ref={buttonRef}>
      <button
        className={poppins.className}
        onClick={() => setModalOpen(!isModalOpen)}
      >
        <img src={gif_button.src} alt="" />
      </button>
    </div>
  );
};

export default ButtonOpenModal;
