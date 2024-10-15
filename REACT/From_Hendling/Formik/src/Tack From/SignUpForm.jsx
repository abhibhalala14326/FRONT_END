import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const SignUpForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object({
    username: yup.string().required("enter name"),
    email: yup
      .string()
      .email("not valid Eamil")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email"
      )
      .required("enter the email"),
    password: yup
      .string()   .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
  )
      .min(8, "Password must be at least 8 characters")
      .required("enater the password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "password must match"),
  });

  const onSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">Sign Up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username:
            </label>
            <Field
              type="text"
              name="username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <Field
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password:
            </label>
            <Field
              type="password"
              name="password"
              autoComplete="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirm Password:
            </label>
            <Field
              type="password"
              name="confirmPassword"
              autoComplete="confirmPassword"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
            <ErrorMessage
              name="confirmPassword"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
