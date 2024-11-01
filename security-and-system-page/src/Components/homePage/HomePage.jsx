'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './HomePage.module.css'
import { poppins } from '@/Fonts/fonts'
import gsap from 'gsap'
import ArrowButton from '@/svg/ArrowButton'
import SliderButton from './buttonMobile/SliderButton'

const HomePage = () => {
  const titleRef1 = useRef(null)
  const titleRef2 = useRef(null)
  const subtitleRef = useRef(null)
  const buttonRef = useRef(null)
  const textRef = useRef(null)

  const numeroWhatsApp = '5491156260023'
  const mensaje = '¡Hola! Quisiera solicitar una cotización.'

  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    mensaje
  )}`

  const [showSpinner, setShowSpinner] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      titleRef1.current,
      { width: '0%', borderRight: '1px solid white', opacity: 0 },
      {
        width: '100%',
        opacity: 1,
        duration: 1,
        ease: 'power2',
      }
    )

    tl.to(titleRef1.current, {
      borderRight: 'none',
      duration: 0,
    }).fromTo(
      titleRef2.current,
      { width: '0%', border: 'none' },
      {
        width: '100%',
        borderRight: '2px solid white',
        duration: 1,
        ease: 'power2',
      }
    )

    tl.to(titleRef2.current, {
      borderRightColor: 'transparent',
      duration: 0.4,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    })

    tl.fromTo(
      [subtitleRef.current, buttonRef.current],
      { y: 100, opacity: 0, visibility: 'hidden' },
      {
        opacity: 1,
        y: 0,
        visibility: 'visible',
        ease: 'power3.out',
        duration: 0.8,
        stagger: 0.3,
      },
      '-=0.5'
    )

    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        maxWidth: 0,
        visibility: 'hidden',
        display: 'none',
      },
      {
        opacity: 1,
        display: 'block',
        maxWidth: '220px',
        visibility: 'visible',
        ease: 'power2',
        duration: 1,
      }
    )
  }, [])

  const handleComplete = () => {
    setShowSpinner(true)
    gsap.fromTo(
      textRef.current,
      {
        opacity: 1,
        display: 'block',
        maxWidth: '220px',
        visibility: 'visible',
        ease: 'power2',
        duration: 1,
      },
      {
        opacity: 0,
        maxWidth: 0,
        visibility: 'hidden',
        display: 'none',
      }
    )

    setTimeout(() => {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          maxWidth: 0,
          visibility: 'hidden',
          display: 'none',
        },
        {
          opacity: 1,
          display: 'block',
          maxWidth: '220px',
          visibility: 'visible',
          ease: 'power2',
          duration: 1,
        }
      )
      window.location.href = enlaceWhatsApp // Cambia esto a una etiqueta <a>
      setShowSpinner(false)
    }, 1500)
  }

  return (
    <div className={styles.homePage}>
      <div className={styles.containerTitle}>
        <div className={`${styles.typeWritten} ${poppins.className}`}>
          <h1 ref={titleRef1}>Construyendo</h1>
        </div>
        <div className={`${styles.typeWritten} ${poppins.className}`}>
          <h1 ref={titleRef2}>un Futuro Digital.</h1>
        </div>
        <div className={styles.containerText}>
          <p className={poppins.className} ref={subtitleRef}>
            Impulsamos soluciones que destacan, conectan y generan resultados
            reales.
          </p>
        </div>
      </div>
      <div className={styles.containerButton} ref={buttonRef}>
        <button
          className={`${poppins.className} ${styles.buttonFolow}`}
          onClick={handleComplete}
        >
          {showSpinner ? (
            <span className={styles.loader}></span>
          ) : (
            <span className={styles.arrow}>
              <ArrowButton />
            </span>
          )}

          <span className={styles.text} ref={textRef}>
            Solicitar Cotización
          </span>
        </button>
      </div>
      {/* <SliderButton onComplete={handleComplete} /> */}
    </div>
  )
}

export default HomePage
