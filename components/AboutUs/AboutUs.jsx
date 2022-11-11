import Image from 'next/legacy/image'
import React from 'react'
import { useNextSanityImage } from 'next-sanity-image'

import styles from './AboutUs.module.scss'
import { client } from '../../utils/client'

const AboutUs = ({ aboutUs }) => {
  const { text, image, slogan } = aboutUs
  const imageProps = useNextSanityImage(client, image)
  return (
    <div className= {`${styles.container} section__padding`}>
      <div className = 'heading'>
        <h2>About Us</h2>
      </div>

      <div className= {styles.content}>
        <div className= {styles.slogan}>
          <p>{slogan}</p>
        </div>
        <div className = {styles.text}>
          {text.map((para, i) => (
            <p key = {i}>{para.children[0].text}</p>
          ))}
        </div>
        
        <div className = {styles.image}>
          <Image 
            { ...imageProps }
            layout = 'fill'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs