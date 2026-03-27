import React from 'react'
import { Link } from 'react-router'
import { MapPinHouse } from 'lucide-react'

function Navbar() {
  return (
    <div className='max-w-10/12 bg-amber-500 rounded-full px-10 py-3 mx-auto sticky top-3 flex items-center'>
      <Link to='/' className='flex items-center'>
        <MapPinHouse />
        <h2 className='font-medium md:text-2xl! text-xl!'>CommuteTracker</h2>
        </Link>
    </div>
  )
}

export default Navbar
