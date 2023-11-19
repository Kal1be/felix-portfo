import "./skills.scss"
import {motion } from "framer-motion"
function MySkills() {
  return (
    <div className="all">
      <h3>My Skills</h3>

      <div className='skill'>
        <motion.div
         initial={{opacity:0,x:-100,scale:0}}
         transition={{duration:1}}
         whileInView={{opacity:1,scale:1,x:0}}
        >
            <h4>FrontEnd</h4>
            <motion.ul 
           
            >
                <li>HTML</li>
                <li>CSS</li>
                <li>Saas</li>
                <li>JavaScript</li>
                <li>Typescript</li>
                <li>React(Nextjs)</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
                <li>Redux</li>
            </motion.ul>
        </motion.div>
        <motion.div
        
        initial={{opacity:0,x:-100,scale:0}}
        transition={{duration:2}}
        whileInView={{opacity:1,scale:1,x:0}}>
            <h4>BackEnd</h4>
            <motion.ul
           
            >
                <li>Nodejs</li>
                <li>Expressjs</li>
                <li>Mongodb</li>
                <li>MYSQL</li>
            </motion.ul>
        </motion.div>
        <motion.div
        
        initial={{opacity:0,x:-100,scale:0}}
        transition={{duration:3}}
        whileInView={{opacity:1,scale:1,x:0}}>
            <h4>Tools</h4>
            <motion.ul
            
            >
                <li>Docker</li>
                <li>Kubernates</li>
                <li>Git</li>
                <li>Github</li>
                <li>Firebase</li>
            </motion.ul>
        </motion.div>
      </div>
    </div>
  )
}

export default MySkills
