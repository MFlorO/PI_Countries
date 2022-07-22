import React from "react";
import { Link } from "react-router-dom";



export default function Landing() {
  return (
    <div className="slider">

        <h1>Welcome to Countries</h1>

        <Link to="/home">
          <button className="boton">INGRESAR</button>
        </Link> 

    </div>
  );
}
