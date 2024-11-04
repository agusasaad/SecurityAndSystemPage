'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation' // Importa useRouter
import styles from './SliderButton.module.css'
import { poppins } from '@/Fonts/fonts'
import ArrowButton from '@/svg/ArrowButton'
import gsap from 'gsap'

const SliderButton = ({ enlaceWhatsApp, showSpinner, setShowSpinner }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [shouldRedirect, setShouldRedirect] = useState(false) // Nuevo estado para la redirección
  const handleRef = useRef(null)
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const router = useRouter() // Inicializa useRouter

  // Redirección controlada con useRouter
  useEffect(() => {
    if (shouldRedirect) {
      router.push(enlaceWhatsApp)
      setShouldRedirect(false)
    }
  }, [shouldRedirect, router, enlaceWhatsApp])

  const startDrag = (e) => {
    if (isAnimating) return
    setIsDragging(true)
  }

  const onDrag = (e) => {
    if (!isDragging) return

    const container = containerRef.current
    const handle = handleRef.current
    const containerRect = container.getBoundingClientRect()
    const handleWidth = handle.offsetWidth

    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX
    const offsetX = Math.min(
      Math.max(x - containerRect.left - handleWidth / 2, 0),
      containerRect.width - handleWidth
    )

    handle.style.transform = `translateX(${offsetX}px)`

    const opacity = 1 - (offsetX / (containerRect.width - handleWidth)) * 1.5
    textRef.current.style.opacity = Math.max(opacity, 0)

    if (offsetX >= containerRect.width - handleWidth - 5) {
      endDrag()
      setShowSpinner(true)

      gsap.fromTo(
        textRef.current,
        {
          opacity: 1,
          maxWidth: '220px',
          visibility: 'visible',
          ease: 'power2',
          duration: 1,
        },
        { opacity: 0, maxWidth: 0, visibility: 'hidden', display: 'none' }
      )

      setTimeout(() => {
        setShowSpinner(false)
        setShouldRedirect(true) // Activa la redirección después del spinner
      }, 1500)
    }
  }

  const endDrag = () => {
    if (!isDragging) return

    setIsDragging(false)
    setIsAnimating(true)

    gsap.to(handleRef.current, {
      transform: 'translateX(0)',
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        handleRef.current.style.transform = 'translateX(0)'
        setIsAnimating(false)
      },
    })

    gsap.to(textRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power1',
    })
  }

  return (
    <div
      id='slider-button'
      className={styles.sliderContainer}
      ref={containerRef}
      onMouseMove={onDrag}
      onTouchMove={onDrag}
      onMouseUp={endDrag}
      onTouchEnd={endDrag}
    >
      <div
        className={`${poppins.className} ${styles.sliderText}`}
        ref={textRef}
      >
        Solicitar Cotización
      </div>
      <div
        className={styles.sliderHandle}
        ref={handleRef}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        {showSpinner ? (
          <span className={styles.loader}></span>
        ) : (
          <span className={styles.arrow}>
            <ArrowButton />
          </span>
        )}
      </div>
    </div>
  )
}

export default SliderButton
