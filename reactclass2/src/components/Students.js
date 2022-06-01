import React, { Component } from 'react'

export default class Students extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasChanged: false
        }
    }
    increment = (event) => {
        this.setState({hasChanged: true})
        this.props.increment(this.props.name)
    }
  render() {
    return (
      <div>
          <h2>{this.props.name}</h2>
          <h2>{this.props.marks}</h2>
          
      </div>
    )
  }
}
