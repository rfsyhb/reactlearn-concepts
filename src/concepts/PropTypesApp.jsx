import React from "react";
import PropTypes from 'prop-types';

// functional component
function SayHello({ name }) {
  return <p>Hello, {name}</p>
}

SayHello.propTypes = {
  name: PropTypes.string.isRequired
}

// class component
class SayWorld extends React.Component {
  render () {
    const { word } = this.props;

    return <p>Hello, {word}</p>
  }
}

SayWorld.propTypes = {
  word: PropTypes.string.isRequired
}

export default function PropTypesApp() {
  return (
    <>
      {/* <SayHello name={["asep", "gaming"]} /> */}
      <SayWorld word={["asep", "gaming"]} />
    </>
  )
}