import React from "react";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
 <section className="bg-warning">
       <div className="container">
      <nav class="nav  ">
        <Link class="nav-link active" aria-current="page" to="/">
          Home
        </Link>
        <Link class="nav-link" to="/about">
          About
        </Link>
        <Link class="nav-link" to="/blog">
          Blog
        </Link>
        <Link
          class="nav-link"
          to="/contact"
       
        >
          Contact
        </Link>
      </nav>
    </div>
 </section>
  );
}
