import React, { useEffect, useState } from "react";
import { object } from "yup";
import AxiosInstance from "../../Service/AxiosInstance";
import { groupingData } from "../CommenFunctions";

export default function Tesitng() {
  const [values, setValues] = useState([]);
  const [groupedData, setGroupData] = useState([]);
  useEffect(() => {
    AxiosInstance("school/", { method: "GET" })
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);
  //console.log(values);

  const handleGroup = () => {
    const result = groupingData(values, "className");
    console.log(result);
  };

  return (
    <div className='text-center'>
      <button className='btn btn-dark btn-sm' onClick={handleGroup}>
        Group
      </button>
    </div>
  );
}
