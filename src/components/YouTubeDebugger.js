// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component{
    state ={
            errors: [], 
            user: null, 
            settings: { bitrate: 8, 
                        video: { resolution: '1080p'} 
                    }
            }
                
     
    
    HandleBitrate =() => {
        this.setState({
             settings: {
                ...this.state.settings,
                bitrate: 12
             }
             
        })
    }

    HandleResolution =()=>{
        
        this.setState({
            settings:{
                ...this.state.settings,
                video: {
                    
                    resolution: '720p'
                 }
            }
        })
    }

    render(){
        return (
            <div>
                <button className='bitrate' onClick={this.HandleBitrate}>Button1</button>
                <button className='resolution' onClick={this.HandleResolution}>Button2</button>
            </div>
        );
    }
}

export default YouTubeDebugger;