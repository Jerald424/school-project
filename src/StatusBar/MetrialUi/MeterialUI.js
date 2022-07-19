import { Button, Chip } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function MeterialUI() {
  const [friuts, setFriuts] = useState([
    "apple",
    "mango",
    "orange",
    "banana",
    "lemon",
  ]);
  const handleDelete = (item) => {
    const index = friuts.indexOf(item);
    friuts.splice(index, 1);
  };
  return (
    <div>
      {friuts?.map((res, id) => {
        return <button onClick={() => handleDelete(res)}>{res}</button>;
      })}
    </div>
  );
}
