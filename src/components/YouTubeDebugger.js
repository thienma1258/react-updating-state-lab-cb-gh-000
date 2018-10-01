// Code DigitalClicker Component Here
import React from 'react';
export default class  YouTubeDebugger extends React.Component {

  constructor(props) {
super(props);
  this.state={ errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } };

  }
  render(){
    return(
      <div>
      <button className="bitrate" onClick={()=>{this.setState({settings.bitrate:12})}}>{this.state.timesClicked}</button>
<button className="bitrate" onClick={()=>{this.setState({timesClicked:this.state.timesClicked+1})}}>{this.state.timesClicked}</button>
</div>
    )
  }
}
  
