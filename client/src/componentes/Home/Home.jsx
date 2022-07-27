import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Countries from "../Countries/Countries.jsx";
import Paginas from "../Paginas/Paginas.jsx";
import Filter from "../Filter/Filter.jsx";
import "./home.css";

import { getAllCountries} from "../../redux/actions/index.js";
import Loading from "../../Loading/Loading.jsx";





export default function Home() {

    const [pagina, setPagina] = useState(1);


    const [porpagina, setPorpagina] = useState(9);



    
  const countries = useSelector((state) => state.filterCountries);

  
  console.log("Home", countries)


  const dispatch = useDispatch();


  const maximo = countries.length / porpagina


  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);





  return (


    <div className="home-cointeiner">
      
      {countries.length > 0 ? (

        <div className="home-items">

        <div className="filter"><Filter /></div>
        <div className="pagina"><Paginas pagina={pagina} setPagina={setPagina} maximo={maximo} /></div>
        <div className="countries"><Countries pagina={pagina} porpagina={porpagina} countries={countries}/></div>

        </div>

      ) : ( countries.msg ?  <h3>{countries.msg}</h3> : <Loading />
            //Si hay un error en la busqueda de nombres mostralo sino que aparezca loading
      )}
    
   </div>
  );
}
