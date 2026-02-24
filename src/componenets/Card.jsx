import React from 'react'

const Card = (props) => {
  return (
    <div
  key={props.idx}
  className="w-280px bg-white m-4 p-4 border border-gray-200 rounded-2xl shadow-md"
>
  <img
    className="h-24 w-24 rounded-full  object-center object-cover mx-auto"
    src={props.elem.userimg}
    alt={props.elem.username}
  />

  <h1 className="text-xl mt-3 font-bold text-center text-gray-950">
    {props.elem.username}
  </h1>

  <h5 className="text-blue-500 text-base font-semibold my-1 text-center">
    {props.elem.role}
  </h5>

  <p className="text-sm text-gray-600 font-medium leading-tight text-center">
    {props.elem.userdes}
  </p>

  <button  onClick={()=>{
    props.deletehandler(props.idx)
  }} className="mt-4 w-full bg-yellow-500 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition cursor-pointer">
    Remove
  </button>
</div>
  )
}

export default Card
