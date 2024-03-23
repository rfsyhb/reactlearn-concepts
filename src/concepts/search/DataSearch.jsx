import React from "react";

class DataSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  onSearchInputChangeHandler = (event) => {
    // dua buah parameter (mengubah properti, callback)
    // karena kemungkinan asinkron, lebih baik gunakan callback
    // memastikan bahwa nilai state yang terbaru dan terupdate.
    this.setState({
      search: event.target.value
    }, () => {this.props.onSearch(this.state.search)})
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