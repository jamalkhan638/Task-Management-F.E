import React, { Component, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import myiamge from "../../assets/images/taskimage.webp";
import bimage from "../../assets/images/breadcumb.png";
import { Button } from "antd";
import AddTaskModal from "../modals/AddTaskModal";

function Navbar() {
 
  const toggleOffcanvas = () => {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  };
  let history = useHistory();
  const toggleRightSidebar = () => {
    document.querySelector(".right-sidebar").classList.toggle("open");
  };
  const handleLogout = () => {
    history.push("/login");
    localStorage.clear();
  };

  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo mr-5">
          <img src={myiamge} className="mr-2" alt="logo" />
        </Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch justify-content-end">
        <button
    
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          onClick={() => document.body.classList.toggle("sidebar-icon-only")}
        >
          <i
            style={{
              color: "#1E96B9",
              cursor: "pointer",
              fontSize: "30px",
             
            }}
            class="fa fa-exchange"
          ></i>
        </button>
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block"></li>
        </ul>
    

        <div className="d-flex align-items-center">
          <i className="ti-power-off text-primary"></i>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleLogout();
            }}
            className="pl-2"
          >
            Logout
          </span>
        </div>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          onClick={toggleOffcanvas}
        >
          <span className="ti-layout-grid2"></span>
        </button>
      </div>
   
    </nav>
  );
}

export default Navbar;
