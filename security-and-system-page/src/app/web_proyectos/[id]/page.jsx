'use client'
import styles from './page.module.css'
import { desarrolloWeb } from './Info'
import { useParams, useRouter } from 'next/navigation'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { poppins } from '@/Fonts/fonts'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Modal from './Modal'

const Detail = () => {
  const titleRef = useRef(null)
  const parrafoRef = useRef(null)
  const imgRef = useRef(null)
  const buttonRef = useRef(null)
  const { id } = useParams()
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    gsap.fromTo(
      [titleRef.current, parrafoRef.current, imgRef.current, buttonRef.current],
      {
        y: 100,
        opacity: 0,
        visibility: 'hidden',
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        visibility: 'visible',
        ease: 'power1',
        stagger: 0.1,
        delay: 0.5,
      }
    )
  }, [])

  const handleBack = (id) => {
    router.push(`/web_proyectos/${Number(id) - 1}`)
  }

  const handleNext = (id) => {
    router.push(`/web_proyectos/${Number(id) + 1}`)
  }

  const showProject = desarrolloWeb.find((proyecto) => proyecto.id === id)

  const carouselSettings = {
    autoPlay: true,
    showArrows: true,
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    showIndicators: true,
    interval: 4000,
  }

  return (
    <div className={styles.container}>
      <div className={styles.detailContainer}>
        <div className={styles.infoProyecto}>
          <div className={styles.title} ref={titleRef}>
            <h1 className={poppins.className}>{showProject?.title}</h1>
            <span className={poppins.className}>{showProject?.banner}</span>
            <button
              className={poppins.className}
              onClick={() => setShowModal(true)}
            >
              Mas Info
            </button>
          </div>
          <div className={styles.parrafo} ref={parrafoRef}>
            <h5 className={poppins.className}>SOBRE EL PROYECTO</h5>
            <p className={poppins.className}>{showProject?.infoText}</p>
          </div>
        </div>
        <div className={styles.containerImg} ref={imgRef}>
          <Carousel {...carouselSettings} className={styles.carousel}>
            {showProject?.images.map((image, index) => (
              <img key={index} src={image} alt={image}></img>
            ))}
          </Carousel>
        </div>
      </div>
      <div className={styles.controlButtons} ref={buttonRef}>
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
      <Modal
        showProject={showProject.infoText}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
}

export default Detail
