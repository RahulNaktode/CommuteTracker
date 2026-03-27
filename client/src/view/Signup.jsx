import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router'
import { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function Signup() {
  const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    });

    const createUser = async ()=> {
      const response = await axios.post(`http://localhost:8080/signup`, newUser);

      if(response.data.success) {
        toast.success(response.data.message, { id: "signupsuccess" });
        setNewUser({
          name: "",
          email: "",
          mobile: "",
          password: "",
        });

        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      } else {
        toast.error(response.data.message, { id: "signuperror" });
    }}
  return (
    <div>
      <div className='w-95 block mx-auto mt-15 border border-gray-300 rounded px-4 py-6 shadow-md bg-white'>
    <h2 className='text-2xl text-center mb-6 poppins-semibold-italic'>Create Your Account</h2>
      <Input 
      type={"text"}
      placeholder={"name"}
      value={newUser.name}
      onChange={(e) => setNewUser({...newUser, name: e.target.value})}
    />

    <Input 
      type={"text"}
      placeholder={"email"}
      value={newUser.email}
      onChange={(e) => setNewUser({...newUser, email: e.target.value})}

    />

    <Input 
      type={"text"}
      placeholder={"mobile"}
      value={newUser.mobile}
      onChange={(e) => setNewUser({...newUser, mobile: e.target.value})}
    />

    <Input 
      type={"password"}
      placeholder={"password"}
      value={newUser.password}
      onChange={(e) => setNewUser({...newUser, password: e.target.value})}

    />


    <Button title={"Signup"} onClick={createUser}/>

    <Link to="/login" className='text-blue-500 '>Already have an account? Login</Link>
    </div>
    <Toaster />
    </div>
  )
}

export default Signup
