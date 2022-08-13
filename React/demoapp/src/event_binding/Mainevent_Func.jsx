import React from 'react'

function display(){
    alert('Hello  display');
}

const display1 = ()=>{
    alert('Hello  display1');
}


function display2(argument){
    alert(argument);
}


const display3 = (abc)=>{
    alert('Hello  display3');
}

function Mainevent_Func() {
  return (
    <div  className='container mt-5'>
        <button onClick={display}>Call Function</button>
        <button onClick={display1}>Call Function</button>
        <button onClick={()=>display2('Rajnagar')}>Call Function</button>
        <button onClick={display3.bind(this)}>Call Function</button>
    </div>
  )
}

export default Mainevent_Func