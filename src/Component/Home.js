import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


export default function Home() {
  const [stud, setStud] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await axios.get(`http://localhost:3004/stud`);
    setStud(result.data);
    console.log(result.data);
  };
  //delete user
  const detetStud = async (id) => {
    await axios.delete(`http://localhost:3004/stud/${id}`);
    toast.error('Please wait  !', {
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
      getData();
    }, 3000);
  }




  return (
    <div className="container  py-5">
      <h3 className='text-center'>All Student Data</h3>
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">

        {stud.map((val) => {
          return (
            <>
              <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <p class="card-title">Student Name - <span className='text-muted'>{val.name}</span> </p>
                    <p class="card-title">Student Address - <span className='text-muted'>{val.addres}</span> </p>
                    <p class="card-title">Student Email - <span className='text-muted'>{val.email}</span> </p>
                    <p class="card-title">Student subject - <span className='text-muted'>{val.subject}</span> </p>
                    <p class="card-title">Student Gender - <span className='text-muted'>{val.gender}</span> </p>
                    <div className='d-flex justify-content-evenly mt-3'>
                      <div className='icon-home'>
                        <Link to={`/editstudent/${val.id}`}>  <i class="bi bi-pencil-square"></i></Link>
                      </div>
                      <div className='icon-home'>
                        <i class="bi bi-trash"  onClick={()=>detetStud(val.id)}></i>
                        <ToastContainer />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

           
            </>
          )
        })}



      </div>
    </div>

  )
}
