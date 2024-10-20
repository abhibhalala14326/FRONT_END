import React from "react";
import * as yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

 const navigate = useNavigate();

 const onSubmit = (values) => {
   console.log(values); 
   localStorage.setItem("userData", JSON.stringify(values));
   navigate("/"); 
 };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const personSchema = yup.object({
    name: yup.string().required("Enter your name"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Enter your email"),
    password: yup
      .string()
      .min(8, "Minimum 8 characters required")
      .required("Enter your password"),
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={personSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Field
                name="name"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500"
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
