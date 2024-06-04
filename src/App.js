import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function App() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(6, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
  });

  function handleSubmit(values) {
    localStorage.setItem("formData", JSON.stringify(values));
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="box-border w-1/2 mx-auto mt-12 p-6 bg-red-500 flex flex-col gap-6">
          <Field
            type="text"
            name="name"
            placeholder="name"
            className="py-1 px-4 text-2xl text-black placeholder-black rounded-xl"
          />
          <ErrorMessage name="name" />

          <Field
            type="email"
            name="email"
            placeholder="email"
            className="py-1 px-4 text-2xl text-black placeholder-black rounded-xl"
          />
          <ErrorMessage name="email" />

          <Field
            type="password"
            name="password"
            placeholder="password"
            className="py-1 px-4 text-2xl text-black placeholder-black rounded-xl"
          />
          <ErrorMessage name="password" />

          <button
            type="submit"
            className="w-fit mx-auto text-2xl text-white bg-purple-900 px-4 py-1 rounded-xl"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
