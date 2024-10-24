import React from "react";
import * as yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { getFormDataFromLocalStorage  } from "./Auth0";
import loding from '../assets/loding.svg'

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = (values, { setErrors, setSubmitting }) => {
    const user = getFormDataFromLocalStorage(values.email);

    setTimeout(() => {
      if (user && user.password === values.password) {
        localStorage.setItem("authenticate", true);
        navigate("/");
      } else {
        setErrors({ password: "Invalid email or password" });
      }

      setSubmitting(false);
    }, 2000); 
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const personSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
      .required("Enter your email"),
    password: yup
      .string()
      .min(8, "Minimum 8 characters required")
      .required("Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
      ),
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={personSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
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
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
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
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>

              <button
                type="submit"
                className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
