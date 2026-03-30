import React from 'react'
import { Link, NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='bg-green-600 text-5xl text-white font-semibold underline-offset-0 p-4 flex justify-between'>
          <NavLink to='/'
                 className={({ isActive }) =>
    isActive ? "text-blue-700" : "text-white"
  }
          >Home</NavLink>
      <NavLink to='/about'
      className={({isActive})=>
      isActive ?'text-blue-600' : 'text-white'
      }
      >About
      </NavLink>
      <NavLink to='/course'
      className={({isActive})=>
      isActive ? 'text-blue-700' : 'text-white'
      }
      >Course</NavLink>
    </div>
  )
}

export default Navbar
