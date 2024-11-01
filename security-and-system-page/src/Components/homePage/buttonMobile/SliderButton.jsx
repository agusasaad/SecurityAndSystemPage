import { useState, useRef } from 'react'
import styles from './SliderButton.module.css'
import { poppins } from '@/Fonts/fonts'
import ArrowButton from '@/svg/ArrowButton'
import gsap from 'gsap'

const SliderButton = ({ onComplete }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false) // Flag para controlar la animación
  const handleRef = useRef(null)
  const containerRef = useRef(null)
  const textRef = useRef(null)

  const startDrag = (e) => {
    if (isAnimating) return // Evita iniciar un nuevo arrastre si se está animando
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

    // Cambiar la opacidad del texto
    const opacity = 1 - (offsetX / (containerRect.width - handleWidth)) * 1.5
    textRef.current.style.opacity = Math.max(opacity, 0)

    // Completar acción cuando el slider esté cerca del final
    if (offsetX >= containerRect.width - handleWidth - 5) {
      onComplete() // Llama a la función pasada como prop
      endDrag() // Termina el arrastre automáticamente
    }
  }

  const endDrag = () => {
    if (!isDragging) return // Evita continuar si no se está arrastrando

    setIsDragging(false) // Resetea el estado de arrastre
    setIsAnimating(true) // Inicia la animación

    // Animar el regreso del controlador con GSAP
    gsap.to(handleRef.current, {
      transform: 'translateX(0)', // Regresa a la posición inicial
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        handleRef.current.style.transform = 'translateX(0)'
        setIsAnimating(false) // Termina la animación
      },
    })

    gsap.to(textRef.current, {
      opacity: 1, // Regresa a la opacidad inicial
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
        <ArrowButton />
      </div>
    </div>
  )
}

export default SliderButton
