import React, { Component } from 'react'

export class LifeImg extends Component {

    componentDidMount(){
        console.log("component has been mounted ")
      } 
    
      componentWillUnmount(){
        console.log("component has been destroyed")
      }

  render() {
    
    return (
      <div>
        <img src='https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg' width="300px"/>
      </div>
    )
  }
}

export default LifeImg