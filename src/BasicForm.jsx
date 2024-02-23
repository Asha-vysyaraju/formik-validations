import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react"
const newLocal = "Need a longer Password ";
const formValidationSchema = yup.object({
  password: yup
    .string()
    .min(8, "Need a longer password")
    .max(12, "too much password")
    .required("fill the password")
    .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@_#/&*]).{8,}$/,"password pattern doesnot match"),
  email: yup.string().min(5, "Need a longer Email").required("fill the email")
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Pattern not Matched"),
});
export function BasicForm() {
    const [showPassword,setShowPassword]=useState(false)
  const formik = useFormik({
    initialValues: { email: "abc@gmail.com", password: "abc123" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });
  const togglePassword=()=>{
 setShowPassword(password)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          id="email"
          name="email"
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          id="password"
          name="password"
          onBlur={formik.handleBlur}
        />
        <button type="button" onClick={togglePassword} >{showPassword ? "Hide":"show"}</button>
        {formik.touched.password && formik.errors.password
          ? formik.errors.password
          : ""}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
