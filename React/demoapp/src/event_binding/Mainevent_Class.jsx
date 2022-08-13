import React, { Component } from 'react'

export class Mainevent_Class extends Component {

  constructor(){
    super();
    this.state = {
        name: "Nagar",
        age: "31"
      }
  }
  
  display1 = ()=>{
    alert('Hello  display1');
}
  display2 = ()=>{
    alert(this.state.name);
}
display3 = (abc)=>{
    alert(abc);
}

changeState = () => {
    this.setState({name:"Akash",age:"42"})
}


  render() {
    return (
      <div className='container mt-5'>
        <button onClick={this.display1}>Call Function</button>
        <button onClick={this.display2}>Call Function</button>
        <button onClick={()=>this.display3("Raj nagar")}>Call Function</button>
        <button onClick={this.changeState}>Set State</button>
        Hi {this.state.name}, my age is {this.state.age}
      </div>
    )
  }
}

export default Mainevent_Class