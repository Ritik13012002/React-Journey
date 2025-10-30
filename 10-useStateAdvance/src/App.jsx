
import { useState } from 'react';
const App = () => {
  const [num , setNum]=useState([10,20,30]);
  const btnClicked = ()=>{
    // const newNum = [...num]
    // newNum.push(99)

    // setNum(newNum)
    // ..batch management
    setNum(prev=>([...num , 50]))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
