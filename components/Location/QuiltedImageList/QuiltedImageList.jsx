import React from 'react'
import { Grid } from '@mui/material'

import styles from './QuiltedImageList.module.scss'
import ImageTile from '../../ImageSelect/ImageTile/ImageTile'

const QuiltedImageList = ({ images }) => {
  const { image1, image2, image3, image4, image5, image6 } = images
  return (
    <div className= {styles.container}>
      <div className= {styles.wrapper}>
        <div className = {styles.top} >
          <ImageTile image={image1} />
        </div>
        <div className = {styles.bottom}>
          <div className = {styles.bottom_left}>
            <ImageTile image = {image2} />
          </div>
          <div className = {styles.bottom_right}>
            <div className = {styles.bottom_right_top}>
              <ImageTile image= {image5} />
            </div>
            <div className = {styles.bottom_right_bottom}>
              <ImageTile image = {image4} imagePos = 'center 28%' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuiltedImageList