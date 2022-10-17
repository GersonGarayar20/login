import React, { useState } from 'react'
import "./Form.css";

const URL = "https://api-users-production-84e0.up.railway.app/api/v1/users/"


const initialState = {
  name:"",
  email:"",
  password:"",
  lastName:""
}

export default function Form() {

  const [values, setValues] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    };

    fetch(URL, options)

  }

  const handleChange = (e) => {
    const {name, value} = e.target

    setValues({
      ...values,
      [name]:value
    })
  }



  return (
    <div className='ml-16'>
      <div className='flex flex-col gap-4 py-8'>
        <p className='uppercase text-gray-400 font-semibold'>start for free</p>
        <h2 className='text-4xl font-bold text-white'>Create new account<span className='text-sky-500'>.</span></h2>
        <p className='text-gray-400'>Already A Menber? <a className='text-sky-500' href="">Log In</a></p>
      </div>

      <form className='flex flex-col gap-4 w-96' onSubmit={handleSubmit}>
        <div className='flex justify-b gap-6'>
          <input name='name' onChange={handleChange} value={values.name} className='input w-1/2' type="text" placeholder="Firts name"/>
          <input name='lastName' onChange={handleChange} value={values.lastName} className='input w-1/2' type="text" placeholder="Last name"/>
        </div>
        <input name='email' onChange={handleChange} value={values.Email} className='input w-full' type="email" placeholder="Email"/>
        <input name='password' onChange={handleChange} value={values.password} className='input w-full' type="password" placeholder="Password"/>
        <div className='flex gap-4'>
          <button className='button bg-slate-500 w-1/2'>Change method</button>
          <button type='submit' className='button bg-slate-500 w-1/2'>Create account</button>
        </div>
      </form>
    </div>
  )
}


