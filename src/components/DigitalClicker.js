import React from 'react';

class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  }

  handleClickCount = (e) => {
    const count = this.state.timesClicked
    this.setState({
      timesClicked: count + 1
    })
  }
  render(){
    return (
      <div>
      <button onClick={this.handleClickCount}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker;
