"use client";
import { useState } from "react";
import { poppins } from "@/Fonts/fonts";
import styles from "./page.module.css";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import logo from "./../../../public/logoSAS.png";

const SobreNosotros = () => {
  const [openTips, setOpenTips] = useState([false, false, false, false]);

  const toggleTip = (index) => {
    setOpenTips((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.gradient}></div>
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.info}>
          <div className={styles.title}>
            <h1 className={poppins.className}>Sobre Nosotros</h1>
          </div>
          <p>
            Somos una empresa dedicada a brindar soluciones integrales en el
            ámbito de diseño y desarrollo web, aplicaciones móviles, hosting,
            seguridad digital e infraestructura IT. Nuestra misión es ayudar a
            nuestros clientes a alcanzar el éxito en el mundo digital.
          </p>
          <p>
            En Security & System, nos enorgullece contar con un equipo de
            profesionales altamente capacitados y apasionados por la tecnología.
            Trabajamos estrechamente con nuestros clientes para comprender sus
            necesidades y ofrecer soluciones a medida que impulsen sus objetivos
            comerciales.
          </p>
        </div>
        <div className={styles.tips}>
          <div className={styles.tip}>
            <div className={styles.titleTip} onClick={() => toggleTip(0)}>
              <h6 className={poppins.className}>
                <span className={styles.span}>01.</span>Nuestros Valores
              </h6>
              <span>
                {openTips[0] ? <IoRemoveOutline /> : <IoAddOutline />}
              </span>
            </div>
            {openTips[0] && (
              <p>
                En Security and System, nos guiamos por valores fundamentales
                como la integridad, la innovación y el compromiso con la
                calidad. Creemos en la importancia de construir relaciones de
                confianza con nuestros clientes y en mantenernos a la vanguardia
                de la tecnología.
              </p>
            )}
          </div>

          <div className={styles.tip}>
            <div className={styles.titleTip} onClick={() => toggleTip(1)}>
              <h6 className={poppins.className}>
                <span className={styles.span}>03.</span>Nuestros Objetivos
              </h6>
              <span>
                {openTips[1] ? <IoRemoveOutline /> : <IoAddOutline />}
              </span>
            </div>
            {openTips[1] && (
              <p>
                En Security & System, miramos hacia el futuro con la ambición de
                continuar expandiéndonos y adaptándonos a las necesidades
                cambiantes del mercado. Nos comprometemos a seguir siendo un
                aliado estratégico para nuestros clientes en su camino hacia la
                transformación digital.
              </p>
            )}
          </div>
          <div className={styles.tip}>
            <div className={styles.titleTip} onClick={() => toggleTip(2)}>
              <h6 className={poppins.className}>
                <span className={styles.span}>02.</span>Enfoque en el Cliente
              </h6>
              <span>
                {openTips[2] ? <IoRemoveOutline /> : <IoAddOutline />}
              </span>
            </div>
            {openTips[2] && (
              <p>
                Nuestro enfoque es siempre el cliente. Nos esforzamos por
                comprender a fondo sus desafíos y objetivos, y nos comprometemos
                a entregar soluciones que superen sus expectativas.
              </p>
            )}
          </div>

          <div className={styles.tip}>
            <div className={styles.titleTip} onClick={() => toggleTip(3)}>
              <h6 className={poppins.className}>
                <span className={styles.span}>04.</span>Casos de Éxito
              </h6>
              <span>
                {openTips[3] ? <IoRemoveOutline /> : <IoAddOutline />}
              </span>
            </div>
            {openTips[3] && (
              <p>
                Hemos tenido el privilegio de participar en proyectos que han
                transformado digitalmente a nuestros clientes, ayudándolos a
                optimizar procesos, mejorar la seguridad y aumentar su presencia
                en línea.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* <div className={styles.formContainer}>
        <form className={poppins.className}>
          <h1 className={poppins.className}>¡Hablemos!</h1>
          <input
            type="text"
            placeholder="Nombre"
            className={poppins.className}
          />
          <input
            type="email"
            placeholder="Email"
            className={poppins.className}
          />
          <input
            type="text"
            placeholder="Telefono"
            className={poppins.className}
          />
          <textarea placeholder="Mensaje" className={poppins.className} />
          <button className={poppins.className}>Enviar</button>
        </form>
      </div> */}
    </div>
  );
};

export default SobreNosotros;
