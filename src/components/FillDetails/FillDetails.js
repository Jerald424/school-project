import React, { useState } from "react";
import { Formik, Form } from "formik";
import InputField from "./InputField";
import "./fllstudent.css";
import * as Yup from "yup";
import Select from "react-select";
export default function FillDetails() {
  const validate = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 or less cahracter")
      .required("The name is required"),
    email: Yup.string()
      .email("Provide valid email")
      .required("The email is required"),
    dob: Yup.string().required("The dob is required"),
    gender: Yup.string().required("The name is required"),
    password: Yup.string()
      .min(5, "Atleast 5 letter required")
      .max(15, "Must be 15 or less charecter")
      .required("The email is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password is miss match")
      .required("The confirm password is required"),
  });
  const [data, setData] = useState({});
  // ======genderOptions=====
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Others" },
  ];
  return (
    <div className='row m-0'>
      <div className='col-md-6 p-0 student-form'>
        <Formik
          initialValues={{
            name: "",
            email: "",
            dob: "",
            gender: "",
            avgmark: "",
            password: "",
            confirmpassword: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            setData(values);
          }}>
          {(formik) => (
            <div>
              <h3 className='text-center fw-bold'>Student Personal Data</h3>
              {console.log(formik.values)}
              <Form>
                <InputField label='Name' name='name' type='text' />
                <InputField label='Email' name='email' type='email' />
                <div className='dob-age'>
                  <div className='dob'>
                    <InputField
                      label='Dob'
                      name='dob'
                      type='date'
                      className='dob'
                    />
                  </div>
                  {data?.dob && (
                    <div className='calculate-age'>
                      <span>6</span>
                    </div>
                  )}
                </div>
                <div className='form-gender'>
                  <label>Gender</label>
                  <Select
                    // defaultInputValue='Male'
                    options={genderOptions}
                    onChange={(e) => formik.setFieldValue("gender", e.value)}
                    name='gender'
                  />
                </div>
                <InputField label='Password' name='password' type='password' />
                <InputField
                  label='Confirm pass'
                  name='confirmpassword'
                  type='password'
                />

                <button className='btn btn-dark btn-sm' type='submit'>
                  Register
                </button>
                <button className='btn btn-danger btn-sm' type='reset'>
                  Reset
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
      <div className='col-md-6 p-0 right-img'>
        <img src='https://img.freepik.com/free-vector/group-college-university-students-hanging-out_74855-5251.jpg?w=2000' />
      </div>
    </div>
  );
}
