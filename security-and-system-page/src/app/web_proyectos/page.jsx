"use client";
import { poppins } from "@/Fonts/fonts";
import styles from "./page.module.css";
import CardOne from "./cards/CardOne";
import CardTwo from "./cards/CardTwo";

const Proyectos = () => {
  return (
    <div className={`${styles.container} ${poppins.className}`}>
      <CardOne />
      <CardTwo />
    </div>
  );
};

export default Proyectos;
