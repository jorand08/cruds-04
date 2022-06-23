import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CardUser from './components/CardUser'
import FormUserId from './components/FormUserId'
import { useForm } from 'react-hook-form'


const URL = 'https://users-crud1.herokuapp.com/users/'
function App() {
  const [users, setUsers] = useState()
  const [dataEdit, setDataEdit] = useState(false)
  const {handleSubmit, register, reset}= useForm()
  const [isShow, setIsShow] = useState(false)

  
  const allUser = () =>{
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    allUser()
  },[])
 
  const postUsers = newUser => {
    axios.post(URL, newUser)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    .finally(() => allUser())
  }

  const showForm =()=>setIsShow(!isShow)

  return (
    <div className="App fit">
      <div className='header'>
        <h2 className='title_principal'>AGREGAR USUARIOS</h2>
        <button className='btnNew-user' onClick={showForm}>{isShow ? 'Ocultar' : 'Nuevo Usuario' }</button>
        {isShow &&
          <FormUserId
          postUsers={postUsers}
          allUser={allUser}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
          handleSubmit={handleSubmit}
          register={register}
          reset={reset}
          URL={URL}
        />

        }
        
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
              setDataEdit={setDataEdit}
              reset={reset} 
            />
          )
        )
      }</div> 
    
     
    </div>
  )
}

export default App
