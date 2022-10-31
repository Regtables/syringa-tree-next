import React from 'react'
import { Button } from '@mui/material'
import { GiPineTree } from 'react-icons/gi'
import styles from './Navbar.module.scss'
import BookNow from '../BookNow/BookNow'

const LINKS = [
  {
    link: 'home'
  },
  {
    link: 'main house'
  },
  {
    link: 'sea view'
  },
  {
    link: 'location'
  },
  {
    link: 'contact'
  }
]

const Navbar = () => {
  return (
    <div className= {styles.container}>
      <div className= {styles.logo}>
        <h3>Syringa tree </h3>
        <GiPineTree />
      </div>
      <div className= {styles.links}>
        {LINKS.map((link, i) => (
          <div className= {styles.link}>
            <p>{link.link}</p>
          </div>
        ))}
        <div className= {styles.book}>
          <BookNow />
        </div>
      </div>
    </div>
  )
}

export default Navbar