import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

import styles from './Contact.module.scss'
import ImageTile from '../ImageSelect/ImageTile/ImageTile'
import BookNow from '../BookNow/BookNow'

const Contact = ({ contact }) => {
  console.log(contact)
  const { image, phoneNumber, email, facebook } = contact

  return (
    <div className = {`${styles.container} section__padding`}>
      <div className = 'heading'>
        <h2>Contact Us</h2>
      </div>
      <div className = {styles.content}>
        <div className= {styles.tagline}>
          <p>We would love to hear from you</p>
        </div>
        <div className= {styles.content_main}>
          <div className= {styles.left}>
            {/* <div className= {styles.title}>
              <p>Contact information</p>
            </div> */}
            <div className= {styles.slogan}>
              <h3>Need anything?</h3>
            </div>
            <div className= {styles.details}>
              <div className= {styles.item}>
                <p><BsPhone /> {phoneNumber}</p>
              </div>
              <div className= {styles.item}>
                <p><AiOutlineMail /> {email}</p>
              </div>
              <div className= {styles.item}>
                <p><FaFacebookF /> {facebook}</p>
              </div>
            </div>
            {/* <div className = {styles.book}>
              <BookNow />
            </div> */}
          </div>
          <div className= {styles.right}>
            <div className= {styles.title}>
              <p>Your host</p>
            </div>
            <div clasName = {styles.image} style = {{height: '90%'}}>
              <ImageTile image = {image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact