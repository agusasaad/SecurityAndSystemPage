'use client'
import styles from './ButtonOpenModal.module.css'
import { poppins } from '@/Fonts/fonts'
import Bubbles from '@/svg/Bubbles'

const ButtonOpenModal = ({ isModalOpen, setModalOpen }) => {
  const handleClick = () => {
    setModalOpen(!isModalOpen)
  }

  return (
    <div className={styles.containerButton}>
      <button className={poppins.className} onClick={handleClick}>
        <Bubbles />
      </button>
    </div>
  )
}

export default ButtonOpenModal
