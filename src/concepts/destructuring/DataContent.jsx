import React from "react";

function DataContent({ name, age, email }) {
  return (
    <div className="data-content">
      <h2>{name}</h2>
      <small>{age}</small>
      <small>{email}</small>
    </div>
  );
}

export default DataContent