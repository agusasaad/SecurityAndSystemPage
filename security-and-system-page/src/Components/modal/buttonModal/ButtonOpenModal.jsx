"use client";
import styles from "./ButtonOpenModal.module.css";
import { poppins } from "@/Fonts/fonts";
import { IoMdChatbubbles } from "react-icons/io";
const ButtonOpenModal = ({ isModalOpen, setModalOpen }) => {
  return (
    <div className={styles.containerButton}>
      <button
        className={poppins.className}
        onClick={() => setModalOpen(!isModalOpen)}
      >
        <IoMdChatbubbles />
      </button>
    </div>
  );
};

export default ButtonOpenModal;
