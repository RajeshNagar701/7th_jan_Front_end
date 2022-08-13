import React, { Component } from 'react'
import LifeImg from './LifeImg';

export class MainLife extends Component {
    constructor(){
        super();
        this.state={
            isshowing: false,
            number:"1"
        }
    }
    
    componentDidUpdate(){
        console.log("component has been updated ")
      }

  render() {
    return (
        <div className='container'>
        <br></br>
        <button onClick={()=>this.setState({isshowing:true})}>Show</button>
        <button onClick={()=>this.setState({isshowing:false})}>Hide</button>
        <button onClick={()=>this.setState({isshowing:!this.state.isshowing})}>Hide/show</button>
        
        {
        this.state.isshowing ? <LifeImg/> : null     
        }
        <br></br>
        <br></br>
        
        <button onClick={()=>this.setState({number : +this.state.number + +1})}>+</button>
        <h1>{this.state.number}</h1>
        <button onClick={()=>this.setState({number : this.state.number - 1})}>-</button>
        
    </div>
    )
  }
}

export default MainLife