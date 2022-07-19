import React, { useEffect, useState } from "react";
import "./encryptDataDisplay.css";
import axiosInstance from "../../Service/AxiosInstance";
import { Button, Modal } from "react-bootstrap";
import EncryptForm from "../DataEncrypt/Form";
import { Link } from "react-router-dom";

export default function EncryptDataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance("school/", { method: "GET" })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  // =====modalShower=====
  // const name = "clarance";
  // console.log(btoa(name));
  const modalShower = (id) => {
    setId(id);
    setShowModal(true);
  };
  return (
    <div className='student-data-totally'>
      <h2>Student data display</h2>
      <div className='en-data-outside'>
        {data?.map((res) => {
          return (
            <>
              <div className='en-data-display'>
                <div className='en-std-avatar'>
                  <img src='https://cdn.icon-icons.com/icons2/3310/PNG/512/student_man_avatar_user_toga_school_university_icon_209264.png' />
                </div>
                <div className='total-right-part'>
                  <div className='name-email-password'>
                    <div className='en-name'>
                      <span className='en-span'>Name</span>
                      <p>{res?.name}</p>
                    </div>
                    <div className='en-email'>
                      <span className='en-span'>Email</span>
                      <p>{res?.email}</p>
                    </div>
                    <div className='en-password'>
                      <span className='en-span'>Password</span>
                      {atob(res?.password)}
                    </div>
                    <div className='en-age'>
                      <span className='en-span'>Age</span>
                      {res?.age}
                    </div>
                  </div>
                  <div className='right-button-part'>
                    <button onClick={() => modalShower(res.id)}>Alter</button>
                    <Link to={`/dataencrypt/${btoa(res.id)}`}>
                      <button className=''>Alter 2</button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div>
        <Modal show={showModal}>
          <Modal.Body>
            {/* <EncryptForm id2={id} modal={setShowModal} /> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant='danger' onClick={() => setShowModal(false)}>
              Exit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
