import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllCountries } from "../../redux/actions/index.js";

import Loading from "../../Loading/Loading.jsx"
import {createActivities} from "../../redux/actions/index.js"






   //VALIDACION DEL FORMULARIO
   function validate(input){

    let errores = {};
  
    if(!input.name){
      errores.name = "No hay informacion del nombre"
    }

    if(!input.difficulty){
      errores.difficulty = "No hay informacion del difficulty"
    }else if(!typeof input.rating === "number"){   
    errores.difficulty = "El campo difficulty no es un numero"
    }else if (input.difficulty > 5 || input.difficulty < 0){
      errores.difficulty = "El campo difficulty no esta dentro del rango aceptable"
    }

    return errores
  }






export default function Create() {

    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countriesAll);

    console.log(countries)

    useEffect(() => {
    dispatch(getAllCountries());
    }, []);
    

    
    //ESTADO DEL COMPONENTE.
    const [input, setInput] = useState({
        name: "",
        difficulty: 0,
        duration: "",
        seassion: [],
        countries: [],
      });
    


   //ESTADO DE LOS ERRORES DE LA FUNCION VALIDATE
   const [errores, setErrores] = useState({});
   


    

   const randomSession = ["Summer","Autunm","Winter","Spring"]
        




  
   function handleChange(event) {
   
   if(event.target.name === "countries" || event.target.name === "seassion"){ 
      //agrego el evento para genres y/o platform
  
      if(input.countries.includes(event.target.value)  === true|| input.seassion.includes(event.target.value) === true){
      //Si ya marque esa opcion no la agrego dos veces

         setInput({
          ...input
         })

  
      } else{
              
        const array2 = input[event.target.name];
     
        setInput({
              
          ...input, 
          [event.target.name]: array2.concat(event.target.value)
        })
     }

  }else{       
        
      setInput({
      ...input,
      [event.target.name]: event.target.value,
      })
    }
               
    setErrores(validate ({
      ...input,
      [event.target.name]:event.target.value
     }));
  }



     function reset(){  
      setInput({
        name: "",
        difficulty: 0,
        duration: "",
        seassion: [],
        countries: [],
      });
     }
      
    

      function handleSubmit(evento) {
      evento.preventDefault();

      dispatch(createActivities(input));


      !errores && (alert("FORMULARIO ENVIADO"))
      
       reset()
      }


      const removeCountry = (e) =>{
        setInput( input.filter(c => c !== e.target.name)
        )
        console.log(countries)
    }


  
    return (


      
    <div className="create">
         
    {!countries.length? <Loading /> : <div className="form">
        
        
        <h1>CREATE A TOURIST ACTIVITY</h1>
  
        <form className="form-item" onSubmit={handleSubmit}>

          
          <label htmlFor="name">Name: </label>
          <input className={errores.name && 'danger'} type="text" name="name" value={input.name} onChange={handleChange} />
          {errores.name && (<p className="danger">{errores.name}</p>)}
          

          
          <label htmlFor="rating">Difficulty: </label>
          <input className={errores.Difficulty && 'danger'} type="number"  name="difficulty" value={input.difficulty} onChange={handleChange} />
          {errores.Difficulty && (<p className="danger">{errores.Difficulty}</p>)}
          

          
          <label htmlFor="duration">Duration: </label>
          <input type="time"  name="duration" value={input.duration} onChange={handleChange} />
          


          
          <div className="session">
          <p>Session: </p>
          {randomSession.map (session => {
            return <div key={session}>
              <input type="checkbox" name="session" value={session} onChange={handleChange}/>
              <label htmlFor="session">{session}</label>
            </div>
          })}
          </div>


         


          <p className="countries">Countries: </p>
          <select name="select">
          <option hidden>COUNTRIES</option>
          {countries.map (countries => {
            return ( 
               <option key={countries.id} id="countries" name="countries" value={countries.name} onChange={handleChange}>{countries.name}</option>
            )
          })}

          </select>

  
          <button className="crear" type="submit" disabled={!errores}>CREATE</button>
       
            
        </form>
  
  
      </div>
    }
      </div>
    );
  }
  