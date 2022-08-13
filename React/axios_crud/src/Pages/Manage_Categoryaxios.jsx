import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

import axios from 'axios';

function Manage_Categoryaxios() {


    useEffect(() => {
        fetchAll();
    }, []);

    const [alldata, Setalldata] = useState([]);

    async function fetchAll() {

        const res = await axios.get(`http://localhost:8000/api/student`);
        console.log(res);
        if(res.data.status===200)
        {
            Setalldata(res.data.students);
        }
    };

   async function HandelDelete(id) {
        const ans = window.confirm('Are you sure want to Delete !');
        if (ans === true) {
            const res = await axios.delete(`http://localhost:8000/api/student/${id}`);
            fetchAll();
            swal({
                title: "Success",
                text: "Delete Success!",
                icon: "success",
                button: "Success",
            });
                
        }
    }

    const [formvalue, SetForm] = useState({
        name: "",
        email: "",

    })
    function changeHandel(e) {
        const { name, value } = e.target;
        SetForm({ ...formvalue, [name]: value });
        //console.log(formvalue);
    }
    const [editid,setEditid]=useState("");
    async function EditHandel(id) {
        setEditid(id);
        const res = await axios.get(`http://localhost:8000/api/student/${id}`);
        setEditid(id);
        SetForm(res.data.students);

    }

    const navigate = useNavigate();

    async function UpdateHandel(e) {
         
        e.preventDefault();
        const res = await axios.put(`http://localhost:8000/api/updatestudent/${editid}`,formvalue); 
        swal("Success", "Update Success", "success");
        SetForm({ ...formvalue, name: "", email: "" });
        fetchAll();
        navigate('/manage_Categoryaxios');
    }
	
	async function HandelStatus(id){
		setEditid(id);
        const res = await axios.get(`http://localhost:8000/api/student/${id}`);
        if(res.data.status===200)
		{
			const upd = await axios.put(`http://localhost:8000/api/updatestatus/${id}`);
			if(upd.data.status===200)
			{
				swal({
                title: "Success",
                text: upd.data.msg,
                icon: "success",
                button: "Success",
				});
				fetchAll();
			}
		}
	}
	
	
	
    return (
        <div id="page-wrapper" className="gray-bg dashbard-1">
            <div className="content-main">
                {/*banner*/}
                <div className="banner">
                    <h2>
                        <Link to="/dashboard">Home</Link>
                        <i className="fa fa-angle-right" />
                        <span>Manage customer</span>
                    </h2>
                </div>
                {/*//banner*/}
                {/*faq*/}
                <div className="blank">
                    <div className="blank-page">
                        <div className="container mt-3">
                            <h2>Manage Categories</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>email</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        alldata.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    
                                                    <td><button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => { EditHandel(item.id) }}>Edit</button></td>
                                                    <td><button className='btn btn-danger' onClick={() => { HandelDelete(item.id) }}>Delete</button></td>
													<td><button className='btn btn-danger' onClick={() => { HandelStatus(item.id) }}>{item.status}</button></td>
                                                </tr>
                                            )

                                        })
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="validation-system">
                                <div className="validation-form">
                                    {/**/}
                                    <form method="post">
                                        <div className="vali-form">
                                            <div className="col-md-12 form-group1">
                                                <label className="control-label">Name</label>
                                                <input type="text" name="name" onChange={changeHandel} value={formvalue.name} placeholder="name" required />
                                            </div>

                                            <div className="clearfix"> </div>
                                        </div>
                                        <div className="col-md-12 form-group1">
                                            <label className="control-label">email</label>
                                            <input type="text" name="email" onChange={changeHandel} value={formvalue.email} placeholder="name" required />
                                        </div>
                                        <div className="clearfix"> </div>
                                        <br />
                                        <br />


                                        <div className="clearfix"> </div>
                                        <div className="col-md-12 form-group">
                                            <button type="submit" onClick={UpdateHandel} className="btn btn-primary" data-bs-dismiss="modal">Save</button>

                                        </div>
                                        <div className="clearfix"> </div>
                                    </form>
                                    {/**/}
                                </div>
                            </div>


                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>

    )
}

export default Manage_Categoryaxios