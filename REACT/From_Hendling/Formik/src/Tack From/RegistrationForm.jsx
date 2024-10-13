import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
   FaUser,
  FaLock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaGenderless,
  FaLanguage,
  FaInfoCircle,
} from "react-icons/fa";

const RegistrationForm = () => {
  const initialValues = {
    userId: "",
    password: "",
    name: "",
    address: "",
    country: "",
    zipCode: "",
    email: "",
    sex: "",
    language: [],
    about: "",
  };

  const validationSchema = yup.object({
    userId: yup.string().min(4).max(12).required("Enter User ID"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Enter password"),
    name: yup.string().required("Enter Full Name"),
    address: yup.string(),
    country: yup.string().required("Select country"),
    zipCode: yup
      .string()
      .matches(/^[0-9]{5}$/, "Invalid ZIP Code")
      .required("Enter ZIP Code"),
    email: yup
      .string()
      .email("Invalid email format")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email"
      )
      .required("Enter email"),
    sex: yup.string().required("Select gender"),
    language: yup.array().min(1, "Select at least one language"),
    about: yup.string(),
  });

  const onSubmit = (values) => {
    console.log("Form values", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="max-w-lg mx-auto p-6  bg-[#806c6c91] rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-white mb-4">Registration Form</h2>

        {/* User ID */}
        <div className="mb-4">
          <label className=" text-white  items-center">
            <FaUser className="mr-2 text-gray-300" />
            User ID
          </label>
          <Field
            type="text"
            name="userId"
            className="w-full p-2 border rounded"
            placeholder="Enter User ID"
          />
          <ErrorMessage component="div" className="text-red" name="userId" />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className=" text-white flex items-center">
            <FaLock className="mr-2 text-gray-300" />
            Password
          </label>
          <Field
            type="password"
            name="password"
            className="w-full p-2 border rounded"
            placeholder="Enter Password"
          />
          <ErrorMessage component="div" className="text-red" name="password" />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className=" text-white flex items-center">
            <FaUser className="mr-2 text-gray-300" />
            Full Name
          </label>
          <Field
            type="text"
            name="name"
            className="w-full p-2 border rounded"
            placeholder="Enter Full Name"
          />
          <ErrorMessage component="div" className="text-red" name="name" />
        </div>

        {/* Address (Optional) */}
        <div className="mb-4">
          <label className=" text-white flex items-center">
            <FaMapMarkerAlt className="mr-2 text-gray-300" />
            Address (Optional)
          </label>
          <Field
            type="text"
            name="address"
            className="w-full p-2 border rounded"
            placeholder="Enter Address"
          />
          <ErrorMessage component="div" className="text-red" name="address" />
        </div>

        {/* Country */}
        <div className="mb-4">
          <label className=" text-white flex items-center">
            <FaGlobe className="mr-2 text-gray-300" />
            Country
          </label>
          <Field
            as="select"
            name="country"
            className="w-full p-2 border rounded"
          >
            <option value="">(Please select a country)</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            {/* Add more countries as needed */}
          </Field>
          <ErrorMessage component="div" className="text-red" name="country" />
        </div>

        {/* ZIP Code */}
        <div className="mb-4">
          <label className=" text-white flex items-center">
            <FaMapMarkerAlt className="mr-2 text-gray-300" />
            ZIP Code
          </label>
          <Field
            type="text"
            name="zipCode"
            className="w-full p-2 border rounded"
            placeholder="Enter ZIP Code"
          />
          <ErrorMessage component="div" className="text-red" name="zipCode" />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className=" text-white flex items-center">
            <FaEnvelope className="mr-2 text-gray-300" />
            Email
          </label>
          <Field
            type="email"
            name="email"
            className="w-full p-2 border rounded"
            placeholder="Enter Email"
          />
          <ErrorMessage component="div" className="text-red" name="email" />
        </div>

        {/* Sex */}
        <div className="mb-4">
          <label className=" text-white flex items-center">
            <FaGenderless className="mr-2 text-gray-300" />
            Sex
          </label>
          <div className="flex items-center">
            <label className="mr-4">
              <Field type="radio" name="sex" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="sex" value="female" />
              Female
            </label>
          </div>
          <ErrorMessage component="div" className="text-red" name="sex" />
        </div>

        {/* Language */}
        <div className="mb-4">
          <label className=" text-white flex items-center">
            <FaLanguage className="mr-2 text-gray-300" />
            Language
          </label>
          <div className="flex flex-col">
            <label>
              <Field type="checkbox" name="language" value="English" />
              English
            </label>
            <label>
              <Field type="checkbox" name="language" value="Non English" />
              Non English
            </label>
          </div>
          <ErrorMessage component="div" className="text-red" name="language" />
        </div>

        {/* About (Optional) */}
        <div className="mb-4">
          <label className=" text-white flex items-center">
            <FaInfoCircle className="mr-2 text-gray-300" />
            About (Optional)
          </label>
          <Field
            as="textarea"
            name="about"
            className="w-full p-2 border rounded"
            placeholder="Tell us about yourself"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
