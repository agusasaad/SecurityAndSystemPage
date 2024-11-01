import { useState, useRef } from 'react'
import styles from './SliderButton.module.css'
import { poppins } from '@/Fonts/fonts'
import ArrowButton from '@/svg/ArrowButton'

const SliderButton = ({ onComplete }) => {
  const [isDragging, setIsDragging] = useState(false)
  const handleRef = useRef(null)
  const containerRef = useRef(null)

  const startDrag = (e) => {
    setIsDragging(true)
    e.preventDefault()
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

    // Completar acción cuando el slider esté cerca del final
    if (offsetX >= containerRect.width - handleWidth - 5) {
      onComplete() // Llama a la función pasada como prop
      setIsDragging(false) // Deja de arrastrar
    }
  }

  const endDrag = () => {
    setIsDragging(false)
    handleRef.current.style.transform = 'translateX(0)' // Resetea la posición al inicio
  }

  return (
    <div
      className={styles.sliderContainer}
      ref={containerRef}
      onMouseMove={onDrag}
      onTouchMove={onDrag}
      onMouseUp={endDrag}
      onTouchEnd={endDrag}
    >
      <div className={`${poppins.className} ${styles.sliderText}`}>
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
