// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.Component {

    constructor(props){
        super(props)
         this.state = {
        mood: 'happy'
    } 
    }
  
handleOnClick = () => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({ mood: newMood }) 
  }

    render() {
    return <div onClick={this.handleOnClick}>{this.state.mood}</div>
  }
   
}



  