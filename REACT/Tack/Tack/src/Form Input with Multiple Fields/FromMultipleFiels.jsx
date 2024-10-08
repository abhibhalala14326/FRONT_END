import React, { useRef, useState } from "react";

const FormMultipleFields = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);
  const passref = useRef[null]
  const [formData, setFormData] = useState([]);

  const update = (event) => {
    event.preventDefault();
    const newName = nameRef.current.value;
    const newEmail = emailRef.current.value;
    const newAge = ageRef.current.value;
    const NewPass = ageRef.current.value;

    setFormData([...formData, { name: newName, email: newEmail, age: newAge, pass:NewPass }]);

    nameRef.current.value = "";
    emailRef.current.value = "";
    ageRef.current.value = "";
  };

  return (
    <>
      <div className="bg-black w-full flex flex-col justify-center text-white items-center h-svh">
        <form
          action=""
          className="flex flex-col items-center gap-2 w-fit px-4 text-black border py-4"
          onSubmit={update}
        >
          <input type="text" placeholder="Name" ref={nameRef} />
          <input type="email" placeholder="Email" ref={emailRef} />
          <input type="number" placeholder="Age" ref={ageRef} />
          <input type="date" placeholder="Age" ref={passref} />
          <input
            type="submit"
            value="Submit"
            className="bg-zinc-300 font-semibold text-black"
          />
        </form>

        <h1 className="text-3xl bg-slate-500 w-full text-center py-4 mt-4">
          Output
        </h1>

        <div>
          {formData.map((data, index) => (
            <div key={index}>
              <p>Name: {data.name}</p>
              <p>Email: {data.email}</p>
              <p>Age: {data.age}</p>
              <p>Age: {data.pass}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FormMultipleFields;
