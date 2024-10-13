import React from "react";
import { useFormik } from "formik";

const Formik = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const onSubmit = values => {
    console.log("values", values);
  };

  const validate = values => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }

    console.log(errors);
    
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="max-w-md mx-auto mt-10">
      <form action="#" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          className="mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          name="fullName"
        />
        {formik.errors.fullName ? (
          <div className="text-red-500 mb-2">{formik.errors.fullName}</div>
        ) : null}

        <input
          type="email"
          placeholder="Enter your email"
          className="mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={formik.handleChange}
          value={formik.values.email}
          name="email"
        />
        {formik.errors.email ? (
          <div className="text-red-500 mb-2">{formik.errors.email}</div>
        ) : null}

        <input
          type="password"
          placeholder="Enter your password"
          className="mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password"
        />
        {formik.errors.password ? (
          <div className="text-red-500 mb-2">{formik.errors.password}</div>
        ) : null}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formik;
