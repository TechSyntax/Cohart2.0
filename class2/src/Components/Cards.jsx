import React from 'react'

const Cards = (props) => {

  const clra = Math.floor(Math.random()*256)
  const clrb = Math.floor(Math.random()*256)
  const clrc = Math.floor(Math.random()*256)

  return (
    <div  className=" w-80 h-60 text-white font-bold text-2xl flex flex-col justify-center items-center rounded-xl"
    style={{backgroundColor:`rgb(${clra},${clrb},${clrc})`}} >
{props.elem.name }
<br></br>
{props.elem.role}

    </div>
  )
}

export default Cards
