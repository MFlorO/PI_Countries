import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search.jsx"



import "./NavBar.css"




export default function NavBar() {




  return (
    <nav className="navBar">
        {/* <div className={name === "Cairns" ? styles.divCains : styles.divNoCains}>  */}
      <div className="search"><Search /></div>
      <div className="flexboxitems"><Link to="/"><h3>INICIO</h3></Link></div>
      <div className="flexboxitems"><Link to="/home"><h3>HOME</h3></Link></div>
      <div className="flexboxitems"><Link to="/create"><h3>CREATE YOUT ACTIVITY</h3></Link></div>
      <div className="myList"><Link to="/myList"><h3>MY LIST</h3></Link></div>
      <div className="flexboxitems"><Link to="/about"><h3>ABOUT</h3></Link></div>
      
    </nav>
  );
}
