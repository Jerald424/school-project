import React from "react";

export default function SportsItems({ img, btnColor, alertShow }) {
  return (
    <div className="individual-item" onClick={alertShow}>
      <img src={img} alt="loading.." />
      <button className={`btn btn-${btnColor}  btn-sm`}>Check it</button>
    </div>
  );
}
