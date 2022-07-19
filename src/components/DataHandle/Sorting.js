import React, { useState } from "react";

export default function Sorting() {
  const details = [
    { name: "jerald", age: 22 },
    { name: "saba", age: 210 },
    { name: "kittu", age: 22 },
    { name: "agnes", age: 222 },
    { name: "peter", age: 2 },
  ];
  const [data, setData] = useState(details);
  function sorted(name) {
    const sorted = [...data].sort((a, b) =>
      a[name].toLowerCase() > b[name].toLowerCase() ? 1 : -1
    );
    setData(sorted);
  }
  //   sorted("name");
  console.log(data);
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((res) => {
            return (
              <>
                <tr>
                  <td>{res.name}</td>
                  <td>{res.age}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <button className='btn btn-sm btn-dark' onClick={() => sorted("name")}>
        Sort
      </button>
    </div>
  );
}
