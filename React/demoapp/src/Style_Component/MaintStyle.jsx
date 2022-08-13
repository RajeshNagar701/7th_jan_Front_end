import React from 'react'
import styled from 'styled-components';
function MaintStyle() {
  return (
    <div>
        <Title>
            <h1>Hello Raj</h1>
        </Title>
        <Button>
            Click me!
        </Button>

        <Button1>Button1</Button1>
        <Button2>Button1</Button2>
        <Button3>Button1</Button3>
        <hr />
        <Button4 primary>Button4</Button4>
        <Button4>Button4</Button4>
    </div>
  )
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
    border:2px solid palevioletred;
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:none;
    color:skyblue;
    display:block;
    margin:0 auto;
    &:hover{
        
            background : palevioletred;
            color:white;
    }
`
const Button1 = styled.button`
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:red;
    color:skyblue;
    display:block;
    margin:0 auto;
`
const Button2 = styled(Button1)`
    background:green;
`
const Button3 = styled(Button1)`
    background:blue;
`



const Button4 = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


export default MaintStyle