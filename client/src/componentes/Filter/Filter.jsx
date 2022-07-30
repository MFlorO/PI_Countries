import React from "react";
import { useDispatch } from "react-redux";
import FilterAscDesc from "./FilterAscDesc/FilterAscDesc";
import FilterContinent from "./FilterContinent/FilterContinent.jsx";
import FilterPoblation from "./FilterPoblation/FilterPoblation.jsx";
import FilterActivity from "./FilterActivity/FilterActivity.jsx";
import { getAllCountries} from "../../redux/actions/index.js";

import "./filter.css"




export default function Filter() {

    const dispatch = useDispatch();


    function onClickReset(){
        dispatch(getAllCountries())
      }

     

    return (
        <div className="filter">
            <div className="filter-conteiner">
            <FilterAscDesc />
            <FilterContinent />
            <FilterPoblation />
            <FilterActivity />
            <button className="boton-search3" onClick={onClickReset}>RESET</button>
            </div>
        </div>
    );
}


