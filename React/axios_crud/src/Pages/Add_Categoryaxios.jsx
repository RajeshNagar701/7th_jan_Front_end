import React,{useState} from 'react'
import swal from 'sweetalert';

import axios from 'axios';

function Add_Categoryaxios() {

    const [formvalue,SetForm]=useState({
        name:"",
        email:"",
        password:"",
		file:"",
       
    });

    function changeFile(e)
	{
		SetForm({...formvalue, file:e.target.files[0]});
		console.log(formvalue);
	}
    function changeHandel(e)
    {
        const {name,value}=e.target;
        SetForm({...formvalue, [name]:value});
        console.log(formvalue);
    }
	
    const [err_msg,setErr_msg]=useState([]);
    async function submitHandel(e) {
        e.preventDefault();
        const data = new FormData() 
        data.append('file',formvalue.file);
        const res= await axios.post(`http://localhost:8000/api/insertstudent`,formvalue)
            if(res.data.status === 200)
            {
                //alert(res.data.msg);
                swal({
                    title: "Success",
                    text: res.data.message,
                    icon: "success",
                    button: "Ok!",
                });
                SetForm({...formvalue,name:"",email:"",password:"",file:""})
                setErr_msg([]);
                //console.log(res.data.msg);
            }
            else
            {
                setErr_msg(res.data.message)
                //console.log([err_msg]);
            }
        }

    return (

        <div id="page-wrapper" className="gray-bg dashbard-1">
            <div className="content-main">
                {/*banner*/}
                <div className="banner">
                    <h2>
                        <a href="index.html">Home</a>
                        <i className="fa fa-angle-right" />
                        <span>Add Categories</span>
                    </h2>
                </div>
                {/*//banner*/}
                {/*grid*/}
                <div className="validation-system">
                    <div className="validation-form">
                        {/**/}
                        <form method="post" onSubmit={submitHandel} entype="multipart/form-data">
                            <div className="vali-form">
                                <div className="col-md-12 form-group1">
                                    <label className="control-label"> Name</label>
                                    <input type="text" name="name" onChange={changeHandel} value={formvalue.name} placeholder="name" required />
                                    <span className='text-danger'>{err_msg.name}</span>
                                </div>
                               
                                <div className="clearfix"> </div>
                            </div>
                            <div className="col-md-12 form-group1">
                                    <label className="control-label"> email</label>
                                    <input type="text" name="email" onChange={changeHandel} value={formvalue.email} placeholder="email" required />
                                    <span className='text-danger'>{err_msg.email}</span>
                            </div>
							 <div className="col-md-12 form-group1">
                                    <label className="control-label"> File Upload</label>
                                    <input type="file" onChange={changeFile}  multiple/>
                                    <span className='text-danger'>{err_msg.file}</span>
                            </div>
                            <div className="col-md-12 form-group1">
                                    <label className="control-label"> password</label>
                                    <input type="password" name="password" onChange={changeHandel} value={formvalue.password} placeholder="password" required />
                                    <span className='text-danger'>{err_msg.password}</span>
                            </div>
							
                            <div className="clearfix"> </div>
                            <br/>
                            <br/>

                            
                            <div className="clearfix"> </div>
                            <div className="col-md-12 form-group">
                                <button type="submit"  className="btn btn-primary">Submit</button>
                                <button type="reset" className="btn btn-default">Reset</button>
                            </div>
                            <div className="clearfix"> </div>
                        </form>
                        {/**/}
                    </div>
                </div>
            </div></div>



    )
}

export default Add_Categoryaxios