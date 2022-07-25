import React from "react";
import CountriesCard from "../CountriesCard/CountriesCard.jsx";
import "./countries.css"



export default function Countries({countries, pagina, porpagina}) {




  function filterCountriesPagina() {
  if(pagina === 1){
    return countries.slice((pagina - 1 )* porpagina,(pagina - 1)*porpagina  + porpagina)
  }else{
    return countries.slice((pagina - 1 )* porpagina,(pagina - 1)*porpagina + porpagina + 1 )
  }
  
} 

  
  return (
    
    <div className="home-countries" >
    
        {filterCountriesPagina().map((country) => (
          <div  key={country.id}>
            <CountriesCard
              id={country.id}
              name={country.name}
              image={country.imageFlag[0]}
              continent={country.continent}
              population={country.population}
            />
          </div>
        ))}
      
    </div>
  );
}
