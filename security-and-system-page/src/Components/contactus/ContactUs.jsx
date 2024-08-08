"use client";
import styles from "./ContactUs.module.css";
import MapComponent from "./mapComponent/MapComponent";
import { poppins } from "@/Fonts/fonts";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ContactUs}>
        <div className={styles.info}>
          <div className={styles.title}>
            <span className={poppins.className}>Contacto</span>
            <h2 className={poppins.className}>Conversemos</h2>
            <p className={poppins.className}>
              ¿Listo para llevar tu presencia en línea al siguiente nivel?
              ¡Hablemos de tu proyecto! Contáctanos para una consulta gratuita.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <span className={poppins.className}>
              <FaLocationDot className={styles.icon} />
              Juan José paso 1353, Morón
            </span>
            <span className={poppins.className}>
              <MdOutlinePhone className={styles.icon} />
              11 7726-4032
            </span>
            <span className={poppins.className}>
              <MdOutlineEmail className={styles.icon} />
              contact@securityandsystem.com
            </span>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
