import React from "react";
import { useState } from "react";
import "./statusbar.css";
import ReactPaginate from "react-paginate";
import ChartData from "./Chart";

export default function StatusBar() {
  const [inputData, setInputData] = useState({});
  const [totalFormValue, setTotalFormValue] = useState([]);
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = () => {
    setTotalFormValue([...totalFormValue, inputData]);
    console.log(totalFormValue, "the total form value is");
    setInputData("");
  };
  // ===table-body======
  const tableBody = () => {
    return (
      <>
        {finalData?.map((res) => {
          return (
            <tr>
              <td>{res.name}</td>
              <td>{res.performance}</td>
            </tr>
          );
        })}
      </>
    );
  };
  // =======pagination-function=========
  const [page, setPage] = useState(0);
  const itemsPerPage = 5;
  const startPage = itemsPerPage * page;
  const finalData = totalFormValue.slice(startPage, startPage + itemsPerPage);
  const handlePageChange = ({ selected }) => {
    console.log(selected, "the selected page");
    setPage(selected);
  };
  const pageCount = Math.ceil(totalFormValue.length / itemsPerPage);
  // ====top-status-images======
  const statusImages = [
    "https://files.oyebesmartest.com/uploads/preview/-1157022260092futvexfm.jpg",
    "https://i.pinimg.com/564x/8f/f0/09/8ff0098cb277e90e05060fa8122cdcee.jpg",
    "https://modelsonly.in/wp-content/uploads/2019/03/2-5-480x580_t.jpeg",
    "https://media.istockphoto.com/photos/fashion-is-fearless-picture-id535455049?k=20&m=535455049&s=612x612&w=0&h=Nsp24MdAffVOivEZei22jG_yXnqseYhDdI-L-zqaZhs=",
    "https://data.whicdn.com/images/12677239/original.jpg",
  ];
  return (
    <div className='right-side-status-bar'>
      <div className='top-images'>
        {statusImages?.map((res) => {
          return (
            <>
              <img src={res} />
            </>
          );
        })}
      </div>
      <div className='label-input'>
        <label>Name</label>
        <input
          type='text'
          name='name'
          onChange={handleChange}
          value={inputData.name || ""}
        />
        <label>Performance</label>
        <input
          type='number'
          name='performance'
          onChange={handleChange}
          value={inputData.performance || ""}
        />
        <div className='submit-button'>
          <button
            className='btn btn-danger btn-sm'
            type='submit'
            onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className='table-dyanamic'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Performance</th>
            </tr>
          </thead>
          <tbody>
            {totalFormValue.length === 0 ? (
              <p className='text-center'>No record to display</p>
            ) : (
              tableBody()
            )}
          </tbody>
        </table>
        {totalFormValue.length > 4 && (
          <div className='w3-animate-opacity'>
            <ReactPaginate
              previousLabel='Previos'
              nextLabel='Next'
              onPageChange={handlePageChange}
              pageCount={pageCount}
              containerClassName='total-button'
              previousClassName=' previosButton'
              nextClassName='nextButton'
              activeClassName='button-active'
            />
          </div>
        )}
      </div>
      <div className='status-chart'>
        <ChartData inputData={finalData} />
      </div>
    </div>
  );
}
