import React from "react";
import PropTypes from 'prop-types';

function SayHello({ name }) {
  return <p>Hello, {name}</p>
}

SayHello.propTypes = {
  name: PropTypes.string.isRequired
}

export default function PropTypesApp() {
  return (
    <SayHello name={["asep", "gaming"]} />
  )
}