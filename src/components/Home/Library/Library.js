import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { main } from "../../ContextApi";
import "./library.css";
import data from "./libraryData.json";
export default function Library() {
  const auth = useContext(main)
  const handleNothing = () => {
    toast.info("Nothing to show", {
      position: "top-center"
    })
  }
  const [showModal, setShowModal] = useState(false)
  const handledate = () => {
    setShowModal(true)
    setDate("")
  }
  const images = [
    "https://images.unsplash.com/photo-1529007196863-d07650a3f0ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1567057420215-0afa9aa9253a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    "https://images.unsplash.com/photo-1490424660416-359912d314b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1532294220147-279399e4e00f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ];
  //  ====Modal-part=====
  const [date, setDate] = useState()
  const handleOkClick = (e) => {
    console.log(date, "the selected date is")
    setShowModal(false)
    if (!date) {
      toast.error("Please select date", {
        position: "top-center"
      })
    } else if (new Date(date).getFullYear() < new Date().getFullYear() || new Date(date).getFullYear() > new Date().getFullYear()) {
      toast("Please select valid date", {
        type: "error",
        position: "top-center"
      })
    } else {
      Swal.fire({
        text: "Your Date is Booked",
        icon: "success",
        type: "success"
      })
    }
  }
  const handleDateChange = (e) => {
    setDate(e.target.value)

  }
  const handleBuyNow = () => {
    if (!date) {
      auth.setAlertType("error")
      auth.setAlertTitle("Please select Date")
      auth.setAlertStatus(true)
    } else {
      auth.setAlertType("Success")
      auth.setAlertTitle("Book was orderd")
      auth.setAlertStatus(true)
    }

  }
  return (
    <div >
      <div className="library-top-img">
        {images.map((res) => {
          return (
            <div className="individual-card" onClick={() => handleNothing()}>
              <img src={res} />
              <button className="more-info-button">More info</button>
            </div>
          );
        })}
      </div>
      <ToastContainer />
      <div className="library-table-outside">
        <table className="library-table table table-striped ">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Img</th>
              <th>Name</th>
              <th>Count</th>
              <th>Booking</th>
              <th>Rent</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {
              data.map((res, index) => {
                return <>
                  <tr className="table-row">
                    <td >{index + 1} </td>
                    <td><img height={60} width={60} style={{ objectFit: "cover" }} className="rounded-circle" src={res.img} /></td>
                    <td>{res.name}</td>
                    <td>{res.count}</td>
                    <td><button className="btn-sm" onClick={handledate}>Date</button></td>
                    <td><FontAwesomeIcon onClick={handleBuyNow} icon={faCartPlus} /></td>
                  </tr>
                </>
              })
            }
          </tbody>
        </table>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} >
        <Modal.Header>Set date</Modal.Header>
        <Modal.Body>
          <div style={{ border: "1px solid black", padding: "5px", width: "200px", margin: "auto", borderRadius: "5px" }}> <span>Enter date</span><input style={{ background: "none", border: "none", }} type="date" onChange={handleDateChange} /></div>
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-footer-button w-50 d-flex  justify-content-between mx-auto">
            <Button variant="success" onClick={handleOkClick} style={{ width: "80px" }}>Ok</Button>
            <Button variant={"danger"} onClick={() => setShowModal(false)} style={{ width: "80px" }}>Cancel</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
