import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { AiOutlineHome, AiOutlinePhone, AiOutlineUser, AiOutlineCloseCircle } from 'react-icons/ai'
import { BiHomeCircle } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'
import { FiMenu} from 'react-icons/fi'
import { motion } from 'framer-motion'
import { IoIosCloseCircleOutline } from 'react-icons/io5'
import { SlClose } from 'react-icons/sl'

import styles from './Navbar.module.scss'

import BookNow from '../BookNow/BookNow'



const LINKS = [
  // {
  //   link: 'home'
  // },
  {
    link: 'main house',
    icon: <AiOutlineHome />,
    slug: 'main-house'
  },
  {
    link: 'sea view',
    icon: <BiHomeCircle />,
    slug: 'sea-view'
  },
  {
    link: 'location',
    icon: <GoLocation />,
    slug: 'location'
  },
  {
    link: 'contact us',
    icon: <AiOutlinePhone />,
    slug: 'contact-us'

  },
  {
    link: 'about us',
    icon: <AiOutlineUser />,
    slug: 'about-us'
  }
]

const Navbar = () => {
  const [prevScrollPosition, setPrevScrollPosition] = useState()
  const [toggleMenu, setToggleMenu] = useState()
  const [animateMenu, setAnimateMenu] = useState()


  useEffect(() => {
    const navbar =  document.getElementById('navbar');
    if(window.scrollY === 0){
      // navbar.style.opacity = '1'
      navbar.style.backgroundColor = 'transparent'
      document.getElementById('menu-icon').style.color = 'var(--color-primary)'
      
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
        // navbar.style.backgroundColor = 'rgb(180, 152, 115, 1)'
        // navbar.style.backgroundColor = 'rgb(188, 174, 197)'
        navbar.style.backgroundColor = 'var(--color-primary)'
        navbar.style.opacity = '1'
        document.getElementById('menu-icon').style.color = 'white'
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll )
    }
  })

  useEffect(() => {
    if(toggleMenu){
      setAnimateMenu({x: ['400px', '0px'], display: 'block'})
    }
  }, [toggleMenu])

  const handleMenuToggle = () => {
    setToggleMenu(true)
  }

  const handleMenuClose = () => {
    setAnimateMenu({x: ['0px', '400px']})

    setTimeout(() => {
      setToggleMenu(false)
    }, 500);
  }


  return (
    <div className= {styles.container} id = 'navbar'>
      <div className= {styles.logo}>
        <a href = '#home'><h3>Syringa tree Guest House</h3></a>
        {/* <GiPineTree /> */}
      </div>
      <div className= {styles.links}>
        {LINKS.map((link, i) => (
          <div className= {styles.link} key = {i}>
            <a href = {`#${link.slug}`}><p>{link.link}</p></a>
          </div>
        ))}
        <div className= {styles.book}>
          <BookNow />
        </div>
      </div>

      <div className= {styles.menu}>
        <div className= {styles.icon} onClick = {handleMenuToggle}>
          <FiMenu id= 'menu-icon'/>
        </div>
        {toggleMenu && (
          <>
            <motion.div 
              className= {styles.menu_container} 
              animate = {animateMenu}
              transition = {{duration: 0.3}}  
              initial = {{x: '500px'}}
            >
              <div className= {styles.mobile_heading}>
                <h3>Syringa Tree Guest House</h3>
                <div className= {styles.mobile_close} onClick = {handleMenuClose}>
                  <p><SlClose /></p>
                </div>
              </div>
              <div className = {styles.mobile_links}>
                {LINKS.map((link, i) => (
                  <div className = {styles.mobile_link} onClick = {handleMenuClose} key = {i}>
                    <a href = {`#${link.slug}`} >
                      <h5>{link.icon}{link.link}</h5>
                    </a>
                  </div>  
                ))}
              </div>
              <div className= {styles.mobile_book}>
                {/* <BookNow /> */}
                <Button 
                  variant = 'contained' 
                  sx = {{
                    backgroundColor: '#f6f6f6',
                    color: 'var(--color-primary)',
                    boxShadow: 'none',
                    fontSize: '16px',
                    fontFamily: 'var(--font-family)',
                    padding: '0.7rem 4rem',
                    borderRadius: '30px',
                    border: '2px solid #f6f6f6',

                    "&:hover": {
                      backgroundColor: 'var(--color-primary)',
                      color: '#f6f6f6',
                      boxShadow: 'none'
                    }
                  }}
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar