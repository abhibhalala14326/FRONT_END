import {useDispatch , useSelector} from 'react-redux'
import './App.css'

function App() {

  const state = useSelector((state) => state)

  return (
<>
<p>{state}</p>
</>
  )
}

export default App
