'use client'
import styles from './page.module.css'
import { desarrolloWeb } from './Info'
import { useParams, useRouter } from 'next/navigation'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { poppins } from '@/Fonts/fonts'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Detail = () => {
  const titleRef = useRef(null)
  const parrafoRef = useRef(null)
  const imgRef = useRef(null)
  const { id } = useParams()
  const router = useRouter()

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    gsap.set([titleRef.current, parrafoRef.current, imgRef.current], {
      y: 100,
      opacity: 0,
      visibility: 'hidden',
    })
    gsap.to([titleRef.current, parrafoRef.current, imgRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power1',
      stagger: 0.2,
      visibility: 'visible',
    })
  }, [])

  const handleBack = (id) => {
    router.push(`/web_proyectos/${Number(id) - 1}`)
  }

  const handleNext = (id) => {
    router.push(`/web_proyectos/${Number(id) + 1}`)
  }

  const handleImage = (direction) => {
    const containerWidth = document.querySelector(
      `.${styles.images} img`
    ).offsetWidth

    const totalImages = document.querySelectorAll(
      `.${styles.images} img`
    ).length
    let newIndex = currentImageIndex

    if (direction === 'next') {
      if (currentImageIndex === totalImages - 1) {
        if (Number(id) !== 8) {
          handleNext(Number(id))
        } else {
          router.push('/web_proyectos/1')
        }
      } else {
        newIndex = currentImageIndex + 1
      }
    } else if (direction === 'back') {
      if (currentImageIndex === 0) {
        if (Number(id) !== 1) {
          handleBack(Number(id))
        } else {
          router.push('/web_proyectos/8')
        }
      } else {
        newIndex = currentImageIndex - 1
      }
    }

    setCurrentImageIndex(newIndex)

    if (window.innerWidth > 1450) {
      gsap.to('#images', {
        x: -newIndex * containerWidth + 50,
        duration: 0.8,
        ease: 'power1',
      })
    } else {
      gsap.to('#images', {
        x: -newIndex * containerWidth,
        duration: 0.8,
        ease: 'power1',
      })
    }
  }

  const showProject = desarrolloWeb.find((proyecto) => proyecto.id === id)

  return (
    <div className={styles.container}>
      <div className={styles.detailContainer}>
        <div className={styles.infoProyecto}>
          <div className={styles.title} ref={titleRef}>
            <h1 className={poppins.className}>{showProject?.title}</h1>
            <span className={poppins.className}>{showProject?.banner}</span>
            <button className={poppins.className}>Visitar web</button>
          </div>
          <div className={styles.parrafo} ref={parrafoRef}>
            <h5 className={poppins.className}>Sobre el proyecto:</h5>
            <p className={poppins.className}>{showProject?.infoText}</p>
          </div>
        </div>
        <div className={styles.containerImg} ref={imgRef}>
          <div className={styles.buttons}>
            <button onClick={() => handleImage('back')}>
              <IoMdArrowDropleft className={styles.icon} />
            </button>
            <button onClick={() => handleImage('next')}>
              <IoMdArrowDropright className={styles.icon} />
            </button>
          </div>
          <div className={styles.images} id="images">
            <img src={showProject?.img_3 || showProject?.img} alt="" />
            <img src={showProject?.img_2 || showProject?.img} alt="" />
            <img src={showProject?.img} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.controlButtons}>
        <button
          className={poppins.className}
          onClick={() => handleBack(Number(id))}
          disabled={Number(id) === 1}
          style={{
            color: Number(id) === 1 ? 'rgb(177, 177, 177)' : 'white',
            cursor: Number(id) === 1 ? 'default' : 'pointer',
          }}
        >
          <IoArrowBack /> Atras
        </button>
        <button
          className={poppins.className}
          onClick={() => handleNext(Number(id))}
          disabled={Number(id) === 8}
          style={{
            color: Number(id) === 8 ? 'rgb(177, 177, 177)' : 'white',
            cursor: Number(id) === 8 ? 'default' : 'pointer',
          }}
        >
          Siguiente <IoArrowForward />
        </button>
      </div>
    </div>
  )
}

export default Detail
