import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

const Navbar=()=>  {
  
    return (
      <div>
        <nav className="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">CupofNews</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" to="/explore">Explore</a>
                </li>
                

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link className="nav-link" to="/" style={{color:'black'}}>General</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/Science" style={{color:'black'}}>Science</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Business" style={{color:'black'}}>Business</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Technology" style={{color:'black'}}>Technology</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Entertainment" style={{color:'black'}}>Entertainment</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Sports"style={{color:'black'}}>Sports</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to="/Health" style={{color:'black'}}>Health</Link>
                    </li>
                  </ul>
                </li>




              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

      </div>
    );
  
}

export default Navbar;
