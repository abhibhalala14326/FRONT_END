import React from "react";
import { memo } from "react";

const ChildComponents = ({ add }) => {
  console.log("ChildComponents Re-render");
  return (
    <div>
      <button onClick={add} className="px-7 py-3 bg-slate-600">
        Add
      </button>
    </div>
  );
};
export default memo(ChildComponents);
