import React, { useEffect, useState } from 'react'
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
  const [prevScrollPosition, setPrevScrollPosition] = useState()


  useEffect(() => {
    const navbar =  document.getElementById('navbar');
    if(window.scrollY === 0){
      // navbar.style.opacity = '1'
      navbar.style.backgroundColor = 'transparent'
      
    }

    const handleScroll = () => {
      setPrevScrollPosition(window.scrollY)
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll)

    setPrevScrollPosition(window.scrollY)

    window.onscroll = function(){
      const curScrollPos = window.scrollY

      if(prevScrollPosition < curScrollPos){
        // navbar.style.backgroundColor = 'transparent'
        navbar.style.opacity = '0'
      } else {
        navbar.style.backgroundColor = 'rgb(180, 152, 115, 1)'
        navbar.style.opacity = '1'
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll )
    }

  })


  return (
    <div className= {styles.container} id = 'navbar'>
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