import React from 'react'
import './external.css'

function ExaJSX() {

    let data="Hi i am jsx";  
    const myelement = <h1>I Love JSX!</h1>;   
    const myelement1 = <h1>React is {5 + 5} times better with JSX</h1>; 
    const myelement2 = (
        <ul>
          <li>Apples</li>
          <li>Bananas</li>
          <li>Cherries</li>
        </ul>
      );
    
  const mystyle={fontSize:"50px",color:"pink"}    


  return (
    <div>
       {5+5}
       {data}
       {myelement }
       {myelement1 }
       {myelement2}
       <h1 style={{color:"red"}}>STYLE INLINE</h1>
       <h1 style={mystyle}>Internal</h1>
       <h1 className='header' >External</h1>
    </div>
  )
}

export default ExaJSX