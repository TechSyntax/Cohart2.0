import React, {useState} from 'react'
import axios from 'axios'
import Cards from './Components/Cards'

const App = () => {

 const [alldata, setalldata] = useState([])

  const data = async ()=>{
    const response = await axios.get("https://api.escuelajs.co/api/v1/users")
    setalldata(response.data)
  }


  return (
    <div className='min-h-screen bg-black ' >
  <button  className='bg-blue-600 p-8 text-white m-5 cursor-pointer rounded-xl text-2xl font-bold'
      onClick={data}>Click me!</button> 
    <div className='flex flex-wrap gap-8 justify-center '>
      {alldata.map((function(elem,idx){
        return <div key={idx}  >
          <Cards elem={elem} />
        </div>
      }))}
    
    </div>
    </div>
  )
}

export default App
