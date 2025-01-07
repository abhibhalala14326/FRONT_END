import React from 'react'
import { Outlet } from 'react-router-dom'

const LoderData = () => {
  console.log('LoderData render');
  
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default LoderData
