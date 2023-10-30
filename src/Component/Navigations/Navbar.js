import React from 'react'
import {NavLink} from "react-router-dom"

// Navbar 
const Navbar = () => {
  return (
    <div className='p-4 border-solid border-2 bg-white '>
        <div className='mx-10 text-xl no-underline'>
          <NavLink to="/" className="no-underline"> FlashCard</NavLink>  
        </div>
      
    </div>
  )
}

export default Navbar
