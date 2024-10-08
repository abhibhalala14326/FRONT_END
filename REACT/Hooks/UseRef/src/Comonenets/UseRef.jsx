import React, { useRef, useState } from "react";

const UseRef = () => {
  const name = useRef(null);
  const Email = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const update = (event) => {
    event.preventDefault();
    const Ref1 = name.current.value;
    const Ref2 = Email.current.value;

    setFormData({ name: Ref1, email: Ref2 });
    console.log(formData);
  };

  return (
    <>
      <div className="bg-black w-full flex flex-col justify-center text-white items-center h-svh ">
        <form
          action=""
          className="flex  flex-col items-center gap-2 *:p-2  w-fit px-4 text-black border py-4"
          onSubmit={update}
        >
          <input type="text" placeholder="Name" ref={name} />
          <input type="email" name="" id="" placeholder="Email" ref={Email} />
          <input
            type="submit"
            value="Submit"
            className="bg-zinc-300 font-semibold  text-black "
          />
        </form>

        <h1 className="text-3xl bg-slate-500 w-full text-center py-4 mt-4">
          OutPut
        </h1>

        <div>
          <p>Name : {formData.name}</p>
          <p>Email : {formData.email}</p>
        </div>
      </div>
    </>
  );
};

export default UseRef;
