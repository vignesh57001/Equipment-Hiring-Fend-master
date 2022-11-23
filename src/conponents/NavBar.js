import React, { useContext, useState } from "react";
import './css/NavBar.css';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import UserContext from "./contect";

const NavBar = () => {
  let context = useContext(UserContext);
  const { cart, user } = context;
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);


  return <>
    <nav className="main_container">
      <div className="nav_left">Siva Rental</div>

      <div id={open ? null : "hide"} className="nav_right">
        <Link to="/layout/home" onClick={closeMenu} className=" text-decoration-none"> <div className="items">Home</div></Link>
        <Link to="/layout/product" onClick={closeMenu} className=" text-decoration-none">  <div className="items">Product</div></Link>
        <Link to="/layout/cart" onClick={closeMenu} className=" text-decoration-none">  <div className="items">Cart <span className="a">{cart.length || 0}</span></div></Link>
        {window.localStorage.getItem("roll") === "admin" ? <Link to="/layout/dashboard" onClick={closeMenu} className=" text-decoration-none">  <div className="items">Dashboard</div></Link> : null}

        <div className="items logout" onClick={() => {
          window.localStorage.removeItem("Token")
          window.localStorage.removeItem("name")
          window.localStorage.removeItem("email")
          window.localStorage.removeItem("roll")
          navigate("/");
        }}> Logout</div>
        <div style={{
          fontSize: "1.2rem",
          fontWeight: "bolder",
          color: "red"
        }}>{window.localStorage.getItem("name")}</div>


      </div>
      <button type="button" className="menu p-1" onClick={handleClick}  >

        {
          open ? <FontAwesomeIcon icon={faXmark} size="lg" /> : <FontAwesomeIcon icon={faBars} size="lg" />
        }

      </button>



    </nav>

  </>
};

export default NavBar;
