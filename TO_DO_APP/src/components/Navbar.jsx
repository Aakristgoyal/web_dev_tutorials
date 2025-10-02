import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-base sm:text-xl mx-8'>E-Task</span> 
        </div>
        <ul className='flex space-x-4 mx-9'>
            <li className='cursor-pointer hover:bg-slate-400'>Home</li>
            <li className='cursor-pointer hover:bg-slate-400'>Your Tasks</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
