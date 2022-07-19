import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import axiosInstance from "../../Service/AxiosInstance";
import Select from "react-select";
import { main } from "../ContextApi";

export default function EncryptForm({ id2, modal }) {
  const auth = useContext(main);
  const [formValues, setFormvalues] = useState({});
  //  ==========formik=========

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "The name is reqiured";
    } else if (values.name.length < 5 || values.name.length > 20) {
      errors.name = "provide valid name";
    }
    if (!values.email) {
      errors.email = "The email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Provide valid email";
    }
    if (!values.password) {
      errors.password = "The password is required";
    } else if (values.password.length < 5 || values.password.length > 10) {
      errors.password = "Password must be 4 to 10 charecter";
    }
    if (!values.age) {
      errors.age = "The age is required";
    } else if (values.age < 10 || values.age > 50) {
      errors.age = "Provide valid age";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      class: "",
      bloodgroup: "",
    },
    validate,
    onSubmit: (values) => {
      setFormvalues(values);

      const encrypt = btoa(formValues.password);

      let url = id2 ? `school/${id2}/` : "school/";
      let methods = id2 ? "PUT" : "POST";

      axiosInstance(url, {
        method: methods,
        data: {
          name: formValues.name,
          email: formValues.email,
          password: encrypt,
          age: formValues.age,
          className: formValues.class,
          bloodGroup: formValues.bloodgroup,
        },
      })
        .then((res) => {
          console.log(res, "the res is");
          if (res.status === 201) {
            auth.setAlertTitle("Details was posted");
            auth.setAlertType("success");
            auth.setAlertStatus(true);
            setFormvalues("");
          } else if (res.status === 200) {
            modal(false);
          }
        })
        .catch((err) => {
          console.log(err, "the error is");
          if (err.response.status === 400) {
            auth.setAlertTitle("Enter all the field");
            auth.setAlertType("error");
            auth.setAlertStatus(true);
          } else {
            auth.setAlertTitle("There was problem to post");
            auth.setAlertType("error");
            auth.setAlertStatus(true);
          }
        });
    },
  });
  const handleEnter = (e) => {
    if (e.key.toLowerCase() === "enter") {
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index + 1].focus();

      e.preventDefault();
    }
  };

  console.log(formValues);
  return (
    <div className='encrypt-form'>
      <div className='form-part'>
        <form onSubmit={formik.handleSubmit} autoComplete='off'>
          <h2>Fill This Form</h2>
          <label>Name</label>
          <input
            onBlur={formik.handleBlur}
            onKeyDown={handleEnter}
            type='text'
            name='name'
            onChange={formik.handleChange}
            value={formValues.name}
          />

          {formik.touched.name && formik.errors.name && (
            <div className='data-encrypt-errors'>{formik.errors.name}</div>
          )}
          <label>Email</label>
          <input
            onBlur={formik.handleBlur}
            onKeyDown={handleEnter}
            type='text'
            name='email'
            onChange={formik.handleChange}
            value={formValues.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className='data-encrypt-errors'>{formik.errors.email}</div>
          )}
          <label>Password</label>
          <input
            onBlur={formik.handleBlur}
            onKeyDown={handleEnter}
            type='password'
            name='password'
            onChange={formik.handleChange}
            value={formValues.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className='data-encrypt-errors'>{formik.errors.password}</div>
          )}
          <label>Age</label>
          <input
            onBlur={formik.handleBlur}
            onKeyDown={handleEnter}
            type='number'
            name='age'
            onChange={formik.handleChange}
            value={formValues.age}
          />
          {formik.touched.age && formik.errors.age && (
            <div className='data-encrypt-errors'>{formik.errors.age}</div>
          )}
          <label>Class </label>
          <select name='class' id='class' onChange={formik.handleChange}>
            <option value='12th'> 12th student</option>
            <option value='10th'> 10th student</option>
            <option value='8th'> 8th student</option>
          </select>

          <label>Blood Group </label>
          <select
            name='bloodgroup'
            id='class'
            onChange={formik.handleChange}
            required>
            <option value='o+'> o+ group</option>
            <option value='b+'> B+ group</option>
            <option value='ab-'> AB - group</option>
          </select>

          <button type='submit'>{id2 ? "Alter" : "Post"}</button>
        </form>
      </div>
    </div>
  );
}
