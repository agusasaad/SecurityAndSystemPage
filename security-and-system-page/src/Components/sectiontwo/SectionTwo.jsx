import styles from "./SectionTwo.module.css";

const SectionTwo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <span>Sobre nosotros</span>
        <p>
          Somos una empresa dedicada a brindar soluciones integrales en el
          ámbito de diseño y desarrollo web, aplicaciones móviles, hosting,
          seguridad digital e infraestructura IT. Nuestra misión es ayudar a
          nuestros clientes a alcanzar el éxito en el mundo digital.
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
