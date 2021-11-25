import React, {useState } from "react";
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
// MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
      <div class="container">
      
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
    
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
          <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
              height="15"
              alt=""
              loading="lazy"
            />
          </a> 
          
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item fw-bold">
              <Link class="nav-link text-primary" to="/">Dashboard</Link>
            </li>
            <li class="nav-item fw-bold">
              <Link class="nav-link text-primary" to="/practice">Practice</Link>
            </li>
           
          </ul>
         
        </div>
      
    
       
        <div class="d-flex align-items-center">
         
          <Link class="text-reset me-3" to="#">
            <span className="fw-bold text-primary">Log out</span>
            <i class="fas fa-user ms-3 text-primary"></i>
          </Link>
    
        </div>
        
      </div>
     
    </nav>
    
   
    )
}

export default Header;