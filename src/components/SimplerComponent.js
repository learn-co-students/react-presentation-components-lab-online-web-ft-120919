import React, { Component } from 'react'

export class SimplerComponent extends Component {
    
    clickEvent = () => {console.log(this.props.handleClick)}

    render() {
        return (
            <div onClick={this.clickEvent}>
                I am just happy
            </div>
        )
    }
}

export default SimplerComponent
