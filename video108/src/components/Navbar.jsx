import React,{useEffect} from 'react'
import './Navbar.css'
const Navbar = ({ color }) => {
    useEffect(()=>{
        alert("color was changed in navbar")
    },[color]);

  return (
    <div>
        <nav style={{backgroundColor: color}}>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Contact us</li>
                <li>Blogs</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
