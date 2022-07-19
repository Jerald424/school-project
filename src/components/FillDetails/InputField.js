import React from "react";
import { useField, ErrorMessage } from "formik";

export default function InputField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className='input-field'>
      <label htmlFor={field.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={`form-control shadow-none m-0 p-0 ${
          meta.touched && meta.error && "is-invalid"
        }`}
      />
      <ErrorMessage
        component='div'
        name={field.name}
        className='error-message'
      />
    </div>
  );
}
