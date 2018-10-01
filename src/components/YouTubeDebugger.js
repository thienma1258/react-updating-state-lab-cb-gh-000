// Code DigitalClicker Component Here
import React from 'react';
export default class  YouTubeDebugger extends React.Component {

  constructor(props) {
super(props);
  this.state={ errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } };

  }
  render(){
    return(
      <button className='bitrate' onClick={()=>{
        let settingsConfig={...this.state.settings};
        settingsConfig.bitrate=12;
        this.setState({settingsConfig})}}>{this.state.timesClicked}</button>
<button className='bitrate' onClick={()=>{this.setState({timesClicked:this.state.timesClicked+1})}}>{this.state.timesClicked}</button>

    )
  }
}
