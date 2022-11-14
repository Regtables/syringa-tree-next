import React, { useState, useEffect} from 'react'
import Image from 'next/legacy/image'
import { motion } from 'framer-motion'
import { Backdrop } from '@mui/material'
import { useNextSanityImage } from 'next-sanity-image'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle, IoIosCloseCircleOutline } from 'react-icons/io'

import styles from './ImagePreview.module.scss'
import { client } from '../../utils/client'

const ImagePreview = ({ togglePreview, setTogglePreview, activeImage, handlePrev, handleNext }) => {
  const imageProps = useNextSanityImage(client, activeImage)
  const [animateActiveImage, setAnimateActiveImage] = useState({})

  // useEffect(() => {
  //   setAnimateActiveImage({opacity: 0})

  //   setTimeout(() => {
  //     setAnimateActiveImage({opacity: 1})
  //   }, 300);
  // }, [activeImage])

  const onNext = () => {
    setAnimateActiveImage({opacity: 0})

    handleNext()

    setTimeout(() => {
      setAnimateActiveImage({opacity: 1})
    }, 300);
  }

  const onPrev = () => {
    setAnimateActiveImage({opacity: 0})

    handlePrev()

    setTimeout(() => {
      setAnimateActiveImage({opacity: 1})
    }, 300);
  }

  return (
    <Backdrop
      open = {togglePreview}
      // onClick = {() => setTogglePreview(false)}
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <div className = {styles.container}>
        <div className= {styles.image}>
          <motion.div 
            className= {styles.image_wrapper}
            animate = {animateActiveImage}
            transition = {{ duration: 0.3}}
          >
            <Image 
              { ...imageProps }
              layout = 'fill'
              objectFit='cover'
              objectPosition={'center center'}
            />
          </motion.div>
          <div className = {styles.prev} onClick = {onPrev}>
            <IoIosArrowDropleftCircle />
          </div>
          <div className = {styles.next} onClick = {onNext}>
            <IoIosArrowDroprightCircle />
          </div>
        </div>
        <div className = {styles.close} onClick = {() => setTogglePreview(false)}>
          <p><IoIosCloseCircleOutline /> close</p>
        </div>
      </div>
    </Backdrop>
  )
}

export default ImagePreview