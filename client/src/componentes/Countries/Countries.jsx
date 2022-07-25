import React from "react";
import { useSelector } from "react-redux";
import CountriesCard from "../CountriesCard/CountriesCard.jsx";
import "./countries.css"



export default function Countries({pagina, porpagina}) {

  const countries = useSelector((state) => state.filterCountries);

  // console.log(countries)
  


  function filterCountriesPagina() {
  if(pagina === 1){
    return countries.slice((pagina - 1 )* porpagina,(pagina - 1)*porpagina  + porpagina)
  }else{
    return countries.slice((pagina - 1 )* porpagina,(pagina - 1)*porpagina + porpagina + 1 )
  }
  
} 


  console.log(countries)
  console.log(filterCountriesPagina())

  
  return (
    
    <div className="home-countries" >
    
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
