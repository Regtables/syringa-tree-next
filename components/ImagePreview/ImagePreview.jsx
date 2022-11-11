import React from 'react'
import Image from 'next/legacy/image'
import { Backdrop } from '@mui/material'
import { useNextSanityImage } from 'next-sanity-image'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle, IoIosCloseCircleOutline } from 'react-icons/io'

import styles from './ImagePreview.module.scss'
import { client } from '../../utils/client'

const ImagePreview = ({ togglePreview, setTogglePreview, activeImage, handlePrev, handleNext }) => {
  const imageProps = useNextSanityImage(client, activeImage)

  return (
    <Backdrop
      open = {togglePreview}
      // onClick = {() => setTogglePreview(false)}
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <div className = {styles.container}>
        <div className= {styles.image}>
          <Image 
            { ...imageProps }
            layout = 'fill'
            objectFit='cover'
            objectPosition={'center center'}
          />
          <div className = {styles.prev} onClick = {handlePrev}>
            <IoIosArrowDropleftCircle />
          </div>
          <div className = {styles.next} onClick = {handleNext}>
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