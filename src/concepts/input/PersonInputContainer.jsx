import React from "react";

class PersonInputContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      age: '',
    }
  }

  // arrow function berguna untuk mengembalikan nilai dalam bentuk object
  onChangeNameHandler = (event) => {
    this.setState(() => {
      return {
        name: event.target.value,
      }
    })
  }

  onChangeEmailHandler = (event) => {
    this.setState(() => {
      return {
        email: event.target.value,
      }
    })
  }

  onChangeAgeHandler = (event) => {
    this.setState(() => {
      return {
        age: event.target.value,
      }
    })
  }

  onSubmitAddPersonHandler = (event) => {
    event.preventDefault();
    this.props.addPerson(this.state);
    this.setState(() => {
      return {
        name: '',
        email: '',
        age: '',
      }
    })
  }

  render() {
    return (
      <form className="person-input" onSubmit={this.onSubmitAddPersonHandler}>
        <input type="text" placeholder="name" value={this.state.name} onChange={this.onChangeNameHandler} />
        <input type="text" placeholder="email" value={this.state.email} onChange={this.onChangeEmailHandler} />
        <input type="number" placeholder="age" value={this.state.age} onChange={this.onChangeAgeHandler} />
        <input type="submit" />
      </form>
    )
  }
}

export default PersonInputContainer;