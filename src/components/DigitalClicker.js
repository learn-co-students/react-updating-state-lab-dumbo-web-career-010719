// Code DigitalClicker Component Here
import React, { Component } from 'react'

export class DigitalClicker extends Component {

    state = {
        timesClicked: 0
    }

    clickHandler = () => {
        this.setState({
            state: this.state.timesClicked++
        })
        console.log(this.state.timesClicked)
    }
  render() {
    return <button type="button" onClick={this.clickHandler}>{this.state.timesClicked}</button>
  }
}

export default DigitalClicker
