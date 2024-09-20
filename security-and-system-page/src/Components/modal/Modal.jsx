'use client'
import { useEffect, useRef } from 'react'
import styles from './Modal.module.css'
import gsap from 'gsap'
import Whatsapp from '@/svg/Whatsapp'
import Telegram from '@/svg/Telegram'
import EmailModal from '@/svg/EmailModal'
import Signal from '@/svg/Signal'

const Modal = ({ isModalOpen, setModalOpen }) => {
  const modal = useRef(null)
  const content = useRef(null)
  const titleRef1 = useRef(null)
  const titleRef2 = useRef(null)
  const subtitleRef = useRef(null)
  const buttonRef1 = useRef(null)
  const buttonRef2 = useRef(null)
  const buttonRef3 = useRef(null)
  const buttonRef4 = useRef(null)

  useEffect(() => {
    if (isModalOpen) {
      gsap.set(modal.current, {
        y: -100,
        opacity: 0.8,
        scale: 0,
        visibility: 'hidden',
      })
      gsap.to(modal.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: 'power1',
        visibility: 'visible',
        onComplete: () => {
          gsap.fromTo(
            [
              content.current,
              titleRef1.current,
              titleRef2.current,
              subtitleRef.current,
              buttonRef1.current,
              buttonRef2.current,
              buttonRef3.current,
              buttonRef4.current,
            ],
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
            }
          )
        },
      })
    }
  }, [isModalOpen])

  const onClose = () => {
    setModalOpen(false)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isModalOpen) return null

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} ref={modal}>
        <div className={styles.content} ref={content}>
          <span ref={titleRef1}>EMPECEMOS</span>
          <h3 ref={titleRef2}>
            ¿Listo para llevar tu proyecto digital al siguiente nivel?
          </h3>
          <p ref={subtitleRef}>
            Estamos listos para dar vida a tus ideas, estas a un clic de
            distancia, nuestro equipo puede crear la página web perfecta para
            ti.
          </p>
          <ul>
            <li ref={buttonRef1}>
              <Whatsapp />
            </li>
            <li ref={buttonRef2}>
              <Telegram />
            </li>
            <li ref={buttonRef3}>
              <EmailModal />
            </li>
            <li ref={buttonRef4}>
              <Signal />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Modal
