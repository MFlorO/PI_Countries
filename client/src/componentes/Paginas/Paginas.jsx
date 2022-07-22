import React from 'react';


export default function Paginas({pagina,setPagina}){


    function siguiente(){
        setPagina(pagina + 5)     
     }
    
      function anterior(){
        if(pagina > 0){
          setPagina(pagina - 5)
        }
      }

    

    return(
        <div>
            <button onClick={anterior}>ANTERIOR</button>
            <button onClick={siguiente}>SIGUIENTE</button>
        </div>
    )
}