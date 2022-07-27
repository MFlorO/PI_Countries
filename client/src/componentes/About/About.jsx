import React from "react";

import Footer from "./Footer/Footer.jsx"
import "./About.css"
import { SiRedux, SiPostgresql } from "react-icons/si"
import { FaReact, FaNode } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"



function About() {
    return (
        <div className="about-cointeiner">

            <h1 className="titulo">ABOUT COUNTRIES</h1>
            
            <h4 className="subtitulo-1">Develop by Maria Florencia Oldani for an individual project for Henry Bootcamp</h4>

            <p className="subtitulo-2">This project was done through the use of an external API that obtains information about countries: {<a href="https://restcountries.com/">Restcountries</a>}</p>
            <p className="subtitulo-2">Then through a controlled form I create tourist activities and relate them to these countries</p>

            <div className="logos">
                <h3 className="logo-titulo">The skills used in this project are:</h3>
                <div className="logos-items">
                <p className="icono"><SiRedux className="icono-1" size="2rem"/></p>
                <FaReact size="2rem"/>
                <IoLogoJavascript size="2rem"/>
                <SiPostgresql size="2rem"/>
                <FaNode size="2rem"/>
                </div>
            </div>


            <div className="wrapper"><Footer /></div>

        </div>
    );
}


export default About;