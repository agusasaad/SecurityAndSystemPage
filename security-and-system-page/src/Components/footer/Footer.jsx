"use client";
import Image from "next/image";
import styles from "./Footer.module.css";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/logo_mobile.png"
            alt="Logo de la empresa Security And System"
            width={150}
            height={200}
          />
          <p>
            Creación de sitios web a medida que combina diseño innovador y
            funcionalidad para llevar tu presencia en línea al siguiente nivel.
          </p>
          <div className={styles.social}>
            <span>
              <RiInstagramFill />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaFacebookSquare />
            </span>
          </div>
        </div>
        <div className={styles.routes}>
          <ul>
            <li>
              <Link href="/">INICIO</Link>
            </li>
            <li>
              <Link href="/desarrollo_web">NUESTROS SERVICIOS</Link>
            </li>
            <li>
              <Link href="/">SOBRE NOSOTROS</Link>
            </li>
            <li>
              <Link href="/">NUESTROS TRABAJOS</Link>
            </li>
          </ul>
        </div>
        <div className={styles.copyright}>
          <p>© 2024 Security And System. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
