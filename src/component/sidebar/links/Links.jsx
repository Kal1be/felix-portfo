import React from 'react'

function Links({setOpen}) {
  const links = [
    "Homepage",
    "Services",
    "Project",
    "PortFolio",
    "Contact",
    "About" 

  ]
  return (
    <div className='links'>
    {links.map(item=>{
      return(
          <a href={`#${item}`} onClick={()=>setOpen(prev=>!prev)} key={item}>{item}</a>
      )
    })}
    </div>
  )
}

export default Links
