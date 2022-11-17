import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaFacebookF, FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import styles from './Contact.module.scss'
import ImageTile from '../ImageSelect/ImageTile/ImageTile'
import BookNow from '../BookNow/BookNow'

const Contact = ({ contact }) => {
  console.log(contact)
  const { image, phoneNumber, email, facebook, host } = contact

  return (
    <div className = {`${styles.container} section__padding`}>
      <div className = 'heading'>
        <h2>Contact Us</h2>
      </div>
      <div className = {styles.content}>
        {/* <div className= {styles.tagline}>
          <p>We would love to hear from you</p>
        </div> */}
        <div className= {styles.content_main}>
          <div className= {styles.left}>
            {/* <div className= {styles.title}>
              <p>Contact information</p>
            </div> */}
            <div className= {styles.slogan}>
              <h2>Syringa Tree Guest House</h2>
              <h3>22 Wessels Road <br /> Green Point <br /> Cape Town</h3>
            </div>
            <div className= {styles.details}>
              <div className = {styles.item}>
                <p><FaUser /> {host}</p>
              </div>
              <div className= {styles.item}>
                <p><BsTelephoneFill /> {phoneNumber}</p>
              </div>
              <div className= {styles.item}>
                <p><MdEmail/> {email}</p>
              </div>
              <div className= {styles.item}>
                <a href = 'https://www.facebook.com/profile.php?id=100087755416304' target = '_blank' rel="noreferrer">
                  <p><FaFacebookF /> {facebook}</p>
                </a>
              </div>
            </div>
            {/* <div className = {styles.book}>
              <BookNow />
            </div> */}
          </div>
          <div className= {styles.right}>
            {/* <div className= {styles.title}>
              <p>Your host</p>
            </div> */}
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