import React from "react";

class DataSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  onSearchInputChangeHandler = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    // jika tidak ada onChange form tidak akan bisa diketik
    return (
      <form className="search-form">
        <input type="text" value={this.state.search} onChange={this.onSearchInputChangeHandler} />
      </form>
    );
  }
}

export default DataSearch;