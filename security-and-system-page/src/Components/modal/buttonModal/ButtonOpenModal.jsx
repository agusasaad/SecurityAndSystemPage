"use client";
import styles from "./ButtonOpenModal.module.css";
import { poppins } from "@/Fonts/fonts";
import { useEffect, useRef } from "react";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import gsap from "gsap";

const ButtonOpenModal = ({ isModalOpen, setModalOpen }) => {
  const circleRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = gsap.to(circleRef.current, {
      scale: 1.7,
      opacity: 0,
      ease: "power1",
      repeat: -1,
      duration: 1.3,
      delay: 3,
    });
  }, []);

  const handleClick = () => {
    if (animationRef.current) {
      animationRef.current.kill();
    }
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.containerButton}>
      <button className={poppins.className} onClick={handleClick}>
        <IoChatbubbleEllipsesSharp />
      </button>
      <div className={styles.circle} ref={circleRef}></div>
    </div>
  );
};

export default ButtonOpenModal;
