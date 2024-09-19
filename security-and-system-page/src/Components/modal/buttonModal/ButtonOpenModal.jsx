'use client'
import styles from './ButtonOpenModal.module.css'
import { poppins } from '@/Fonts/fonts'
import { HiChatBubbleLeftRight } from 'react-icons/hi2'

const ButtonOpenModal = ({ isModalOpen, setModalOpen }) => {
  const handleClick = () => {
    setModalOpen(!isModalOpen)
  }

  return (
    <div className={styles.containerButton}>
      <button className={poppins.className} onClick={handleClick}>
        <HiChatBubbleLeftRight />
      </button>
    </div>
  )
}

export default ButtonOpenModal
