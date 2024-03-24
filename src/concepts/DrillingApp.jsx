import React from "react";
import Layout from "./drilling/Layout";

class DrillingApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      setLoading: false,
    }
  }

  onSubmit = () => {
    this.setState(() => {
      return {
        setLoading: true
      }
    })

    setTimeout(() => {
      this.setState(() => {
        return {
          setLoading: false
        }
      })
    }, 2000);
  }

  render() {
    return (
      <div className="container">
          <Layout isLoading={this.state.setLoading} onClickSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default DrillingApp;