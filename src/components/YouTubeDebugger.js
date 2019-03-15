// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
    state = {
         errors: [], 
         user: null, 
         settings: { bitrate: 8, video: { resolution: '1080p' }} 
    }

    bitRateHandler = () => {
        this.setState({
           errors: this.state.errors,
           user: this.state.user,
           settings: {...this.state.settings, bitrate: 12}
        })
    }

    resolutionHandler = () => {
        this.setState({
            errors: this.state.errors,
            user: this.state.user,
            settings: {...this.state.settings, video: {resolution: "720p"}}
        })
    }
  render() {
      console.log(this.state.settings);
      
    return (
        <div>
            <button className="bitrate" onClick={this.bitRateHandler}></button>
            <button className="resolution" onClick={this.resolutionHandler}></button>
        </div>
    )
  }
}

export default YouTubeDebugger
