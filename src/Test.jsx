import React from 'react'
import { motion } from 'framer-motion'

function Test() {
  return (
    <div className='course'>
      <motion.div className='box' 
      initial={{opacity:0.5,scale:0.5,x:-300}}
     transition={{duration:3}}
    //   whileTap={{opacity:1,scale:2}}
    whileInView={{opacity:1,scale:1,x:0}}
      drag
      ></motion.div>
    </div>
  ) 
}

export default Test
