import React, { useState } from 'react'
import "./sidebar.scss"
import Links from "./links/Links"
import Togglebtn from './togglebtn/Togglebtn'
import { motion } from 'framer-motion'
function Sidebar() {
    const [open,setOpen] = useState(false)
    const variants ={
      open:{
        clipPath:"circle(1200px at 50px)",
        transition:{
            type:"spring",
            stiffness:20,
            
        }
      },
      close:{
   clipPath:"circle(30px at 50px 50px) ",
   transition:{
    delay:0.5,
    type:"spring",
    stiffness:"400",
    damping:40
   }
      } 
    }
  return (
    <motion.div className='sidebar' animate={open?"open":"close"}>
      <motion.div className="bg" variants={variants}>
       <Links setOpen={setOpen}/>
      </motion.div>
      <Togglebtn setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
