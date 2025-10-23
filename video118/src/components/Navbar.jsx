import React from 'react'
import {memo} from 'react'
const Navbar = ({adj,getAdjective}) => {
  console.log("Navbar is rendered")
  return (
    <div>
      <nav>
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About us</li>
        </ul>
      </nav>
      I am a {adj} navbar
      <button onClick={()=>{getAdjective}}>Change me</button>
    </div>
  )
}

export default memo(Navbar)
