import React from "react";
import CountriesCard from "../CountriesCard/CountriesCard.jsx";
import "./countries.css"



export default function Countries({countries, pagina, porpagina}) {



   function filterCountriesPagina() {
    if(pagina === 1){
    
      return countries.slice( 0 , porpagina - 1)     // 9 en la primer hoja 
    } else {

     return countries.slice( ((pagina - 1 )* porpagina + 9) - porpagina , ((pagina - 1 )* porpagina + 9)) //10 en la primer hoja
    } 
 } 
                              
 //[0,8]
 //[9,18]
 //[19,28]
 //[29,38]


  console.log("pagina",pagina)

  console.log("cantidad de pasies por pagina",filterCountriesPagina())
  







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
