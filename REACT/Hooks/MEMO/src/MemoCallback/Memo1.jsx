import React, { useRef, useState } from 'react'
import Memo2 from './Memo2'

const Memo1 = () => {
    const [form , setfrom] = useState([{name:'' , email:'' , passsword:''}])
    const ref = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
let from= (e)=>{
    e.preventDefault();
  let   name = ref.current.value
  let Email = ref1.current.value;
  let pass = ref2.current.value;

  setfrom({...from,name:name, Email:Email, passsword:pass })
    ref.current.value = ''
    ref1.current.value = ''
    ref2.current.value = "";


console.log(form);

}


  return (
    <div>
      <form action="" onSubmit={from}>
        <input type="text" ref={ref} placeholder="Name" />
        <input
          type="email"
          name="Email"
          id="Email"
          ref={ref1}
          placeholder="Email"
        />
        <input
          type="password"
          name="Password"
          id="Password"
          placeholder="Password"
          ref={ref2}
        />
        <Memo2 />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Memo1
