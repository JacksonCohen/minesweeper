import React, { Component } from 'react';

class Square extends Component {
  constructor (props) {
    super(props);

    this.state = {
      clicked: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
      <button className="square" onClick={this.handleClick} >
        {this.state.clicked ? this.props.value : null}
      </button>
    );
  }
}

export default Square;