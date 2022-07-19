import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { main } from "../ContextApi";
import "./login.css";
import { ToastContainer, toast, ToastTransition } from "react-toastify";

export default function LogIn() {
  const auth = useContext(main);

  const [alertShow, setAlertShow] = useState(true);
  // const showAlert = () => {
  //   toast.dark("Login using this form", {
  //     position: "top-center",
  //   });
  // };

  useEffect(() => {
    setAlertShow(false);
  }, []);
  if (alertShow) {
    toast.dark("plese login");
  }
  const [formValues, setFormValues] = useState({});

  // =======getAge=====

  function getAge(dob) {
    var dob = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    return age;
  }
  //   ====validation====
  const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
      errors.name = "The name is required";
    } else if (formValues.name.length < 4 || formValues.name.length > 20) {
      errors.name = "Provide valid name";
    }
    if (!formValues.email) {
      errors.email = "The email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
    ) {
      errors.email = "Provid valid email";
    }
    if (!formValues.password) {
      errors.password = "The password is required";
    } else if (
      formValues.password.length < 4 ||
      formValues.password.length > 10
    ) {
      errors.password = "The password must be 4 to 10 digit";
    }
    if (!formValues.repassword) {
      errors.repassword = "The repassword is required";
    } else if (formValues.password !== formValues.repassword) {
      errors.repassword = "Password and repassword not match";
    }
    if (!formValues.age) {
      errors.age = "The age field is required";
    } else if (formValues.age < 10 || formValues.age > 60) {
      errors.age = "Provide valid age";
    }
    if (!formValues.dob) {
      errors.dob = "The DOB field is required";
    } else if (getAge(formValues.dob) !== formValues.age) {
      errors.dob = "Age and DOB does not match";
    }
    if (!formValues.address.trim()) {
      errors.address = "The address is required";
    } else if (
      formValues.address.trim().length < 10 ||
      formValues.address.trim().length > 50
    ) {
      errors.address = "Provide valid address";
    }
    if (!formValues.phone) {
      errors.phone = "The phone no is required";
    } else if (formValues.phone.toString().length < 6) {
      errors.phone = "Provide valid phone no";
    }
    if (!formValues.state) {
      errors.state = "The state is required";
    }

    return errors;
  };
  // ====form-validation======
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      age: "",
      dob: "",
      address: "",
      phone: "",
      gender: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values, "the value is");
      setFormValues(values);
      auth.setFormValues(values);
      auth.isUserLogIn();
    },
  });
  // =========
  const stateOptions = [
    { value: "tamil nadu", label: "Tamil Nadu" },
    { value: "andhra", label: "Andhra" },
    { value: "kerala", label: "Kerala" },
    { value: "delhi", label: "Delhi" },
  ];
  // ========
  const showValues = () => {
    console.log(formValues, "state");
  };
  return (
    <div className='log-in-form-outside'>
      <h2>Log in form</h2>
      <form className='log-in-form' onSubmit={formik.handleSubmit}>
        <div className='name-email row'>
          <div className='col-md-6 name'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className='errors'>{formik.errors.name} </div>
            ) : null}
          </div>
          <div className='col-md-6 email'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='errors'>{formik.errors.email} </div>
            ) : null}
          </div>
        </div>
        <div className='row password-repassword-age-dob'>
          <div className='col-md-6 password'>
            <label>password</label>
            <input
              type='password'
              name='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className='errors'>{formik.errors.password} </div>
            ) : null}
          </div>
          <div className='col-md-6 repassword'>
            <label>Repassword</label>
            <input
              type='password'
              name='repassword'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.repassword && formik.errors.repassword ? (
              <div className='errors'>{formik.errors.repassword} </div>
            ) : null}
          </div>
          <div className='col-md-6 age'>
            <label>Age</label>
            <input
              type='number'
              name='age'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.age && formik.errors.age ? (
              <div className='errors'>{formik.errors.age} </div>
            ) : null}
          </div>
          <div className='col-md-6 dob'>
            <label>DOB</label>
            <input
              type='date'
              name='dob'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dob && formik.errors.dob ? (
              <div className='errors'>{formik.errors.dob} </div>
            ) : null}
          </div>
        </div>
        <div className='row address-phone-state'>
          <div className='col-md-4 address'>
            <label>Address</label>

            <textarea
              name='address'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className='errors'>{formik.errors.address} </div>
            ) : null}
          </div>
          <div className='col-md-4 phone'>
            <label>Phone</label>
            <input
              type='number'
              name='phone'
              onChange={formik.handleChange}
              placeholder={"91+"}
              onBlur={formik.handleBlur}
              onKeyPress={(e) =>
                e.target.value.length > 10 && e.preventDefault()
              }
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className='errors'>{formik.errors.phone} </div>
            ) : null}
          </div>
          <div className='col-md-4 states'>
            <label>gender</label>
            <Select
              options={stateOptions}
              onChange={(e) => formik.setFieldValue("state", e.value)}
              name='state'
            />
            {formik.errors.state ? <div> {formik.errors.state}</div> : null}
            {/* {/* <input type="text" name="gender" onChange={formik.handleChange} />  */}
          </div>
        </div>
        <div className='submit-button'>
          <button
            type='submit'
            className='log-in-button'
            onClick={() => showValues()}>
            Log In
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
