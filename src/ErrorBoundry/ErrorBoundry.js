import React, { useState } from "react";
import "./chartdiagram.css";

export default function ErrorBoundry() {
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  function handleClick(data) {
    setTotalData((totalData) => [...totalData, data]);
    console.log(totalData, "the tota; data");
  }
  return (
    <div>
      <form className='chart-input-form' onSubmit={handleSubmit}>
        <div className='label-input'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            className='form-control'
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className='label-input'>
          <label>Performance</label>
          <input
            type='number'
            name='performance'
            className='form-control'
            onChange={(e) => setData({ ...data, performance: e.target.value })}
          />
        </div>
        <div className='button-part'>
          <button
            className='btn btn-dark btn-sm'
            type='submit'
            onClick={() => handleClick(data)}>
            Post
          </button>
        </div>
      </form>
      <div className='table-part'>
        <table className='table table-striped'>
          <thead>
            <th>Name</th>
            <th>Performance</th>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
