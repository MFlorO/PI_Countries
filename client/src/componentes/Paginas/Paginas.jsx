import React,{useState} from 'react';


export default function Paginas({pagina,setPagina, maximo}){

  const [input, setInput] = useState(1);

    function siguiente(){
        setInput(parseInt(input) + 1) //Al parseInt lo agrego porque cuando escribo la pagina a la que quiero ir en el imput y le doy 
        setPagina(parseInt(pagina) + 1) //siguiente, me agrega string porque no lo toma como numero
     }
    
      function anterior(){
        setInput(input + 1)
        if(pagina > 0){
          setPagina(pagina - 1)
        }
      }

      function onKeyDown (event){
        if(event.keyCode === 13){ //La tecla 13 es el enter

          setPagina(parseInt(event.target.value))
          if(parseInt(event.target.value) < 1  //si ponemos algo menor a 1
          || parseInt(event.target.value) > Math.floor(maximo)  //Si ponemos algo mayor al maximo
          || isNaN(parseInt(event.target.value))){ //Si ponemos algo que no es un numero 

                  setPagina(1)
                  setInput(1)
                }else {
                  setPagina(parseInt(event.target.value))
                }
        }
      }

      function onInputChange(event) {
        setInput(event.target.value)

      }
    

    return(
        <div>
            <button onClick={anterior} disabled={pagina === 1 || pagina < 1} >ANTERIOR</button>
            <input onKeyDown={onKeyDown} name="page" autoComplete='off' value={input} onChange={onInputChange}/>
            <p> de {maximo}</p>
            <button onClick={siguiente} disabled={pagina === 24 || pagina > 24}>SIGUIENTE</button>
        </div>
    )
}