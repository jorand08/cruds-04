import axios from 'axios'
import React from 'react'


const FormUserId = ({postUsers, allUser, dataEdit, handleSubmit, register, reset, setDataEdit, URL}) => {


const resetUser ={
    birthday: "",
    email: "",
    first_name: "",
    last_name: "",
    password:  ""
}
const submit = data => {
  if(dataEdit){
    axios.put(`${URL}${data.id}/`, data)
    .then(res=>console.log(res.data))
    .catch(err => console.log(err))
    .finally(()=>allUser())
    setDataEdit(false)

  }else{
    postUsers(data)
    allUser()
  }

  reset(resetUser)
        
}
  return (
    <form onSubmit={handleSubmit(submit)}>
        <div className='allForm'>
          <label htmlFor="first_name"><p>First Name</p></label>
          <input type="text" id='first_name' {...register('first_name')}/>
        </div>
        <div className='allForm'>
          <label htmlFor="last_name"><p>Last Name</p></label>
          <input type="text" id='last_name' {...register('last_name')} />
        </div>
        <div className='allForm'>
          <label htmlFor="email"><p>Email</p></label>
          <input type="text" id='email' {...register('email')}/>
        </div>
        <div className='allForm'>
          <label htmlFor="birthday"><p>Birthday</p></label>
          <input type="date" id='birthday' {...register('birthday')}/>   
        </div>
        <div className='allForm'>
          <label htmlFor="password"><p>Password:</p></label>
          <input type="password" id='password' {...register('password')}/>   
        </div>
        <button className='btnNew-user btn-submit'>Submit</button>

      </form>
  )
}

export default FormUserId