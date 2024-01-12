import React, { useEffect } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
  
  const navigate = useNavigate();

  useEffect(() => {
    const storedSuccess = localStorage.getItem("success");

    if (storedSuccess === "true") {
      console.log(storedSuccess)
    }
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  function validateForm(values) {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  }

  const handleFormSubmit = (values, actions) => {
    const obj = {
      email: values.email,
      password: values.password,
    };

    axios
      .post("http://143.110.254.91/chandigarh-sweets/public/api/login", obj)
      .then((response) => {
        //console.log("success:", response.data.success);
        localStorage.setItem("success", response.data.success);
        //console.log("data:", response.data);
        alert(response.data.message);

        if (response.data.success === true) {
          navigate("/Home"); // Navigate to the home page upon successful login
        
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred");
      });
  };

  return (
    <div>
          <h1>Login page </h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <label>Email:</label>
          <Field type="email" name="email" placeholder="Enter email" /><br />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />

          <label>Password:</label>
          <Field type="password" name="password" placeholder="Enter password" /><br />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;

