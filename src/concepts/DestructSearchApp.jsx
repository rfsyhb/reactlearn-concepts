import React from 'react';
import '../styles/App.css';
import getInitialData from '../utils/index';
import ContainerData from './destructuring/ContainerData';
import DataSearch from './search/DataSearch';

class DestructSearchApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: getInitialData(),
      search: ''
    }
  }

  // untuk mengatur nilai state App yang diambil dari childnya yaitu DataSearch
  onSubmitSearchHandler = (search) => {
    this.setState({
      search
    });
  }

  render() {
    return (
      <>
        {/* {this.state.person.filter(data => console.log(data.name.toLowerCase()))} */}
        <h1>Reactlearn</h1>
        <div className='container'>
          {this.state.person
            .filter(dataPerson => dataPerson.name.toLowerCase().includes(this.state.search.toLowerCase().trim()))
            .map((dataPerson, index) => (
              <ContainerData key={index} {...dataPerson} />
            ))}
        </div>
        <div>
          <DataSearch onSearch={this.onSubmitSearchHandler} />
        </div>
      </>
    );
  }
}

export default DestructSearchApp;