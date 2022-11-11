import React from 'react'
import { motion } from 'framer-motion'

const MotionWrapper = (props) => {
  return (
    <motion.div
      whileInView={{opacity: [0,1], y: [50, 0]}}
      initial = {{opacity: 0, y: 50}}
      transition = {{duration: 1}}
      // viewport = {{once: true}}
    >
      {props.children}
    </motion.div>
  )
}

export default MotionWrapper