import React,{useState} from 'react';


export default function Paginas({pagina,setPagina, maximo}){

  const [input, setInput] = useState(1);

    function siguiente(){
        setInput(input + 1)
        setPagina(pagina + 1) 
     }
    
      function anterior(){
        setInput(input + 1)
        if(pagina > 0){
          setPagina(pagina - 1)
        }
      }


      function onInputChange(event) {
        setInput(event.target.value)
        setPagina(event.target.value)
      }
    

    return(
        <div>
            <button onClick={anterior} disabled={pagina === 1 || pagina < 1} >ANTERIOR</button>
            <input name="page" autoComplete='off' value={input} onChange={onInputChange}/>
            <p> de {maximo + 3}</p>
            <button onClick={siguiente} disabled={pagina === 27 || pagina > 27} >SIGUIENTE</button>
        </div>
    )
}