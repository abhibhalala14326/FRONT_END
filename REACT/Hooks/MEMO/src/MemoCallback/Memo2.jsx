import React, { memo } from 'react'

const Memo2 = () => {
    console.log("memo2");
    console.log("memo3");
    console.log("memo4");
    console.log("memo4");
    
  return (
    <div>
    </div>
  );
}

export default memo(Memo2)
