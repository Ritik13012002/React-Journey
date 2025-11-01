import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [userData , setuserData] = useState([]);
  const [index , setIndex] = useState(1);
  const getData = async()=>{

    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setuserData(response.data);

  }
  useEffect(function(){
    getData();
  },[index])

  let printUserData = <h3 className='bg-gray-700 text-xs'>No user available</h3>;

  if(userData.length>0){
    printUserData = userData.map(function(elem , idx){
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
      <div className='h-40 w-44 bg-white '>
        <img className='h-full object-cover rounded-xl' src={elem.download_url}alt="" />
      </div>
     
        <h2 className='font-bold text-l'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className=' overflow-auto bg-black h-screen text-white'>
         {/* <button onClick={getData}
         className='bg-green-600 active:scale-95 px-5 py-2 mb-3 rounded text-white'>Get data</button> */}
         <div className='flex flex-wrap gap-4'>
          {printUserData}
         </div>
         <div className='flex justify-center items-center gap-4 p-4'>
         <button 
         style={{opacity:index ==1 ? 0.6:1}}
         className='bg-amber-700 px-4 py-2 font-semibold text-black cursor-pointer active:scale-95 rounded'
         onClick={()=>{
          if(index>1){
            setIndex(index-1);
            setuserData([]);
          }
         }}
         >prev</button>
         <h4>page {index}</h4>
         <button className='bg-amber-700 px-4 py-2 font-semibold text-black cursor-pointer active:scale-95 rounded'
         onClick={()=>{
          
          setuserData([]);
          setIndex(index+1);
         }}
         >next</button>
         </div>
    </div>
  )
}

export default App
