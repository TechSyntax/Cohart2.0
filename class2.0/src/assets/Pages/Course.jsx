import React from 'react'
import { Outlet } from 'react-router-dom'

const Course = () => {
  return (
    <div>
      <h1 className='text-9xl underline m-8 p-8 '>Courses</h1>
      <Outlet />
    </div>
  )
}

export default Course
