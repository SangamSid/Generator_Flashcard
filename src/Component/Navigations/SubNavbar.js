import React from 'react'
import {NavLink} from "react-router-dom"

const SubNavbar = () => {
  return (
    <div>
        <div className='font-bold text-xl mb-4'> Create FlashCard</div>
      <div>
        <NavLink to="/"> Create New</NavLink>
        <NavLink to="/flashcard" className="mx-4"> My Flashcard</NavLink>
      </div>
    </div>
  )
}

export default SubNavbar
