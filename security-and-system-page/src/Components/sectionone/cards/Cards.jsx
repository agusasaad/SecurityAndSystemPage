import React from "react";
import styles from "./Cards.module.css";
import DesarrolloWebImg from "./../../../../public/DesarrolloWeb.png";
import AplicacionesMobiles from "./../../../../public/AplicacionesMobiles.jpg";
import Image from "next/image";
import { poppins } from "@/Fonts/fonts";

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.containerImg}>
            <Image src={DesarrolloWebImg} alt="Desarrollo Web"></Image>
          </div>
          <div className={styles.containerText}>
            <h4 className={poppins.className}>Desarrollo Web</h4>
            <p className={poppins.className}>
              Nuestros diseños web están desarrollados para representar la
              identidad de tu marca y mejorar la interacción con tus clientes en
              línea.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.containerImg}>
            <Image src={AplicacionesMobiles} alt="Desarrollo Web"></Image>
          </div>
          <div className={styles.containerText}>
            <h4 className={poppins.className}>Servidores y Soluciones Cloud</h4>
            <p className={poppins.className}>
              Creamos soluciones web robustas y escalables que garantizan un
              rendimiento óptimo y una funcionalidad excepcional.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.containerImg}>
            <Image src={DesarrolloWebImg} alt="Desarrollo Web"></Image>
          </div>
          <div className={styles.containerText}>
            <h4 className={poppins.className}>Consultoria IT</h4>
            <p className={poppins.className}>
              Diseñamos y desarrollamos aplicaciones móviles personalizadas que
              permiten a tu empresa conectarse con una audiencia móvil en
              crecimiento.
            </p>
          </div>
        </div>

        {/* <div className={styles.card}>
          <div className={styles.containerImg}>
            <Image src={DesarrolloWebImg} alt="Desarrollo Web"></Image>
          </div>
          <div className={styles.containerText}>
            <h4 className={poppins.className}>Gestion de Base de Datos</h4>
            <p className={poppins.className}>
              Ofrecemos servicios de alojamiento web confiables y seguros para
              mantener tu sitio web en línea en todo momento.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.containerImg}>
            <Image src={DesarrolloWebImg} alt="Desarrollo Web"></Image>
          </div>
          <div className={styles.containerText}>
            <h4 className={poppins.className}>Servicios DevOps/SRE</h4>
            <p className={poppins.className}>
              Protegemos tu negocio contra amenazas cibernéticas con soluciones
              avanzadas que incluyen firewall, detección de intrusiones, etc.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.containerImg}>
            <Image src={DesarrolloWebImg} alt="Desarrollo Web"></Image>
          </div>
          <div className={styles.containerText}>
            <h4 className={poppins.className}>Diseño Web UX/UI</h4>
            <p className={poppins.className}>
              Protegemos tu negocio contra amenazas cibernéticas con soluciones
              avanzadas que incluyen firewall, detección de intrusiones, etc.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Cards;
