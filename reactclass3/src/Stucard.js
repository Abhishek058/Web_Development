import React, { Component } from 'react'

export default class Stucard extends Component {
  constructor(props){
      super(props);
      this.state = {
          dispTot: false,
      }
  }
  showTotal = (e) => {
      this.props.total(this.props.rNo)
      this.setState({ dispTot: true })
  }
  render() {
    return (
        <div className='w-96 h-fit flex flex-col box-border px-4 py-2 my-4 rounded-xl bg-green-200 mx-4'>
          <h1 className='font-bold text-5xl'>{this.props.name}</h1>
          <h2 className='font-bold text-2xl'>{this.props.rNo}</h2>
          <h3 className='font-medium text-lg'>Marks ST1: {this.props.m1}</h3>
          <h3 className='font-medium text-lg'>Marks ST2: {this.props.m2}</h3>
          <h2 className='font-bold text-2xl flex flex-row items-center'>Total:<div className='font-light'>{this.props.totM === 0 ? 'Click the button' : this.props.totM}</div></h2>
          <button className='box-border px-2 py-1 rounded font-bold text-white bg-green-500 my-3' onClick={this.showTotal}>Show Total</button>
        </div>
    )
  }
}