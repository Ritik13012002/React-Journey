import axios from 'axios'

const App = () => {
  // fetch api / async .. await

  // async function getData(){
  //  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //  const data = await response.json();
  //  console.log(data);
  // }

  // axios

  const getData= async()=>{
   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);
    
  }
  
  return (
    <div>
      <button onClick={getData}> Click here</button>
    </div>
  )
}

export default App
