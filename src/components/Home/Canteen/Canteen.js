import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Testing from "./Testing";
import "./canteen.css";

export default function Canteen() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();
  const [filteredData, setFilterdData] = useState([]);
  console.log(search, "the search the is");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setData(res.data);
        setFilterdData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const column = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },

    {
      name: "Body",
      selector: (row) => row.body,
    },
  ];
  useEffect(() => {
    const datas = data.filter((res) => {
      return res?.name?.toLowerCase().match(search?.toLowerCase());
    });

    setFilterdData(datas);
  }, [search]);

  return (
    <div>
      {/* <DataTable
        columns={column}
        data={filteredData}
        pagination
        title='Student Data'
        fixedHeader
        fixedHeaderScrollHeight='400px'
        //selectableRows
        //selectableRowsHighlight

        subHeader
        subHeaderComponent={
          <input
            type='text'
            className='form-control'
            style={{ width: "200px" }}
            placeholder='search here'
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      /> */}
      <div className='testing-data-table'>
        <Testing />
      </div>
    </div>
  );
}
