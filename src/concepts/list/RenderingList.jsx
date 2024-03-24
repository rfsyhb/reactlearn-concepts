import React from "react";

export default function RenderingList ({ name, age, email, skill }) {
  return (
    <li>
      <h2>{name}</h2>
      <small>umurnya {age}</small>
      <p>{email}</p>
      <p>kemampuan: {skill}</p>
    </li>
  );
}