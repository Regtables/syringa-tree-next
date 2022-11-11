import React from 'react'
import Image from 'next/legacy/image'
import { useNextSanityImage } from 'next-sanity-image'

import styles from './HeroTile.module.scss'
import { client } from '../../../utils/client'
import BookNow from '../../BookNow/BookNow'

const HeroTile = ({ tile }) => {
  const { image, titlePrefix, title, testimonial, description } = tile
  const imageProps = useNextSanityImage(client, image)

  return (
    <div className= {styles.container}>
      <div className= {styles.overlay} />
      <div className= {styles.image}>
        <Image 
          { ...imageProps }
          layout = 'fill'
          alt = {title}
          objectFit = 'cover'
          priority
        />
      </div>
      <div className= {styles.text}>
        <div className = {styles.testimonial}>
        {/* <h5>{`'${testimonial.length > 0 && testimonial}'`}</h5> */}
        </div>
        <div className = {styles.title}>
          <h3>{titlePrefix}</h3>
          <h1>{title}</h1>
        </div>
        <div className= {styles.description}>
          <h4>{description}</h4>
        </div>
        {/* <div className= {styles.book}>
          <BookNow />
        </div> */}
      </div>
    </div>
  )
}

export default HeroTile