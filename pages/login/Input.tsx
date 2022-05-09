import React from "react";

import styles from "./Input.module.css";

export default function Input(props: any) {
  const { label, name, formik, ...attr } = props;
  return (
    <div className={styles.container}>
      <label className={styles.input_label}>{label}</label>
      <input
        className={styles.input_field}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        {...attr}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <p className={styles.error}>{formik.errors[name]}</p>
      ) : null}
    </div>
  );
}
