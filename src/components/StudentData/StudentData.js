import React, { useContext } from "react";
import { main } from "../ContextApi";
import "./studentdata.css";

export default function StudentData() {
  const auth = useContext(main);
  const data = auth.studentApiData;
  console.log(auth.studentApiData, "the student data page");
  return (
    <div className='total-table-page'>
      <h3>Students profile</h3>

      <div className='studentCommenDetails'>
        <div className='first-key-value'>
          <div className='first-key'>
            <p>Roll No</p>
            <p>DOB</p>
            <p>Gender</p>
            <p>Religion</p>
            <p>Community</p>
          </div>
          <div className='first-value'>
            <p>{data?.roll_no}</p>
            <p>{data?.dob}</p>
            <p>{data?.gender[1]}</p>
            <p>{data?.religion[1]}</p>
            <p>{data?.community[1]}</p>
          </div>
        </div>
        <div className='second-key-value'>
          <div className='second-key'>
            <p>Mother Tongue</p>
            <p>Admission No</p>
            <p>Department</p>
            <p>Mirtual Status</p>
            <p>Email</p>
          </div>

          <div className='second-value'>
            <p>{data?.mother_tongue[1]}</p>
            <p>{data?.admission_no}</p>
            <p>{data?.department[1]}</p>
            <p>{data?.marital_status[1]}</p>
            <p>{data?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
