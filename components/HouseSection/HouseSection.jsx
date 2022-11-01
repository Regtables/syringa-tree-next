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
      </header>

      <main className= {styles.content}>
        <div className= {styles.slogan}>
          <p>{slogan}</p>
        </div>

        <div className= {styles.content_main}>
          <div className= {styles.left}>
            <ImageSelect images = {images}/>
          </div>

          {/* <div className= {styles.partition} /> */}

          <div className= {styles.right}>
            <div className= {styles.features}>

            </div>
            <div className= {styles.description}>
              <p>{description}</p>
            </div>
          </div>
        </div>

        <div className= {styles.price}>
          <h4>From</h4>
        </div>

        <div className= {styles.book}>
          <BookNow />
        </div>
      </main>
    </div>
  )
}

export default HouseSection