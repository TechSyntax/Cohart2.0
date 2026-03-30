import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const allnavigate = useNavigate()
  return (
    <div>
        <h1 className='text-5xl  m-8 p-8'>Footer</h1>
      <button onClick={()=>{
        allnavigate('./course')
      }}
       className='bg-green-500 text-3xl m-4 p-4 rounded hover:scale-95 transition duration-300 ease-in-out cursor-pointer '
      >All Courses</button>
    </div>
  )
}

export default Footer
