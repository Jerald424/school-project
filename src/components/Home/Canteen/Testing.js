import { faPenAlt, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import data from "./MOCK_DATA.json";

export default function Testing() {
  const [search, setSearch] = useState("");

  const columns = [
    {
      name: "Name",
      selector: (row) => row.first_name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "City",
      selector: (row) => row.city,
    },
    {
      name: "Actions",
      cell: (row) => (
        <button className='btn btn-danger btn-sm' style={{ height: "28px" }}>
          Do Any
        </button>
      ),
    },
    {
      name: "Alter",
      cell: (row) => <FontAwesomeIcon icon={faUserPen} className='edit-user' />,
    },
  ];
  return (
    <div>
      <DataTable
        data={data.filter((user) => {
          return user.first_name.toLowerCase().includes(search);
        })}
        columns={columns}
        pagination
        subHeader
        subHeaderComponent={
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search by name'
            type='text'
            className='form-control'
            style={{ width: "200px" }}
          />
        }
        highlightOnHover
        fixedHeader
        fixedHeaderScrollHeight='400px'
      />
    </div>
  );
}
