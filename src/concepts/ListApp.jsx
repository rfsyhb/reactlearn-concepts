import React from "react";
import getInitialData from "../utils/index";
import RenderingList from "./list/RenderingList";

export default function ListApp() {
  const cookPerson = getInitialData().filter(person => person.skill === 'Cook');
  const listItem = cookPerson.map(person => {
    const {name, age, email, skill} = person
    return (
    <li key={person.id}>
      <p>
        <b>{name} </b> umurnya {age} emailnya: {email} dan kemampuannya: {skill}
      </p>
    </li>
    )
  })
  return (
    <div className="container">
      {cookPerson.map((person) => {
        return <RenderingList key={person.id} {...person} />
      })}
      <ul>{listItem}</ul>
    </div>
  );
}