import React from "react";

export default function IamAJoker({ name }) {
  if (name === "joker") {
    throw new Error("he was a joker");
  }
  return <div>IamAJoker</div>;
}
