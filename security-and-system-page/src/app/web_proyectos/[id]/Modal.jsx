import { poppins } from '@/Fonts/fonts'
import styles from './page.module.css'
import { CgClose } from 'react-icons/cg'
const Modal = ({ showProject, showModal, setShowModal }) => {
  if (!showModal) return
  return (
    <div className={styles.containerModal}>
      <div className={styles.Modal}>
        <div className={styles.containerButton}>
          <button onClick={() => setShowModal(false)}>
            <CgClose />
          </button>
        </div>
        <h1 className={poppins.className}>Información</h1>
        <p>{showProject}</p>
      </div>
    </div>
  )
}

export default Modal
