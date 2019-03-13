// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {

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

  // handleBitrate=()=>{
  //   let changeState = Object.assign({}, this.state)
  //   changeState.settings.bitrate = 12
  //   console.log("State",this.state)
  //   this.setState({changeState});
  // }
  //
  // handleResolution=()=>{
  //   console.log(this.state)
  //   let changeState = Object.assign({}, this.state)
  //   changeState.settings.video.resolution = '720p'
  //   console.log(changeState)
  //   return this.setState({changeState});
  // }

  // below from solution
  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolution=()=>{
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    });
  }
  // handleChangeResolution = () => {
  //   this.setState({
  //     settings: {
  //       ...this.state.settings,
  //       video: {
  //         ...this.state.settings.video,
  //         resolution: '720p'
  //       }
  //     }
  //   });
  // }
  render(){
    return(
      <div>
      <button className='bitrate' onClick={this.handleBitrate}>{this.state.settings.bitrate}</button>
      <button className='resolution' onClick={this.handleResolution}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}
