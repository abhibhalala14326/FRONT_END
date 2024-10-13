import React from 'react'
import { useFormik } from 'formik';

const Formik2 = () => {
const initialValues = {
  fullName: "",
  Email: "",
  Password: "",

};

const onSubmit = values => {
  console.log("from", values);
};



const validate = (values) => {
  const errors = {};

  if (!values.fullName ) {
    errors.fullName = "Enter a Fullname";
  }
  if (!values.Email) {
    errors.Email = "Enate a Email";
  }
  if (!values.Password ) {
    errors.Password = "Enate a password";
  }
  
  return errors;


};

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })




  return (
    <div className="max-w-md mx-auto mt-10">
      <form action="#" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          className="mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={formik.handleChange}
        />
        {formik.errors.fullName ? <div className='text-red-900'>{formik.errors.fullName}</div> : null }

        <input
          type="email"
          placeholder="Enter your email"
          className="mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="email"
          onCanPlay={formik.handleChange}
        />

        {formik.errors.Email ? <div>{formik.errors.Email} </div> : null}

        <input
          type="password"
          placeholder="Enter your password"
          className="mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="password"
          onCanPlay={formik.handleChange}
        />
        {formik.errors.Password ? <div>{formik.errors.Password}</div> : null}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Formik2
