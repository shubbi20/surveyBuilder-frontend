import { MenuBar } from "../../component/menuBar";

import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../loginutil/signup";

//import styles from "./index.module.css";
import styles from "../../styles/sign.module.css";
import signup from "../../api/signup";
import { useAtom } from "jotai";
import { tokenAtom, userAtom } from "../../state-machine/designer";
import { useRouter } from "next/router";
import { message } from "antd";

const SignUp = () => {
  const router = useRouter();
  const [token, setToken] = useAtom(tokenAtom);
  const [user, setUser] = useAtom(userAtom);
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      age: "",
      mobile: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Must be 5 characters or more")
        .max(15, "Must be 15 characters or less")
        .required("Name is required"),

      username: Yup.string()
        .min(5, "Must be 5 characters or more")
        .max(20, "Must be 20 characters or less")
        .required("Username is required"),

      email: Yup.string()
        .email("Must be a valid email")
        .required("Email is required"),

      age: Yup.number()
        .typeError("Must be a number")
        .required("Age is required"),

      mobile: Yup.number()
        .typeError("Must be a number")
        .required("Mobile is required")
        .test("len", "Must be 10 digits", (val: any) =>
          val ? val.toString().length === 10 : false
        ),

      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .max(16, "Must be 16 characters or less")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const { name, username, email, age, mobile, password } = values;
      const [data, error] = await signup({
        name,
        username,
        email,
        age,
        mobile,
        password,
      });
      if (data) {
        console.log(data.token);
        router.push("/login");
        return;
      }
      console.log("Error", error);
      formik.resetForm();
    },
  });
  return (
    <div>
      <MenuBar />
      <div className={styles.container}>
        <h2>Create Account</h2>
        <form onSubmit={formik.handleSubmit} className={styles.form_container}>
          <Input
            label="Name"
            name="name"
            placeholder="Enter Name"
            formik={formik}
          />
          <Input
            label="Username"
            name="username"
            placeholder="Enter Username"
            formik={formik}
          />
          <Input
            label="Email"
            name="email"
            placeholder="Enter Email"
            formik={formik}
          />
          <Input
            label="Age"
            name="age"
            placeholder="Enter Age"
            formik={formik}
          />
          <Input
            label="Mobile"
            name="mobile"
            placeholder="Enter Mobile"
            formik={formik}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter Password"
            formik={formik}
            autoComplete="off"
          />
          <button className={styles.submit_btn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
