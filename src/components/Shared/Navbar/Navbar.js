import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {

  const userInfo=JSON.parse(localStorage.getItem('userInfo'));

  const handleLogOut=()=>{
    localStorage.setItem('userInfo',JSON.stringify({}));
    window.location.reload();
  }
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
        <Link to="/"><h3 style={{color:'goldenrod'}}>Kids Heaven</h3></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
              <Link to="/manage"><li class="nav-item">
              <a class="nav-link" href="#">DashBoard</a>
            </li></Link>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
              
              {
                userInfo.isSignedIn? <button type="button" class="btn btn-primary" onClick={handleLogOut}>LogOut</button> : <Link to="/login"><button type="button" class="btn btn-primary">Login</button></Link>
              }
              
              
            </ul>
          </div>
        </div>
      </nav>
        </div>
    );
};

export default Navbar;