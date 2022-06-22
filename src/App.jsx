import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CardUser from './components/CardUser'
import FormUserId from './components/FormUserId'


const URL = 'https://users-crud1.herokuapp.com/users/'
function App() {
  const [users, setUsers] = useState()
  
  const allUser = () =>{
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    allUser()
  },[])
 
  const postUsers = () => {
    const newUser ={
      birthday: "2000-12-13",
      email: "JorgeaA@gmail.com",
      first_name: "Juan",
      last_name: "Daniel",
      password: "sss"
    }
    axios.post(URL, newUser)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    .finally(() => allUser())
  }


  
  console.log(users)

  return (
    <div className="App fit">
      <div className='header'>
        <h2 className='title_principal'>AGREGAR USUARIOS</h2>
        <button className='btnNew-user' onClick={postUsers}>New User</button>
        <FormUserId/>
      </div>
      
      <div className="allCards" >
      {
        users?.map(
            user => (
            <CardUser
              user={user}
              key={user.id}
              allUser={allUser}
              URL={URL}
            />
          )
        )
      }</div> 
    
     
    </div>
  )
}

export default App
