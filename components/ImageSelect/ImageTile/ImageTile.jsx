import React from 'react'
import Image from 'next/legacy/image'
import { useNextSanityImage } from 'next-sanity-image'

import { client } from '../../../utils/client'
import styles from './ImageTile.module.scss'

const ImageTile = ({ image }) => {
  const imageProps = useNextSanityImage(client, image)
  
  return (
    <div className= {styles.container}>
      <Image 
        { ...imageProps }
        layout = 'fill'
        objectFit= 'cover'
      />
    </div>
  )
}

export default ImageTile