import React from 'react'
import { Grid } from '@mui/material'
import { BiBed, BiBath } from 'react-icons/bi'
import { TbToolsKitchen2 } from 'react-icons/tb'
import { IoWifiSharp } from 'react-icons/io5'
import { AiOutlineCar } from 'react-icons/ai'
import { BsDoorOpen } from 'react-icons/bs'
import { TbCarOff, TbDoorOff } from 'react-icons/tb'

import styles from './Amenities.module.scss'

// const ICONS = [
//   <BiBed />, <BiBath />, <TbToolsKitchen2 />, <IoWifiSharp />, 
// ]

const Amenities = ({ amenities }) => {
  console.log(amenities)
  const { bedrooms, bathrooms, catering, entrace, parking, wifi } = amenities
  return (
    <Grid container className= {styles.container} justifyContent = 'space-between' >
      <Grid item sm = {6} xs = {6}>
        <p className= {styles.feature}><BiBed /> {bedrooms} Bedrooms</p>
      </Grid>
      <Grid item sm = {6} xs = {6}>
        <p className= {styles.feature}><BiBath /> {bathrooms} {bathrooms < 2 ? 'Bathroom' : 'Bathrooms' }</p>
      </Grid>
      <Grid item sm = {6} xs = {6}>
        <p className= {styles.feature}> <TbToolsKitchen2 /> Self Catering</p>
      </Grid>
      <Grid item sm = {6} xs = {6}>
        <p className= {styles.feature}> <IoWifiSharp /> Wifi Included</p>
      </Grid>
      {parking ? (
        <Grid item sm = {6} xs = {6}>
            <p className= {styles.feature}> <AiOutlineCar /> Parking</p>
        </Grid>
      ) : (
        <></>
      )}
      <Grid item sm = {6} xs = {6}>
        {entrace ? (
          <p className= {styles.feature}> <BsDoorOpen /> Seperate Entrance</p>
        ) :(
          <p className= {styles.feature}> <TbDoorOff/> no seperate entrance</p>
        )}
      </Grid>
    </Grid>
  )
}

export default Amenities