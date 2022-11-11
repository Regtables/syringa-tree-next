import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import styles from './Hero.module.scss'

import HeroTile from './HeroTile/HeroTile'

// const TILE = {
//   image: '/lounge-view.jpg'
// }

const Hero = ({ images }) => {
  const [index, setIndex] = useState(0)
  const [activeTile, setActiveTile] = useState(images[index])
  const [animateHero, setAnimateHero] = useState({})

  // useEffect(() => {
  //   // console.log(index)
  //   // setAnimateHero({opacity: 0})

  //   setActiveTile(images[index])

  //   // setTimeout(() => {
  //   //   setAnimateHero({opacity: 1})
  //   // }, 300);
  //   return () => {
  //     clearInterval(slide)
  //   }
  // }, [index])

  // const slide = setInterval(() => {
  //   if(index < images.length-1){
  //     setIndex(index + 1);
  //     setActiveTile(index)
    
  //     return
  //   } 
    
  //   else if(index === images.length-1){
  //     setIndex(0)
      
  //     setActiveTile(images[0])
  //     return
     
  //   } 
  // }, 6000);


  return (
    <motion.div className= {styles.container} id = 'home' animate = {animateHero}>
      <HeroTile 
        tile = {activeTile}
      />
    </motion.div>
  )
}

export default Hero