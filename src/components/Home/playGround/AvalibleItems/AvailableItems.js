import {
  faCartArrowDown,
  faCodePullRequest,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import "./availableitem.css";
import data from "./data.json";

export default function AvailableItems() {
  const handleRequest = () => {
    Swal.fire({
      title: "Enter Details",
      inputLabel: "Enter Name",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "submit",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return login
          ? toast.dark(` ${login} requested updated`)
          : toast.error("Enter valid name");
      },
    });
  };
  // ====modal=====
  const [modalShow, setModalShow] = useState(false);
  const handleBook = () => {
    setModalShow(true);
  };
  const [itemCount, setItemCount] = useState(1);
  const countMinus = () => {
    setItemCount(itemCount - 1);
  };
  const handleOk = () => {
    setModalShow(false);
    toast.success(`${itemCount} Item bookd`, {
      position: "top-center",
    });
  };
  return (
    <div className='sports-total-table'>
      <table class='table table-striped sports-table '>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Itemname</th>
            <th>BookedFor</th>
            <th>Request</th>
            <th>Count</th>
            <th>Book</th>
          </tr>
        </thead>
        <tbody>
          {data.map((res, index) => {
            return (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{res.itemname}</td>
                  <td>{res.bookedfor}</td>
                  <td>
                    <button
                      onClick={() => handleRequest()}
                      className='btn btn-info btn-sm'
                      style={{
                        padding: 0,
                        paddingLeft: "4px",
                        paddingRight: "4px",
                        width: "80px",
                        height: "30px",
                      }}>
                      Request <FontAwesomeIcon icon={faCodePullRequest} />
                    </button>
                  </td>
                  <td>
                    <div className='count-total'>
                      <button
                        style={{ border: "none" }}
                        disabled={itemCount <= 1}
                        className='count-minus'
                        onClick={() => countMinus()}>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>

                      <span className='count'>{itemCount}</span>
                      <button
                        disabled={itemCount >= 10}
                        style={{ border: "none" }}
                        className='count-plus'
                        onClick={() => setItemCount(itemCount + 1)}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => handleBook()}
                      className='btn btn-success btn-sm'
                      style={{
                        width: "70px",
                        padding: 0,
                        height: "30px",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                      }}>
                      Book <FontAwesomeIcon icon={faCartArrowDown} />
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <ToastContainer />
      <div id='available-itmes'>
        <Modal dialogClassName='fullscreen-modal' show={modalShow} centered>
          <Modal.Header>
            <h3>{`Your count  ${itemCount}`}</h3>
          </Modal.Header>
          <Modal.Body>Are you sure to book this item</Modal.Body>
          <Modal.Footer>
            <Button variant='success' onClick={() => handleOk()}>
              Ok
            </Button>
            <Button onClick={() => setModalShow(false)} variant='danger'>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
