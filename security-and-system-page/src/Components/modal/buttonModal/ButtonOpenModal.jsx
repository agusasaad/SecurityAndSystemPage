"use client";
import styles from "./ButtonOpenModal.module.css";
import { poppins } from "@/Fonts/fonts";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const ButtonOpenModal = ({ isModalOpen, setModalOpen }) => {
  return (
    <div className={styles.containerButton}>
      <button
        className={poppins.className}
        onClick={() => setModalOpen(!isModalOpen)}
      >
        <IoChatbubbleEllipsesSharp />
      </button>
    </div>
  );
};

export default ButtonOpenModal;
