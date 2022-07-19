import React from "react";
import "./dataencrypt.css";
import EncryptForm from "./Form";

export default function DataEncrypt() {
  return (
    <div className='encrypt-form'>
      <div className='form-part'>
        <EncryptForm />
      </div>
      <div className='right-img'>
        <img
          src='https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg'
          alt='Loading'
        />
      </div>
    </div>
  );
}
