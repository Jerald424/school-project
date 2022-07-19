import React, { lazy, Suspense, useEffect, useState } from "react";
import axiosInstance from "../Service/AxiosInstance";
import "./studentdatadisplay.css";
import "react-tabs/style/react-tabs.css";
const MyTab = lazy(() => import("./TabsForStudentData"));

export default function StudenDataDisplay() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axiosInstance("/student-profile", { method: "GET", data: {} })
      .then((res) => {
        setApiData(res?.data?.result[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);
  const data = apiData;
  console.log(data, "the data is");
  if (isLoading === true) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Connection error</p>;
  }
  return (
    <div className='total w3-animate-opacity'>
      <div className='header-outside'>
        <div className='header'>
          <img
            src={require("./assetsForData/5a219145388087.5866319615121493172314.png")}
            className='left-icon '
          />
          <h5>College site</h5>
          <img
            src={require("./assetsForData/christopher-campbell-rDEOVtE7vOs-unsplash.jpg")}
            className='right-icon'
          />
        </div>
      </div>
      <div className='student-data-table'>
        <div className='student-inside-table'>
          <h4>{data?.name} Info</h4>
          <div className='student-table-part'>
            <div className='table-first-key-value'>
              <div className='table-first-key'>
                <p>Roll No</p>
                <p>DOB</p>
                <p>Gender</p>
                <p>Religion</p>
                <p>Community</p>
              </div>
              <div className='table-first-value'>
                <p>{data?.roll_no}</p>
                <p>{data?.dob}</p>
                <p>{data?.gender[1]}</p>
                <p>{data?.religion[1]}</p>
                <p>{data?.community[1]}</p>
              </div>
            </div>
            <div className='table-second-key-value'>
              <div className='table-second-key'>
                <p>Mother Tongue</p>
                <p>Admission No</p>
                <p>Department</p>
                <p>Mirtual Status</p>
                <p>Email</p>
              </div>
              <div className='table-second-value'>
                <p>{data?.mother_tongue[1]}</p>
                <p>{data?.admission_no}</p>
                <p>{data?.department[1]}</p>
                <p>{data?.marital_status[1]}</p>
                <p>{data?.email}</p>
              </div>
            </div>
          </div>
          <div>
            <Suspense fallback={<div> Is Loading</div>}>
              <MyTab
                data={data}
                doorDetail={data?.door_detail}
                street={data?.street}
                place={data.place}
                city={data?.res?.district}
                taluk={data?.res_taluk?.[1]}
                district={data?.district[1]}
                state={data?.state[1]}
                pincode={data?.zip}
                country={data?.state[1]}>
                {" "}
              </MyTab>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
