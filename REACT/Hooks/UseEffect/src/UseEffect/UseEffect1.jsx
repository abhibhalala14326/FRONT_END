import {useState , useEffect } from 'react'

const UseEffect1 = () => {

     const [state, Setstate] = useState(0)

    //  useEffect(()=>
    // {
    //   alert('hello Abhi ka hal hei')
    // },[])

     useEffect(() => {
       
       return () => alert("hello Abhi ka hal hei");
     }, [state]);

  return (
    <>
      <h1>count : {state}</h1>
      <button onClick={() => Setstate(state+1)} className='px-3 py-2 bg-black text-white'>increment</button>
    </>
  );
}

export default UseEffect1
