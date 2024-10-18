import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

const RouterHook = () => {
    const a = useNavigate()
  return (
    <div>
      <button className='w-full bg-black text-white py-4 mt-10' onClick={()=>a('/login')}>Click for Login</button>
    </div>
  )
}

export default RouterHook
