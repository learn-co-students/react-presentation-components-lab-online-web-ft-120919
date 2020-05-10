import React from 'react'

class SimpleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: 'happy'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let newMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState( {mood: newMood} )
    
  }//handleClick
  
  render() {
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )//return
  }//render
}

export default SimpleComponent; 
