import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router'

function Login() {
  return (
    <div className='w-95 block mx-auto mt-15 border border-gray-300 rounded px-4 py-6 shadow-md bg-white'>
    <h2 className='text-2xl text-center mb-6 poppins-semibold-italic'>Login to Your Account</h2>
      <Input 
      type={"text"}
      placeholder={"email"}
    />

    <Input 
      type={"password"}
      placeholder={"password"}
    />


    <Button title={"Login"}/>

    <Link to="/signup" className='text-blue-500 '>Don't have an account? Signup</Link>
    </div>
  )
}

export default Login
