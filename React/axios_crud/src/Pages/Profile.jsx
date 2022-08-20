import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

import axios from 'axios';


function Profile() {

    useEffect(() => {
        fetchAll();
    }, []);
    
    const [alldata, Setalldata] = useState({});
    
    async function fetchAll() {
    
        const res = await axios.get(`http://localhost:8000/api/student/${localStorage.getItem('id')}`);
        // console.log(res);
        if(res.data.status===200)
        {
            Setalldata(res.data.students);
            
            console.log(alldata);

        }
    };


    return (

        
            
        <div>
            
            <div className=" profile">
                <div className="profile-bottom">
                    <h3><i className="fa fa-user" />Profile</h3>
                    <div className="profile-bottom-top">
                        <div className="col-md-4 profile-bottom-img">
                            <img src="images/pr.jpg" alt />
                        </div>
                        <div className="col-md-8 profile-text">
                            <h6>Jack Dorsey</h6>
                            <table>
                                <tbody><tr><td>Department</td>
                                    <td>:</td>
                                    <td>Web Designer</td></tr>
                                    <tr>
                                        <td>Email</td>
                                        <td> :</td>
                                        <td><a href="info@gmail.com">info@lorem.com</a></td>
                                    </tr>
                                    <tr>
                                        <td>Skills</td>
                                        <td> :</td>
                                        <td> HTML, CSS,Jqury, Bootstrap</td>
                                    </tr>
                                    <tr>
                                        <td>Country </td>
                                        <td>:</td>
                                        <td> United Arab Emirates</td>
                                    </tr>
                                </tbody></table>
                        </div>
                        <div className="clearfix" />
                    </div>
                    <div className="profile-bottom-bottom">
                        <div className="col-md-4 profile-fo">
                            <h4>23,5k</h4>
                            <p>Followers</p>
                            <a href="#" className="pro"><i className="fa fa-plus-circle" />Follow</a>
                        </div>
                        <div className="col-md-4 profile-fo">
                            <h4>348</h4>
                            <p>Following</p>
                            <a href="#" className="pro1"><i className="fa fa-user" />View Profile</a>
                        </div>
                        <div className="col-md-4 profile-fo">
                            <h4>23,5k</h4>
                            <p>Snippets</p>
                            <a href="#"><i className="fa fa-cog" />Options</a>
                        </div>
                        <div className="clearfix" />
                    </div>
                    <div className="profile-btn">
                        <button type="button" href="#" className="btn bg-red">Save changes</button>
                        <div className="clearfix" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile