import React from "react";

export default function Family({ data }) {
  console.log(data, "the data page data");
  const familyList = data.family_list;
  console.log(familyList);
  return (
    <div className='w3-animate-opacity'>
      <table className='table table-striped mb-5'>
        <thead>
          <tr>
            <th>Relaltion</th>
            <th>Is Alive</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Living Status</th>
          </tr>
        </thead>
        <tbody>
          {familyList.map((res) => {
            return (
              <tr>
                <td>{res?.relation?.[1]}</td>
                <td>{res?.is_alive ? "Yes" : "No"}</td>
                <td>{res?.gender?.[1]}</td>
                <td>{res?.phone || "Null"}</td>
                <td>{res?.living_status?.[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
