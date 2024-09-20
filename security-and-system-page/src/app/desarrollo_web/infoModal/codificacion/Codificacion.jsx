import ChaketModalServices from '@/svg/ChaketModalServices'
import styles from './Codificacion.module.css'
import { poppins } from '@/Fonts/fonts'
import Eficiencia from '@/svg/Eficiencia'

const Codificacion = () => {
  return (
    <div className={styles.desarrolloWebInfo}>
      <div>
        <span
          className={styles.span}
          style={{
            background: '#9162c025',
            color: '#c084fd',
          }}
        >
          <Eficiencia />
          Eficiencia
        </span>
        <h2 className={poppins.className}>
          Programación y codificación eficientes.
        </h2>
      </div>
      <div className={styles.parrafo}>
        <span className={poppins.className}>
          <ChaketModalServices />
          Programación Optimizada y Eficiente
        </span>
        <p className={poppins.className}>
          En nuestro equipo, nos especializamos en implementar soluciones de
          programación altamente optimizadas que priorizan la eficiencia y el
          rendimiento en cada proyecto. Nos enfocamos en escribir código limpio,
          legible y mantenible.
        </p>
      </div>
      <div className={styles.parrafo}>
        <span className={poppins.className}>
          <ChaketModalServices />
          Enfoque en Escalabilidad y Futuras Necesidades
        </span>
        <p className={poppins.className}>
          Nuestro enfoque no solo se centra en cumplir con los requisitos
          actuales, sino también en anticipar futuras necesidades, lo que
          permite una integración fluida de nuevas funciones y una fácil
          escalabilidad del sistema.
        </p>
      </div>
    </div>
  )
}

export default Codificacion
