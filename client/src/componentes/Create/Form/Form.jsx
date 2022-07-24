import React,{useState} from "react";
import { useDispatch} from "react-redux";

import {createActivities} from "../../../redux/actions/index.js"



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






export default function Form({countries}) {

    const dispatch = useDispatch();



    //ESTADO DEL COMPONENTE.
    const [input, setInput] = useState({
        name: "",
        difficulty: 0,
        duration: "",
        seassion: "",
        countries: [],
      });
    


   //ESTADO DE LOS ERRORES DE LA FUNCION VALIDATE
   const [errores, setErrores] = useState({});
   


    

   const randomSeassion = ["Summer","Autunm","Winter","Spring"]
        




  
   function handleChange(event) {
   
   if(event.target.name === "countries" ){ 
      //agrego el evento para countries
  
      if(input.countries.includes(event.target.value)  === true){
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
        seassion: "",
        countries: [],
      });
     }
      
    

      function handleSubmit(evento) {
      evento.preventDefault();

      dispatch(createActivities(input));


       if(!errores) {
        (alert("FORMULARIO ENVIADO"))
        reset()
       }
      
       
      }


    //   const removeCountry = (e) =>{
    //     setInput( input.filter(c => c !== e.target.name)
    //     )
    //     console.log(countries)
    // }


  
    return (


      
    <div className="create">
         
    
        
        
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
          



          <p className="seassion">Seassion: </p>
          <select name="seassion" onChange={handleChange}>
          <option hidden>SEASSION</option>
          {randomSeassion.map ((seassion, key) => {
            return ( 
               <option key={key} id="countries" name="countries" value={seassion}>{seassion}</option>
            )
          })}

          </select>


         

          <p className="countries">Countries: </p>
          <select name="countries" onChange={handleChange}>
          <option hidden>COUNTRIES</option>
          {countries.map (countries => {
            return ( 
               <option key={countries.id} id="countries" name="countries" value={countries.id}>{countries.name}</option>
            )
          })}

          </select>

  
          <button className="crear" type="submit" >CREATE</button>
       
          {/* disabled={!errores} */}
            
        </form>
  
  
        {/* COUNTRIES LIST */}

        {/* <div className="countriesList">
            <ul>
            {
                countries?.map((el) => {
            
                    let name = countries?.map((e) =>  e.id === el? e.name : null  )
                    return ( 
                        <div>
                    <span key={el.id} className="lista">{name}</span>
                    <button name={el}className="closeButton" onClick={(e) => { removeCountry(e) }}>❌</button>
                    </div>
                )
    
                })
            }
            </ul>
        </div> */}
    



      </div>
    );
  }
  