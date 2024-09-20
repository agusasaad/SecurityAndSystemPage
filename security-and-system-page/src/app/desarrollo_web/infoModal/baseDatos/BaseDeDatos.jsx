import ChaketModalServices from '@/svg/ChaketModalServices'
import styles from './BaseDeDatos.module.css'
import { poppins } from '@/Fonts/fonts'
import Gestion from '@/svg/Gestion'
const BaseDeDatos = () => {
  return (
    <div className={styles.desarrolloWebInfo}>
      <div>
        <span
          className={styles.span}
          style={{
            background: '#d1772425',
            color: '#ff9a3c',
          }}
        >
          <Gestion />
          Gestión
        </span>
        <h2 className={poppins.className}>
          Integración de Base de Datos y Gestión.
        </h2>
      </div>
      <div className={styles.parrafo}>
        <span className={poppins.className}>
          <ChaketModalServices />
          Estructuras de Datos Seguras
        </span>
        <p className={poppins.className}>
          Nuestra experiencia nos permite diseñar y mantener estructuras de
          datos que no solo aseguran la integridad y seguridad de la
          información, sino que también están preparadas para manejar grandes
          volúmenes de datos sin comprometer el rendimiento.
        </p>
      </div>
      <div className={styles.parrafo}>
        <span className={poppins.className}>
          <ChaketModalServices />
          Bases de Datos Adaptadas a tus Necesidades
        </span>
        <p className={poppins.className}>
          Nos aseguramos de que cada base de datos esté alineada con las
          necesidades específicas de tu empresa, permitiendo una gestión de
          datos eficiente y facilitando la toma de decisiones basada en
          información precisa y oportuna.
        </p>
      </div>
    </div>
  )
}

export default BaseDeDatos
