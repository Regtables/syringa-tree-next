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
      {/* <div className = {styles.activeImage}>
        <div className= {styles.activeImage__image}>
          <ImageTile image={activeImage}/>
        </div>
        <div className = {styles.prev}>

        </div>
        <div className= {styles.next}>

        </div>
      </div> */}

      <div className = {styles.images}>
        <Grid 
          container 
          className = {styles.images__grid}
          spacing = {0.5}
        >
          {images.map((image, i) => (
            <Grid item className= {styles.images__item} sm = {1.5} key = {i}>
              <ImageTile image = {image}/>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default ImageSelect