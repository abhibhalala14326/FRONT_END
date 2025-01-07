import React from 'react'
import { useLocation } from 'react-router-dom'

const Breadcrumb = () => {

const Location = useLocation();
console.log(Location);

const PagePath = Location.pathname

console.log(PagePath);


const PathSplit = PagePath.split('/')
console.log(PathSplit);


  return (
    <div>
      
    </div>
  )
}

export default Breadcrumb
