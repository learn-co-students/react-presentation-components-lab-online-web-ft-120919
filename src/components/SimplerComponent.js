// Code SimplerComponent Here
import React, { Component } from 'react';

class SimplerComponent extends Component {
    
    render() {
        return <div onClick={this.props.handleClick}>I'm so happy</div>;
    }
}

export default SimplerComponent
