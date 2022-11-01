import React from 'react'
import Image from 'next/legacy/image'
import { Backdrop } from '@mui/material'
import { useNextSanityImage } from 'next-sanity-image'

import styles from './ImagePreview.module.scss'
import { client } from '../../utils/client'

const ImagePreview = ({ togglePreview, setTogglePreview, activeImage}) => {
  const imageProps = useNextSanityImage(client, activeImage)

  return (
    <Backdrop
      open = {togglePreview}
      onClick = {() => setTogglePreview(false)}
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <div className = {styles.container}>
        <div className= {styles.image}>
          <Image 
            { ...imageProps }
            layout = 'fill'
          />
        </div>
      </div>
    </Backdrop>
  )
}

export default ImagePreview