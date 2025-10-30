import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
const App = () => {
  return (
   <div className='parent'>
    <Card user='Ritik Singh' age={23} img= "https://images.unsplash.com/photo-1761165307592-95cdbe1b5864?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=1000"    />
    <Card user='Rajni Kant' age = {24} img="https://images.unsplash.com/photo-1760733345250-6b2625fca116?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=1000"/>
    </div>
   
   
  
  )
}

export default App
