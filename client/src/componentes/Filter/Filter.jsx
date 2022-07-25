import React from "react";
import FilterAscDesc from "./FilterAscDesc/FilterAscDesc";
import FilterContinent from "./FilterContinent/FilterContinent.jsx";
import FilterPoblation from "./FilterPoblation/FilterPoblation.jsx";
import FilterActivity from "./FilterActivity/FilterActivity.jsx";




export default function Filter() {
    return (
        <div>
            
            <FilterAscDesc />
            <FilterContinent />
            <FilterPoblation />
            <FilterActivity />

        </div>
    );
}


