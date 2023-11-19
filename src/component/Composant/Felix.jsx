import React from 'react'
import { motion } from 'framer-motion'
function Felix() {
  return (
    <div className='aboutfelix'>
      <motion.h2 className='felix'
      initial={{opacity:0,x:-200,scale:0.3}}
      transition={{duration:3}}
      whileInView={{opacity:1,scale:1,x:0}}
     >Hi! My name is <span>Yahoulbo Felix</span>, i'm a<br />
      Frontend Developer.</motion.h2>
      <motion.img src="./devsoftware.jpg" alt="personnal picture" 
      initial={{opacity:0,scale:0}}
      transition={{duration:3}}whileInView={{opacity:1,scale:1}}

      />
    </div>
  )
}

export default Felix
