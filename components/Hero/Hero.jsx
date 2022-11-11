import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import styles from './Hero.module.scss'

import HeroTile from './HeroTile/HeroTile'

const Hero = ({ images }) => {
  const [index, setIndex] = useState(0)
  const [activeTile, setActiveTile] = useState(images[index])
  const [animateHero, setAnimateHero] = useState({})

  const slider = () => {
    if(index <= images.length-1){
      setIndex(index + 1);    
    } 
    
    if(index === images.length-1){
      setIndex(0)     
    } 
  }

  useEffect(() => {
    const image = images.filter((heroImage) => heroImage.imageIndex === index)[0]
    console.log(image)
    setAnimateHero({opacity: 0})
    setActiveTile(image)

    setTimeout(() => {
      setAnimateHero({opacity: 1})
    }, 200);

  }, [index])

  useEffect(() => {
    const slide = setInterval(() => {
      slider()
    }, 6000);

    return () => {
      clearInterval(slide)
    }
  }, [index])

  const handleCountClick = (i) => {
    setIndex(i)
  }

  return (
    <motion.div className= {styles.container} id = 'home' animate = {animateHero}>
      <HeroTile 
        tile = {activeTile}
      />
      <div className = {styles.counter}>
        {images.map((count, i) => (
          <div 
            className = {`${styles.count} ${i === index ? styles.activeIndex : ''}`} 
            onClick = {() => handleCountClick(i)}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Hero