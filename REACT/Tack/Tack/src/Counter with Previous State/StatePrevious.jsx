import React, { useState } from 'react'

const StatePrevious = () => {
    const [count , SetCount] = useState(0)
  return (
    <div className="flex justify-between">
      <button
        onClick={() => SetCount(count + 1)}
        className="bg-black text-white px-3 py-3 ml-3"
      >
        increment
      </button>
      <p>{count}</p>

      <button
        onClick={() => SetCount(count - 1)}
        className="bg-black text-white px-3 py-3 ml-3"
      >
        Decrement
      </button>
    </div>
  );
}

export default StatePrevious
