import React from "react";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const YupFormikFrom = () => {
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
  };

  const onSubmit = (value) => {
    console.log(value);
  };

  const validationSchema = yup.object({
    fullname: yup.string().required("Enter the full name"),
    email: yup
      .string()
      .required("Enter the email")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email"
      ),
    password: yup.string().required("Enter the password"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="space-y-4 max-w-lg mx-auto px-4 sm:px-6 bg-black py-6 lg:px-8">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullname"
              className="block text-gray-600 font-medium mb-2"
            >
              Full Name
            </label>
            <Field
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-[red]">
              <ErrorMessage
                name="fullname"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-2"
            >
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-[red]">
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-2"
            >
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-[red]">
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default YupFormikFrom;
