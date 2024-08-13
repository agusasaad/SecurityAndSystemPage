import React from "react";
import styles from "./ButtonOpenModal.module.css";
import { IoShareSocial } from "react-icons/io5";
const ButtonOpenModal = ({ isModalOpen, setModalOpen }) => {
  return (
    <div className={styles.containerButton}>
      <button onClick={() => setModalOpen(!isModalOpen)}>
        <IoShareSocial className={styles.icon} />
      </button>
    </div>
  );
};

export default ButtonOpenModal;
