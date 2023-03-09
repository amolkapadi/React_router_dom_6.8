import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios  from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddStudent() {
    const navigate= useNavigate()
    const [data,setData]=useState({
        name:"",
        addres:"",
        email:"",
        gender:"",
        subject:""
    })
    //object destructuring
    const {name,addres,email,gender,subject} =data;

    //handle change function
    const handleChange =(e)=>{
      console.log(e.target.value);
      setData({...data,[e.target.name]:e.target.value})
    }

    const onSubmit =async (e)=>{
      e.preventDefault();
      await axios.post("http://localhost:3004/stud" ,data);
      toast.success('Please wait  !', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true, 
        progress: undefined,
        theme: "colored",
        });
    setTimeout(() => {
        navigate('/');
      }, 3000);
    }

  return (
    <div className="container py-5">
      <h3 className='text-center'>Add Student</h3>
      <form class="row g-3 w-50 mx-auto p-5 shadow mt-5">
        <div class="col-md-12">
          <label for="inputEmail4" class="form-label">Student Name</label>
          <input type="text" class="form-control" name="name" value={name}  onChange={handleChange}  required/>
        </div>

        <div class="col-12">
          <label for="inputAddress" class="form-label">Address</label>
          <input type="text" class="form-control" name="addres" value={addres}  onChange={handleChange}  required/>
        </div>

        <div class="col-md-6">
          <label for="inputCity" class="form-label">Email</label>
          <input type="email" class="form-control" name="email"  value={email}  onChange={handleChange} required/>
        </div>
        <div class="col-md-6">
        <label for="inputState" class="form-label">Gender</label>
          <select  class="form-select" name='gender' value={gender}  onChange={handleChange}>
            <option selected>Choose...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="col-md-12">
          <label for="inputState" class="form-label">Subject</label>
          <select  class="form-select" name='subject' value={subject}  onChange={handleChange} >
            <option selected>Choose...</option>
            <option value="Java">Java</option>
            <option  value="Python">Python</option>
            <option  value="C++">C++</option>
            <option  value="Operating system ">Operating system </option>
          </select>
        </div>
     
        <div class="col-12 d-flex justify-content-between mt-5 ">
          <button type="submit" class="btn btn-primary" onClick={(e)=>onSubmit(e)} >Add Data</button>
          <ToastContainer />
          <Link to="/"> <button type="submit" class="btn btn-danger" >Cancel</button></Link>
      
          
    
        </div>
      </form>
    
    </div>
  )
}
