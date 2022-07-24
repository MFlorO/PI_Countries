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
  const dispatch = useDispatch();


  const maximo = countries.length / porpagina

  console.log("maximoPagina",maximo)


  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  console.log(countries)

  return (
    <div className="home">
      
      {countries.length > 0 ? (
        <div >
          <Filter />
          
         <Paginas pagina={pagina} setPagina={setPagina} maximo={maximo} /> 
          
          <div className="home-countries"> <Countries pagina={pagina} porpagina={porpagina}/></div>

        </div>
      ) : ( countries.msg ?  <h3>{countries.msg}</h3> : <Loading />
            //Si hay un error en la busqueda de nombres mostralo sino que aparezca loading
      )}
    </div>
  );
}
