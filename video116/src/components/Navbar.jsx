import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>Home</li>
            <li>Blogs</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
      </nav>
      <Button/>
    </div>
  )
}

export default Navbar