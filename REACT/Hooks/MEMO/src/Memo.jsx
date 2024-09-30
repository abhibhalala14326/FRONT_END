import React from 'react'
import { useState } from 'react'
import ChildComponents from './ChildComponents '

const Memo = () => {
    const [add , setAdd] = useState(0)
    const[count , setCount] = useState(0)

      const Update = () => {
        setAdd((add) => add + 1);
      };
  return (
    <div>
      <p className="px-10 py-6">{count} </p>
      <p className="px-10 py-6">{add} </p>

      <button
        className="px-5 py-3 bg-slate-600 "
        onClick={() => setCount(count + 1)}
      >
        Count
      </button>
      <ChildComponents add={Update} />
    </div>
  );
}

export default Memo
