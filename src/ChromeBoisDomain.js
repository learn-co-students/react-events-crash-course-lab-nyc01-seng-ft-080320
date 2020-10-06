import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'



export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let x = event.clientX
    let y = event.clientY
    
    drawChromeBoiAtCoords(x, y)
  }
  
  handleClick = (event) => {
    toggleCycling()
  }
   
  handleKeyPress = (event) => {
    (event.key === 'a') ? resize('+') : resize('-')
  }
  
  render() {
    return (
      <canvas 
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
          
      </canvas>
    )
  }
}
