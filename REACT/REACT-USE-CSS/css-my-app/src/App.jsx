import { useState } from 'react'

import './App.css'
import img from '././assets/img.jpeg'

const stylebtn = {
  backgroundColor:'red',
  padding : '3vw',
  fontSize:'2vw'


}

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <img src={img} alt="asfg" style={{'background':'red', 'border':'2px solid black'}} />
        <button style={stylebtn}>click</button>

      </div>
    </>
  );
}

export default App
