import React, { useCallback } from 'react'
import { useState } from 'react'
import ChildComponents from './ChildComponents '

const Memo = () => {
    const [add , setAdd] = useState(0)
    const[count , setCount] = useState(0)

   const UpdateAdd =  useCallback(() =>  {
        setAdd((add) => add + 1);
      } , [add])
  return (
    <div className="w-svw bg-black text-white h-svh flex  flex-col justify-center items-center">
      <div className="flex *:border gap-4 mb-4">
        <p className="px-10 py-6">{count} </p>
        <p className="px-10 py-6 text-4xl">- </p>

        <p className="px-10 py-6">{add} </p>
      </div>

      <div className="flex  gap-3">
        <button
          className="px-5 py-3 bg-slate-600 "
          onClick={() => setCount(count + 1)}
        >
          Count
        </button>
        <ChildComponents add={UpdateAdd} />
      </div>
    </div>
  );
}

export default Memo
