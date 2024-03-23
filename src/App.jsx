import React from 'react';
import './styles/App.css';
import getInitialData from './utils/index';
import ContainerData from './concepts/destructuring/ContainerData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: getInitialData()
    }
  }

  render() {
    return (
      <>
        <h1>Reactlearn</h1>
        <div className='container'>
          {this.state.person
            .map((data, index) => <ContainerData key={index} {...data} />)}
        </div>
      </>
    );
  }
}

export default App