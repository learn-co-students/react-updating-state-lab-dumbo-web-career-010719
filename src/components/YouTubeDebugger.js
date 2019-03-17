import React from 'react';

class YouTubeDebugger extends React.Component {
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

 handleClickForBitrate = () => {
   this.setState({
     settings:{
       ...this.state.settings,
       bitrate: 12
     }
   })
 }

handleChangingResolution = () => {
  this.setState({
    settings: {
    ...this.state.settings,
    video: {
    ...this.state.settings.video,
      resolution: '720p'
      }
    }
  })
}

  render() {
    return(
      <div>
      <button className="bitrate" onClick={this.handleClickForBitrate}>Change Bitrate</button>
      <button className="resolution" onClick={this.handleChangingResolution}> Change Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
