import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Countries from "../Countries/Countries.jsx";
import Paginas from "../Paginas/Paginas.jsx";
import Filter from "../Filter/Filter.jsx";
import "./home.css";

import { getAllCountries, getActivities } from "../../redux/actions/index.js";
import Loading from "../../Loading/Loading.jsx";





export default function Home() {

    const [pagina, setPagina] = useState(0);


  const countries = useSelector((state) => state.filterCountries);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getActivities());
  }, []);


  return (
    <div className="home">
      
      {countries.length > 0 ? (
        <div >
          <Filter />
          
         <Paginas pagina={pagina} setPagina={setPagina} /> 
          
          <div className="home-videogames"> <Countries pagina={pagina} /></div>

        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
