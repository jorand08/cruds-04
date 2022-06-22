import React from 'react'
import { useForm } from 'react-hook-form'

const FormUserId = () => {
const {handleSubmit, register, reset}= useForm()
const resetUser ={
    birthday: "",
    email: "",
    first_name: "",
    last_name: ""
}
const submit = data => {
    console.log(data)
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
        <button className='btnNew-user btn-submit'>Submit</button>

        


        
      </form>
  )
}

export default FormUserId