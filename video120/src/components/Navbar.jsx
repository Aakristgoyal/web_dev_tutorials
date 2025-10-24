import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Navbar = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
        <h1>Navbar Component</h1>
        Count value is {count}
    </div>
  )
}

export default Navbar
