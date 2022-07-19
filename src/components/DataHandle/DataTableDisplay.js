import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../Service/AxiosInstance";
import "./datahandle.css";
import Select from "react-select";
import { sortingascending } from "../CommenFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { main } from "../ContextApi";
import ReactPaginate from "react-paginate";
import Tesitng from "./Tesitng";

// =============

// ============

export default function DataTableDisplay() {
  const [values, setValues] = useState([]);
  const auth = useContext(main);
  const getData = () => {
    axiosInstance("school/", {
      method: "GET",
    })
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  // =============
  const [orderType, setOrderType] = useState(true);
  const [highLight, setHighLight] = useState("");

  const handleSort = (name) => {
    setHighLight(name);
    const result = sortingascending(name, values, orderType);
    setValues(result);
    setOrderType(!orderType);
  };

  // ====delete====
  const handleDelete = (id) => {
    axiosInstance(`school/${id}/`, { method: "DELETE" })
      .then((res) => {
        console.log(res);
        if (res.status === 204) {
          getData();
          auth.setAlertType("info");
          auth.setAlertTitle("Data Deleted");
          auth.setAlertStatus(true);
        }
      })
      .catch((err) => console.log(err));
  };

  // ======select-part=========
  const [selectValues, setSelectValues] = useState("");
  const classOptions = [
    { value: "12th", label: "12th" },
    { value: "8th", label: "8th" },
    { value: "10th", label: "10th" },
  ];
  const bloodOptions = [
    { value: "o+", label: "o+" },
    { value: "b+", label: "b+" },
    { value: "ab-", label: "ab-" },
  ];
  const haddleselect = (e, name) => {
    console.log(e.value, "888888");
    setSelectValues(e.value);
  };
  const handleEnter = () => {
    setSelectValues("");
  };
  const [search, setSearch] = useState("");

  // ========paginations==========
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const startPage = itemsPerPage * currentPage;
  const displayItem = values.slice(startPage, startPage + itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const pageCount = Math.ceil(values.length / itemsPerPage);
  // =============
  return (
    <div>
      <div className='sorting-data'>
        <div className='sorting-data-select'>
          <label>Class</label>
          <Select
            options={classOptions}
            onChange={(e) => haddleselect(e, "class")}
            // value={selectValues}
          />
        </div>
        <div className='sorting-data-select'>
          <label>Blood</label>
          <Select
            options={bloodOptions}
            onChange={(e) => haddleselect(e, "bloodgroup")}
            // value={selectValues}
          />
        </div>
        <div className='search-button'>
          <button
            style={{ width: "80px" }}
            className='btn btn-dark btn-sm'
            onClick={handleEnter}>
            Clear
          </button>
        </div>
      </div>
      <div className='table-handle'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Sno</th>
              <th onClick={() => handleSort("name")}>
                Name{" "}
                <span
                  className={`sort-items-design ${
                    highLight === "name" && "bg-warning text-dark"
                  }`}>
                  {orderType ? "Ascend" : "Descend"}
                </span>
              </th>
              <th onClick={() => handleSort("email")}>
                Email{" "}
                <span
                  className={`sort-items-design ${
                    highLight === "email" && "bg-warning text-dark"
                  }`}>
                  {orderType ? "Ascend" : "Descend"}
                </span>
              </th>
              <th onClick={() => handleSort("age")}>
                Age{" "}
                <span
                  className={`sort-items-design ${
                    highLight === "age" && "bg-warning text-dark"
                  }`}>
                  {orderType ? "Ascend" : "Descend"}
                </span>
              </th>
              <th onClick={() => handleSort("password")}>
                Password{" "}
                <span
                  className={`sort-items-design ${
                    highLight === "password" && "bg-warning text-dark"
                  }`}>
                  {orderType ? "Ascend" : "Descend"}
                </span>
              </th>
              <th>Class</th>
              <th>Blood Group</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {displayItem
              ?.filter(
                (res) =>
                  res?.className.includes(selectValues) ||
                  res?.bloodGroup.includes(selectValues)
              )
              .map((res, index) => {
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{res.name}</td>
                      <td>{res.email}</td>
                      <td>{res.age}</td>
                      <td>{atob(res.password)}</td>
                      <td>{res.className}</td>
                      <td>{res.bloodGroup}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className='text-danger'
                          onClick={() => handleDelete(res.id)}
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        previousLabel='Prvious'
        nextLabel='Next'
        onPageChange={handlePageChange}
        pageCount={pageCount}
        containerClassName='pagenationButtons'
        previousLinkClassName='previosButtons'
        nextLinkClassName='nextButtons'
        activeClassName='paginationActive'
      />
      <Tesitng />
    </div>
  );
}
