import React from "react";
import { useSelector } from "react-redux";
import CountriesCard from "../CountriesCard/CountriesCard.jsx";



export default function Countries({pagina}) {

  const countries = useSelector((state) => state.filterCountries);

  // console.log(countries)
  
  function filterCountriesPagina() {
    return countries.slice(pagina, pagina === 0 ? pagina + 9 : pagina + 10); 
  } //Si pagina es igual a 0 mostrame solo 9 countries por pagina, sino 10


  
  return (
    
    <div >
    
        {filterCountriesPagina().map((country) => (
          <div  key={country.id}>
            <CountriesCard
              id={country.id}
              name={country.name}
              image={country.imageFlag[0]}
              continent={country.continent}
              capital={country.capital}
              subregion={country.subregion}
              area={country.area}
              population={country.population}
            />
          </div>
        ))}
      
    </div>
  );
}
