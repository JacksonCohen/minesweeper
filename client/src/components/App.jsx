import React, { Component, Fragment } from 'react';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <Fragment>
        <div>Rendering!</div>
        <Header />
      </Fragment>
    );
  }
}

export default App;