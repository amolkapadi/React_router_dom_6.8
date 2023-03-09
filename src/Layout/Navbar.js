import React from "react";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
 <section className="bg-primary">
       <div className="container">
      <nav class="nav">
        <Link class="nav-link active text-white" to="/">
          Home
        </Link>
      
        <Link
          class="nav-link ms-auto"
          to="/addstudent"
        >
          <i class="bi bi-plus-circle"></i>
        </Link>
      </nav>
    </div>
 </section>
  );
}
