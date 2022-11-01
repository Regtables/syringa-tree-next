import React, { useState } from 'react'
import Image from 'next/legacy/image'
import { Grid } from '@mui/material'

import styles from './ImageSelect.module.scss'

import ImageTile from './ImageTile/ImageTile'

const ImageSelect = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0])
  const [index, setIndex] = useState(0)

  return (
    <div className= {styles.container}>
      <div className = {styles.activeImage}>
        <div className= {styles.activeImage__image}>
          <ImageTile image={activeImage}/>
        </div>
        <div className = {styles.prev}>

        </div>
        <div className= {styles.next}>

        </div>
      </div>

      <div className = {styles.images}>
        {images.map((image, i) => (
          <div className= {styles.image} onClick = {() => setActiveImage(image)}>
            <ImageTile image = {image}/>      
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSelect