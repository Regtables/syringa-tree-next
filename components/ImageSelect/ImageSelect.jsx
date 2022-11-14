import React, { useState , useEffect} from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { motion } from 'framer-motion'

import styles from './ImageSelect.module.scss'

import ImageTile from './ImageTile/ImageTile'
import ImagePreview from '../ImagePreview/ImagePreview'

const ImageSelect = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0])
  const [togglePreview, setTogglePreview] = useState(false)
  const [index, setIndex] = useState(0)
  const [animateActiveImage, setAnimateActiveImage] = useState({})

  useEffect(() => {
    setAnimateActiveImage({opacity: 0})

    setTimeout(() => {
      setActiveImage(images[index])
    }, 300);

    setTimeout(() => {
      setAnimateActiveImage({opacity: 1})
    }, 300);
  }, [index])


  const handlePrev = () => {
    if(index !== 0){
      setIndex((prev) => prev-1);
    } else {
      setIndex(images.length-1)
    }
  }

  const handleNext = () => {
    if(index !== images.length-1){
      setIndex((prev) => prev +1)
    } else {
      setIndex(0)
    }
  }

  const handleImageSelect = (image, i) => {
    // setActiveImage(image)
    setIndex(i)
  }

  return (
    <>
      <div className= {styles.container}>
        <div className = {styles.activeImage}>
          <motion.div 
            className = {styles.activeImage__image}
            onClick = {() => setTogglePreview(true)}
            animate = {animateActiveImage}
            transition = {{duration: 0.4}}
          >
            <ImageTile image={activeImage}/>
          </motion.div>
          <div className = {styles.prev} onClick = {handlePrev}>
            <IoIosArrowDropleftCircle />
          </div>
          <div className = {styles.next} onClick = {handleNext}>
            <IoIosArrowDroprightCircle />
          </div>
        </div>

        <div className = {styles.images}>
          {images.map((image, i) => (
            <div className = {styles.image} onClick = {() => handleImageSelect(image, i)} key = {i}>
              <ImageTile image = {image}/>      
            </div>
          ))}
        </div>
      </div>
      <ImagePreview 
        togglePreview={togglePreview} 
        setTogglePreview = {setTogglePreview} 
        activeImage = {activeImage}
        handleNext = {handleNext}
        handlePrev = {handlePrev}   
      />
    </>
  )
}

export default ImageSelect