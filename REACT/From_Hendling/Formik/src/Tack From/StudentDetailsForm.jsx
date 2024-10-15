import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const StudentDetailsForm = () => {
  const initialValues = {
    name: "",
    email: "",
    school: "",
    phone: "",
    gender: "",
    course: [],
    location: "",
  };

  const validationSchema = yup.object({
    name: yup.string().required("Enter name"),
    email: yup.string().email("not valid Email").matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email"
      ).required("enter the Eamil"),
    school: yup.string().required("Enter School name"),
    gender: yup.string().required("you gender"),
    course: yup
      .array()
      .min(1, "not valid")
      .required("Please select at least one course"),
    phone: yup.string().matches(/^[0-9]{10,10}/, "invalid"),
    location: yup.string().required("Select location"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    return values
  };

  return (
    <section className="h-svh flex  justify-center items-center">
     
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="max-w-[700px] mx-auto p-6  rounded-lg shadow-md bg-[#0000002f]">
          <h2 className="text-xl font-bold text-center mb-4 text-pink-600">
            Student Details Form
          </h2>

          <section className="flex justify-around">
            {/* Name Field */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700">Name</label>
              <Field
                type="text"
                name="name"
                className="w-full p-2 border rounded"
                placeholder="Enter your name"
              />
              <ErrorMessage
                component="div"
                name="name"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email Field */}

            <div className="mb-4">
              <label className="block font-medium text-gray-700">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
              />
              <ErrorMessage
                component="div"
                name="email"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </section>

          <section className="flex justify-around">
            {/* School Field */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700">School</label>
              <Field
                type="text"
                name="school"
                className="w-full p-2 border rounded"
                placeholder="Enter your school"
              />
              <ErrorMessage
                component="div"
                name="school"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Phone Field */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700">Phone</label>
              <Field
                type="tel"
                name="phone"
                className="w-full p-2 border rounded"
                placeholder="Enter your phone number"
              />
              <ErrorMessage
                component="div"
                name="phone"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </section>

          <section className="flex justify-around  gap-4">
            {/* Gender Field */}
            <div className="mb-4 ">
              <label className="block font-medium text-gray-700">Gender</label>
              <div className="flex items-center space-x-4">
                <label>
                  <Field type="radio" name="gender" value="male" />
                  <span className="ml-2">Male</span>
                </label>
                <label>
                  <Field type="radio" name="gender" value="female" />
                  <span className="ml-2">Female</span>
                </label>
              </div>
              <ErrorMessage
                component="div"
                name="gender"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Course Field */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700">Course</label>
              <div className="flex flex-col space-y-1">
                <label>
                  <Field type="checkbox" name="course" value="IT" />
                  <span className="ml-2">IT</span>
                </label>
                <label>
                  <Field type="checkbox" name="course" value="HRM" />
                  <span className="ml-2">HRM</span>
                </label>
                <label>
                  <Field type="checkbox" name="course" value="English" />
                  <span className="ml-2">English</span>
                </label>
                <label>
                  <Field type="checkbox" name="course" value="Graphic Design" />
                  <span className="ml-2">Graphic Design</span>
                </label>
              </div>
              <ErrorMessage
                component="div"
                name="course"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Institute Location Dropdown */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700">
                Institute Location
              </label>
              <Field
                as="select"
                name="location"
                className="w-full p-2 border rounded"
              >
                <option value="Gampaha">Gampaha</option>
                <option value="Colombo">Colombo</option>
                <option value="Kandy">Kandy</option>
                <option value="Galle">Galle</option>
              </Field>
            </div>
          </section>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default StudentDetailsForm;
