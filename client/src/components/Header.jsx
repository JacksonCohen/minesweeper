import React, { Component, Fragment } from 'react';
import Timer from './Timer';
import MineCount from './MineCount';
import NewGameButton from './NewGameButton';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    clearInterval(this.timer);

    const increment = () => {
      this.setState({
        time: this.state.time + 1
      });
    }

    this.timer = setInterval(() => { increment() }, 1000);
    
    this.setState({
      time: 0
    });
  }

  render() {
    return (
      <Fragment>
        <MineCount mines={this.props.mines} />
        <NewGameButton handleClick={this.handleClick} />
        <Timer time={this.state.time} />
      </Fragment>
    );
  }
}

export default Header;