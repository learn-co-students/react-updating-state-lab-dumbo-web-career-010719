// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleBitrateClicked = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
  }

  handleResolutionClicked = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateClicked}>Bitrate</button>
        <button className="resolution" onClick={this.handleResolutionClicked}>Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger
