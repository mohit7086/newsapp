import React, { Component } from 'react'
import spin from './spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' >
      <img src={spin} alt="spin" style = {{height:"20px"}} />
      </div>
    )
  }
}

export default Spinner
