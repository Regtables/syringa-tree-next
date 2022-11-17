import React, { useState } from 'react'
import { useNextSanityImage } from 'next-sanity-image'
import { Backdrop } from '@mui/material'

import styles from './QuiltedImageList.module.scss'
import { client } from '../../../utils/client'

import ImageTile from '../../ImageSelect/ImageTile/ImageTile'
import Image from 'next/legacy/image'

const ImageZoom = ({ activeImage, toggleZoom, setToggleZoom }) => {
  const imageProps = useNextSanityImage(client, activeImage)
  return (
    <Backdrop
      open = {toggleZoom}
      onClick = {() => setToggleZoom(false)}
      sx={{ color: '#fff',  zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <div className= {styles.zoom_image}>
        <Image 
          { ...imageProps }
          layout = 'fill'  
          objectFit= 'cover'
        />
      </div>
    </Backdrop>
  )
}

const QuiltedImageList = ({ images }) => {
  const { image1, image2, image3, image4, image5, image6 } = images
  const [activeImage, setActiveImage] = useState()
  const [toggleZoom, setToggleZoom] = useState()

  const handleClick = (image) => {
    setActiveImage(image)
    setToggleZoom(true)
  }

  return (
    <div className= {styles.container}>
      <div className= {styles.wrapper}>
        <div className = {styles.top} onClick = {() => handleClick(image1)} >
          <ImageTile image={image1} imagePos = 'center 35%' />
        </div>
        <div className = {styles.bottom}>
          <div className = {styles.bottom_left} onClick = {() => handleClick(image2)}>
            <ImageTile image = {image2} />
          </div>
          <div className = {styles.bottom_right}>
            <div className = {styles.bottom_right_top} onClick = {() => handleClick(image5)}>
              <ImageTile image= {image5} />
            </div>
            <div className = {styles.bottom_right_bottom} onClick = {() => handleClick(image4)}>
              <ImageTile image = {image4} imagePos = 'center 28%' />
            </div>
          </div>
        </div>
      </div>
      {toggleZoom && (
        <ImageZoom 
          activeImage = {activeImage} 
          toggleZoom = {toggleZoom}
          setToggleZoom = {setToggleZoom}  
        />
      )}
    </div>
  )
}

export default QuiltedImageList