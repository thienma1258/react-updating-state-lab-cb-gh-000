// Code DigitalClicker Component Here
import React from 'react';
class  DigitalClicker extends React.Component {
  
  constructor(props) {
super(props);
  this.state={
    timesClicked:0;
  }  
  }
  render(){
    return(
      <button onClick={()=>{setState(timesClicked:timesClicked+1)}}>{this.state.timesClicked}</button>
    )
  }
}