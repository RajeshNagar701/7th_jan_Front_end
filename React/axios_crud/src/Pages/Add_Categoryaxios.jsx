import React,{useState} from 'react'
import swal from 'sweetalert';

import axios from 'axios';

function Add_Categoryaxios() {
	
	
    const [formvalue,SetForm]=useState({
        name:"",
        email:"",
        password:"",
        fileName:""
       
    });
    const [file, setFile] = useState();
	function changeHandel(e)
    {
        const {name,value}=e.target;
        SetForm({...formvalue, [name]:value});
        console.log(formvalue);
    }
	
    function changeFile(e)
	{
        setFile(e.target.files[0]);
		SetForm({...formvalue,fileName:e.target.files[0].name});
		//console.log(formvalue);
	}
    
	
    const [err_msg,setErr_msg]=useState([]);
    async function submitHandel(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',formvalue.name);
        formData.append('email',formvalue.email);
        formData.append('password',formvalue.password);
        formData.append('fileName',formvalue.fileName);

        formData.append("file",file);
        
        const res= await axios.post(`http://localhost:8000/api/insertstudent`,formData)
            if(res.data.status === 200)
            {
                //alert(res.data.msg);
                swal({
                    title: "Success",
                    text: res.data.message,
                    icon: "success",
                    button: "Ok!",
                });
                
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
                        <form method="post"  entype="multipart/form-data">
                             
                            <div className="col-md-12 form-group1">
                                    <label className="control-label"> Name</label>
                                    <input type="text" name="name" value={formvalue.name} onChange={changeHandel} />
                                    <span className='text-danger'>{err_msg.name}</span>
                            </div>
                            <div className="col-md-12 form-group1">
                                    <label className="control-label"> email</label>
                                    <input type="text" name="email" value={formvalue.email} onChange={changeHandel} />
                                    <span className='text-danger'>{err_msg.email}</span>
                            </div>
                            <div className="col-md-12 form-group1">
                                    <label className="control-label"> password</label>
                                    <input type="password" name="password" value={formvalue.password} onChange={changeHandel} />
                                    <span className='text-danger'>{err_msg.password}</span>
                            </div>
                           
							 <div className="col-md-12 form-group1">
                                    <label className="control-label"> File Upload</label>
                                    <input type="file" onChange={changeFile} />
                                    <span className='text-danger'>{err_msg.file}</span>
                            </div>
                            

                            
                            <div className="clearfix"> </div>
                            <div className="col-md-12 form-group">
                                <button type="submit" onClick={submitHandel}  className="btn btn-primary">Submit</button>
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