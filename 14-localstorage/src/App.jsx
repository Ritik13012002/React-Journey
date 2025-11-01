import React from 'react'

const App = () => {
  // localStorage.setItem('user','Ritik')
  // localStorage.setItem('age',23)
  // const User =localStorage.getItem('user')
  // console.log(User)
  // localStorage.removeItem('user')
  // const user1 ={
  //   name1 : "Peter",
  //   marks : 90,
  //   class : "mca"
  // }
  // localStorage.setItem('user1',JSON.stringify(user1))

   const user1 = JSON.parse(localStorage.getItem('user1'))
  console.log(user1)
  return (
    <div>
      app
    </div>
  )
}

export default App
