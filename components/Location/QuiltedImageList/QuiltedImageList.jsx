import React from 'react'
import { Grid } from '@mui/material'

import styles from './QuiltedImageList.module.scss'
import ImageTile from '../../ImageSelect/ImageTile/ImageTile'

const QuiltedImageList = ({ images }) => {
  const { image1, image2, image3, image4, image5, image6 } = images
  return (
    <div className= {styles.container}>
      <Grid container spacing = {1} sx = {{height: '100%'}}>
        <Grid item sm = {12} >
          <ImageTile image={image1} />
        </Grid>
        <Grid item sm = {6}>
          <ImageTile image = {image2} />
        </Grid>
        <Grid item sm = {6}>
          <Grid container sm = {12} sx = {{height: '100%'}}>
      
              <Grid item sm = {12}>
                <ImageTile image = {image3} />
              </Grid>
              <Grid item sm = {12}>
                <ImageTile image = {image4} />
              </Grid>
              {/* <Grid item sm = {6}>
                <ImageTile image = {image5} />
              </Grid>
              <Grid item sm = {6}>
                <ImageTile image = {image6} />
              </Grid> */}
        
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default QuiltedImageList