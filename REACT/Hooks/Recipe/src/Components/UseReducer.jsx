import React, { useReducer } from 'react'
import Reducer from './Reducer'
import react from 'react'

const UseReducer = () => {

    const [state , dispatch] = useReducer(Reducer,{age:14})
    console.log("UseReducer", state.age);
  return (
    <div>
      <p className='text-4xl mb-5'>age: {state.age}</p>
      <button onClick={() => dispatch("INCREMENTAGE")} className='px-5 py-2 bg-black text-white ml-5' >INCREMENTAGE</button>
      <button onClick={() => dispatch("DECREMENTAGE")} className='px-5 py-2 bg-black text-white ml-5' >INCREMENTAGE</button>
    </div>
  );
} 

export default UseReducer
