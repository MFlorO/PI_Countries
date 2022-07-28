import React from "react";
import FilterAscDesc from "./FilterAscDesc/FilterAscDesc";
import FilterContinent from "./FilterContinent/FilterContinent.jsx";
import FilterPoblation from "./FilterPoblation/FilterPoblation.jsx";
import FilterActivity from "./FilterActivity/FilterActivity.jsx";

import "./filter.css"




export default function Filter() {
    return (
        <div className="filter">
            <div className="filter-conteiner">
            <FilterAscDesc />
            <FilterContinent />
            <FilterPoblation />
            <FilterActivity />
            </div>
        </div>
    );
}


