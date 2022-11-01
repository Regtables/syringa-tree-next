import React from 'react'
import { Grid } from '@mui/material'
import { BiBed, BiBath } from 'react-icons/bi'
import { TbToolsKitchen2 } from 'react-icons/tb'
import { IoWifiSharp } from 'react-icons/io5'
import { AiOutlineCar } from 'react-icons/ai'
import { BsDoorOpen } from 'react-icons/bs'

import styles from './Amenities.module.scss'

const ICONS = [
  <BiBed />, <BiBath />, <TbToolsKitchen2 />, <IoWifiSharp />, 
]

const Amenities = ({ amenities }) => {

  return (
    <Grid container className= {styles.container} justifyContent = 'center' >
      <Grid item sm = {6}>
        <p className= {styles.feature}><BiBed /> 2 bedrooms</p>
      </Grid>
      <Grid item sm = {6}>
      <p className= {styles.feature}><BiBath /> 1 bathroom</p>
      </Grid>
      <Grid item sm = {6}>
       <p className= {styles.feature}> <TbToolsKitchen2 /> self catering</p>
      </Grid>
      <Grid item sm = {6}>
        <p className= {styles.feature}> <IoWifiSharp /> wifi included</p>
      </Grid>
      <Grid item sm = {6}>
        <p className= {styles.feature}> <AiOutlineCar /> parking</p>
      </Grid>
      <Grid item sm = {6}>
      <p className= {styles.feature}> <BsDoorOpen /> seperate entrance</p>
      </Grid>
    </Grid>
  )
}

export default Amenities