import React, { Component } from 'react'

export class States_task extends Component {

  constructor()
  {
    super();
    this.state={
        name:"Raj",
        age:"31",
        no:"1",
        isShowing:false,
        img:false
    }

  }  



  render() {
    return (
      <div className='container'>
        <button onClick={()=>{ this.setState({name:"kinjal",age:"32"})}}>Change </button>
        <h1>My name is : {this.state.name} & my age is {this.state.age}</h1>
      
        <hr/>

        <button onClick={()=>{ this.setState({no:+this.state.no + 1})}}>+ </button>
        <h1>{this.state.no}</h1>
        <button onClick={()=>{ this.setState({no:+this.state.no - 1})}}>-</button>
        
        <hr/>

        <button onClick={()=>{ this.setState({isShowing:false})}}>Hide </button>
        <button onClick={()=>{ this.setState({isShowing:true})}}>show</button>
        <hr/>

        {
        this.state.isShowing ?    
        <img src='https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vyxwut1468875960.jpg' width="200px" />
        :
        null    
        }
         <hr/>

        <button onClick={()=>{ this.setState({img:!this.state.img})}}>Hide /show </button>
        <hr/>

        {
        this.state.img ?    
        <img src='https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vyxwut1468875960.jpg' width="200px" />
        :
        null    
        }
      </div>




    )
  }
}

export default States_task