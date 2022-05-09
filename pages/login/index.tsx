import React, { useState } from "react";
import { MenuBar } from "../../component/menuBar";

import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import login from "../util/api/login";

import Loader from "../Loader";

import styles from "./index.module.css";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: "",
    token: "",
  });
  const [error, setError] = useState({
    error: "",
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, "Must be 5 characters or more")
        .max(20, "Must be 20 characters or less")
        .required("Username is required"),

      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .max(16, "Must be 16 characters or less")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      console.log(values);
      const { username, password } = values;
      const [data, error] = await login({ username, password });
      console.log("Data", data);
      setData(data);
      console.log("Error", error);
      setError(error);
      setLoading(false);
      formik.resetForm();
    },
  });
  return (
    <div>
      <MenuBar />
      <div className={styles.container}>
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit} className={styles.form_container}>
          <Input
            label="Username"
            name="username"
            placeholder="Enter Username"
            formik={formik}
          />
          <Input
            label="Password"
            name="password"
            placeholder="Enter Password"
            formik={formik}
          />
          <button className={styles.submit_btn} type="submit">
            Submit
          </button>
        </form>
        {loading && <Loader />}
        {error && <p className="error-msg">{error.error}</p>}
        {data.token && <p className="success-msg">Logged In Success</p>}
      </div>
    </div>
  );
};

export default Signup;