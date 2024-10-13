import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const YupFormikFrom2 = () => {
  const value = {
    fullname: "",
    email: "",
    password: "",
    gender:''
  };

  const onSubmit = (value) => {
    console.log("Submitted values:", value);
  };

  const validationSchema = yup.object({
    fullname: yup.string().required("Enter the Fullname"),
    email: yup.string().email("Invalid Email").required("Enter the Email"),
    password: yup.string().required("Enter the password"),
    gender:yup.string().required('you gender')
  });

  return (
    <Formik
      initialValues={value}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullname"
          >
            Fullname
          </label>
          <Field
            type="text"
            name="fullname"
            placeholder="Enter the fullname"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ErrorMessage
            name="fullname"
            component="div"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <Field
            type="email"
            name="email"
            placeholder="Enter the Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <Field
            type="password"
            name="password"
            placeholder="Enter the Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Gender
          </label>
          <div className="flex items-center">
            <label className="mr-4">
              <Field type="radio" name="gender" value="male" className="mr-1" />
              Male
            </label>
            <label>
              <Field
                type="radio"
                name="gender"
                value="female"
                className="mr-1"
              />
              Female
            </label>
          </div>
          <ErrorMessage
            name="gender"
            component="div"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default YupFormikFrom2;
