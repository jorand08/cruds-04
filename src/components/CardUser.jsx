import axios from 'axios'
import React from 'react'

const CardUser = ({user, allUser, URL, setDataEdit, reset}) => {

  const deleteUser = id =>{
    axios.delete(`${URL}${id}/`)
    .then(res=>console.log(res.data))
    .catch(err => console.log(err))
    .finally(()=>allUser())
  }


  const updateUser = updateNewUser => {
    console.log(updateNewUser, "hola error")
    setDataEdit(true)
    reset(updateNewUser)
    
  }
  return (
    <article className='card'>
               
        <p className='text_name'><span>Name: </span>{user.first_name}  {user.last_name}</p>
        <p className='text_name'><span>Email: </span> {user.email} </p>
        <p className='text_name'><span><i className="fa-solid fa-cake-candles"></i></span> {user.birthday}</p>
        
        <div className="iclass"> 

        <button className='btn-Trash' onClick={()=> deleteUser(user.id)}>
          <i className="fa-solid fa-trash-arrow-up"></i> 
        </button>

        <button className='btn-Trash' onClick={()=> updateUser(user)}>
        <i className="fa-solid fa-user-pen"></i> 
        </button>          
             
        </div>
        
    </article>
  )
}

export default CardUser