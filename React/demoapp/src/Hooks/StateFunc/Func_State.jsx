import React,{useState} from 'react'

function Func_State() {

  const [name,setname]=useState("Rajesh");  
  const [number,setnumber]=useState(1);
  const [data, setData] = useState([
    "Vinny", "Aditi", "Rajesh", "Parth"
    ])

const [userProfile, setUserProfile] = useState({
    name: "parth",
    city: "surat",
    age: 26})


  return (
    <div className='container'>
        <button onClick={()=>setname("Raj Nagar")}>Change name</button>
        <h1>My name is : {name}</h1>
        <hr />
        <button onClick={()=>setnumber(number + 1)}>+</button>
        <h1>{number}</h1>
        <button onClick={()=>setnumber(number-1)}>-</button>
        <hr />
        <h1>Total data : {data.length}</h1>
        <button onClick={()=>setData([])}>Clear</button>
        {
            data.map((item,index)=>{
                return(
                    <>
                        <h1>{item}</h1>
                    </>
                )
            })

        }
        <hr />
        <button onClick={()=>setUserProfile({...userProfile,name:"Komal"})}>Change name</button>
        <h1>Hi my name is {userProfile.name} and i am from {userProfile.city} and my age is { userProfile.age}</h1>

    </div>
  )
}

export default Func_State