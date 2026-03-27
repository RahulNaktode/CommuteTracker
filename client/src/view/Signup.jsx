import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router'

function Signup() {
  return (
    <div>
      <div className='w-95 block mx-auto mt-15 border border-gray-300 rounded px-4 py-6 shadow-md bg-white'>
    <h2 className='text-2xl text-center mb-6 poppins-semibold-italic'>Create Your Account</h2>
      <Input 
      type={"text"}
      placeholder={"name"}
    />

    <Input 
      type={"text"}
      placeholder={"email"}
    />

    <Input 
      type={"text"}
      placeholder={"mobile"}
    />

    <Input 
      type={"password"}
      placeholder={"password"}
    />


    <Button title={"Signup"} />

    <Link to="/login" className='text-blue-500 '>Already have an account? Login</Link>
    </div>
    </div>
  )
}

export default Signup
