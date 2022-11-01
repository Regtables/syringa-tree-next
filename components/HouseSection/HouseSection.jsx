import React from 'react'
import BookNow from '../BookNow/BookNow'
import ImageSelect from '../ImageSelect/ImageSelect'

import styles from './HouseSection.module.scss'

const HouseSection = ({ section }) => {
  const { heading, slogan, images, description } = section
  return (
    <div className= {`${styles.container} section__padding`}>
      <header className= {styles.header}>
        <h2>{heading}</h2>
        <h4>{slogan}</h4>
      </header>
      <main className= {styles.content}>
        <div className= {styles.imageSelect}>
          <ImageSelect
            images = {images}
          />
        </div>
        <div className = {styles.description}>
          <p>{description}</p>
        </div>
        <div className = {styles.book}>
          <BookNow />
        </div>
      </main>
    </div>
  )
}

export default HouseSection