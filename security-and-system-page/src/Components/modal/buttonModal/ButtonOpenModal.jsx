import React from "react";
import styles from "./ButtonOpenModal.module.css";
import { poppins } from "@/Fonts/fonts";
const ButtonOpenModal = ({ isModalOpen, setModalOpen }) => {
  return (
    <div className={styles.containerButton}>
      <button
        className={poppins.className}
        onClick={() => setModalOpen(!isModalOpen)}
      >
        empecemos
      </button>
    </div>
  );
};

export default ButtonOpenModal;
