import { poppins } from "@/Fonts/fonts";
import styles from "./page.module.css";
import web1 from "./../../../public/proyectos/cinq_capital.png";
import web2 from "./../../../public/proyectos/fest_club.png";
import web3 from "./../../../public/proyectos/fiestas.png";
import web4 from "./../../../public/proyectos/sdp.png";
import web5 from "./../../../public/proyectos/que_dj.png";
import web6 from "./../../../public/proyectos/net_expertos.png";
import web7 from "./../../../public/proyectos/tu_voz_suma.png";

const page = () => {
  const imageCarrucel = [web1, web2, web5, web3, web6, web4, web7];

  const copy = [...imageCarrucel, ...imageCarrucel];

  return (
    <div className={`${styles.container} ${poppins.className}`}>
      <div className={styles.containerTitle}>
        <span>Proyectos Realizados</span>
        <h1>Explora Nuestra variedad de Proyectos.</h1>
      </div>
      <div className={styles.containerCards}>
        <div className={styles.containerCarrucel}>
          {copy.map((element, index) => (
            <div key={index} className={styles.card_web}>
              <img
                src={element.src}
                width={"600px"}
                height={"auto"}
                alt="imagen proyecto"
              />

              <div className={styles.buttons}>
                <button
                  className={`${poppins.className} ${styles.button_blue}`}
                >
                  Detalles
                </button>
                <button
                  className={`${poppins.className} ${styles.button_black}`}
                >
                  Link
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.containerCarrucel_mobile}>
          {imageCarrucel.map((element, index) => (
            <div key={index} className={styles.card_mobile}>
              <img
                src={element.src}
                width={"100%"}
                height={"auto"}
                alt="imagen proyecto"
              />

              <div className={styles.buttons_mobile}>
                <button
                  className={`${poppins.className} ${styles.button_blue}`}
                >
                  Detalles
                </button>
                <button
                  className={`${poppins.className} ${styles.button_black}`}
                >
                  Link
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
