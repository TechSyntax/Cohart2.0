import React, { useState } from 'react'
import Card from './componenets/Card'

const App = () => {
  const [username, setUsername] = useState('')
  const [userimg, setUserimg] = useState('')
    const [userdes, setUserdes] = useState('')
  const [role, setRole] = useState('')
  const [users, setUsers] = useState([])

  const handlesubmit = (e) => {
    e.preventDefault()
   
    const newuser = [...users]
    newuser.push({username, userimg, role, userdes})
    setUsers(newuser)
console.log(newuser);

    setUserimg('')
    setUsername('')
    setRole('')
    setUserdes('')
  }


  const deletehandler = (idx)=>{
     const newusers = [...users]
     newusers.splice(idx,1)
     setUsers(newusers)
  }

  return (
    <div className='min-h-screen bg-gray-600 text-amber-50 '>
      <form onSubmit={handlesubmit}>
        <input 
          type="text" 
          placeholder='Username'
          className='m-4 p-2 border border-amber-500 rounded'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='img'
           className='m-4 p-2 border border-amber-500 rounded'
          value={userimg}
          onChange={(e) => setUserimg(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='Role'
           className='m-4 p-2 border border-amber-500 rounded'
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='description'
           className='m-4 p-2 border border-amber-500 rounded'
          value={userdes}
          onChange={(e) => setUserdes(e.target.value)}
        />
        <button className='bg-yellow-500 px-10 py-5 active:scale-95 rounded-md cursor-pointer'>Submit</button>
      </form>
       <div  className='m-4 p-2 border border-sky-500 rounded'>
        {users.map(function(elem,idx){
  return (
      <Card idx={idx} elem={elem} deletehandler={deletehandler}/>
    )
  })} 

       </div>
      </div>
     
  )}
export default App
