// Code SimpleComponent Here
import React, { Component } from 'react'

export class SimpleComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            mood: 'happy'
        };
        handleClicks = () =>{
            let newMood = this.state.mood === 'happy' ? 'sad' : 'happy'
            this.setState({
                mood: newMood
            })
        }
    }
    
    render() {
        return (
            <div onClick={this.handleClicks}>{this.state.mood}   
            </div>
        )
    }
}

export default SimpleComponent
