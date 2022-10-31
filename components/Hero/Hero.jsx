import React, { useState } from 'react'

import styles from './Hero.module.scss'

import HeroTile from './HeroTile/HeroTile'

// const TILE = {
//   image: '/lounge-view.jpg'
// }

const Hero = ({ images }) => {
  const [activeTile, setActiveTile] = useState(images[0])
  return (
    <div className= {styles.container} id = 'home'>
      <HeroTile 
        tile = {activeTile}
      />
    </div>
  )
}

export default Hero