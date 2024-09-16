import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

const RouterHook = () => {
    const a = useNavigate()
  return (
    <div>
      <button onClick={()=>a('/login')}>Click for home</button>
    </div>
  )
}

export default RouterHook
