import styles from './DesarrolloWebInfo.module.css'
import { poppins } from '@/Fonts/fonts'
import ChaketModalServices from '@/svg/ChaketModalServices'
import Personalizacion from '@/svg/Personalizacion'

const DesarrolloWebInfo = () => {
  return (
    <div className={styles.desarrolloWebInfo}>
      <div>
        <span
          className={styles.span}
          style={{
            background: 'rgba(0, 189, 87, 0.1)',
            color: 'rgb(0, 189, 87)',
          }}
        >
          <Personalizacion />
          Personalización
        </span>
        <h2 className={poppins.className}>Desarrollo web Personalizado</h2>
      </div>
      <div className={styles.parrafo}>
        <span className={poppins.className}>
          <ChaketModalServices
            style={{ color: 'rgb(0, 189, 87)' }}
            className={styles.icon}
          />
          Entendiendo tu Visión
        </span>
        <p className={poppins.className}>
          Trabajamos estrechamente contigo para entender tu visión y traducirla
          en un sitio web que no solo sea visualmente atractivo, sino también
          funcional y alineado con tus objetivos comerciales.
        </p>
      </div>
      <div className={styles.parrafo}>
        <span className={poppins.className}>
          <ChaketModalServices
            style={{ color: 'rgb(0, 189, 87)' }}
            className={styles.icon}
          />
          Diseño Intuitivo y Eficiente
        </span>
        <p className={poppins.className}>
          Nuestro equipo de expertos en diseño y desarrollo se asegura de que
          cada detalle esté perfectamente optimizado para ofrecer una
          experiencia de usuario intuitiva.
        </p>
      </div>
    </div>
  )
}

export default DesarrolloWebInfo
