
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

import axios from 'axios';

function Index() {

  const navigate = useNavigate();
  const [formvalue,SetForm]=useState({
    email:"",
    password:"",
})
function changehandel(e)
{
    const {name,value}=e.target;
    SetForm({...formvalue, [name]:value});
    //console.log(formvalue);
}
const [err_msg,setErr_msg]=useState([]);

async function onlogin(e) {
    e.preventDefault();
    const res= await axios.post(`http://localhost:8000/api/login`,formvalue)
        if(res.data.status === 200)
        {
            //alert(res.data.msg);
            swal({
                title: "Success",
                text: res.data.message,
                icon: "success",
                button: "Ok!",
            });
            SetForm({...formvalue,email:"",password:""})
            setErr_msg([]);

            localStorage.setItem('email',formvalue.email);
            navigate('/dashboard');
        }
        else
        {
            setErr_msg(res.data.message)
            console.log([err_msg]);
        }
    }



  return (
    <div>
      <div className="login">
        <h1><a href="index.html">Minimal </a></h1>
        <div className="login-bottom">
          <h2>Login</h2>
          <form>
            <div className="col-md-6">
              <div className="login-mail">
                <input type="text" name="email" value={formvalue.email} onChange={changehandel} placeholder="Email"  required />
                <i className="fa fa-envelope" />
                <span className='text-danger'>{err_msg.email}</span>
              </div>
              <div className="login-mail">
                <input type="password" placeholder="Password" name="password" value={formvalue.password} onChange={changehandel}  required />
                <i className="fa fa-lock" />
                <span className='text-danger'>{err_msg.password}</span>
              </div>
              <a className="news-letter " href="#">
                <label className="checkbox1"><input type="checkbox" name="checkbox" /><i> </i>Forget Password</label>
              </a>
            </div>
            <div className="col-md-6 login-do">
              <label className="hvr-shutter-in-horizontal login-sub">
                <input type="submit" onClick={onlogin} defaultValue="login" />
              </label>
              <p>Do not have an account?</p>
              <a href="signup.html" className="hvr-shutter-in-horizontal">Signup</a>
            </div>
            <div className="clearfix"> </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Index