import React,{useState} from "react";
import { useDispatch} from "react-redux";

import {createActivities} from "../../../redux/actions/index.js"
import validate from "./validate.js"
import "./form.css"

import {ImCross } from "react-icons/im"
import {BiError} from "react-icons/bi"



 




export default function Form({countries}) {

    const dispatch = useDispatch();



    //ESTADO DEL COMPONENTE.
    const [input, setInput] = useState({
        name: "",
        difficulty: 0,
        duration: "",
        seassion: "",
        id: [], //idCountries
      });


   //ESTADO DE LOS ERRORES DE LA FUNCION VALIDATE
   const [errores, setErrores] = useState({});
   

   const [disabledB, setDisabledB] = useState(true);



   const randomSeassion = ['Summer', "Autunm" , 'Winter', 'Spring']
        


console.log(typeof input.name)

  
   function handleChange(event) {

    if(event.target.name === "id"){

      if(!input.id.includes(event.target.value)){

        setInput({...input, 
          id: [...input.id, event.target.value]
        })
      }

      setDisabledB(false)
       

    }else{
        

      setInput({
      ...input,
      [event.target.name]: event.target.value,
      })
    
      
      setErrores(validate ({
        ...input,
        [event.target.name]:event.target.value
       }));



       if(errores){
        setDisabledB(true);
       }else{
        setDisabledB(false)
       }     
       
  }}



    function resetForm(){       
      setInput({
        name: "",
        difficulty: 0,
        duration: "",
        seassion: "",
        id: []
      });

     }
  
    
   

      function handleSubmit(evento) {
          evento.preventDefault();

          dispatch(createActivities(input));
        
          (alert("FORMULARIO ENVIADO"))   

          evento.target.reset()   //Necesito ambos reset porque sino no me resetea los checks. Y van abajo de todo porque sino rompe
          resetForm()
      }


      

      const removeCountry = (event) =>{
        setInput(
          ...input.id.filter(country => country !== event.target.name)
        )
     }







    return (


      
    <div className="form">
         
           
        
        <h1 className="titulo-form">CREATE A TOURIST ACTIVITY</h1>
  
        <form className="form-item" onSubmit={handleSubmit}>

          
          <label className="labels" htmlFor="name">Name: </label>
          <input className={errores.name && 'danger'} type="text" name="name" value={input.name} onChange={handleChange} />
          {errores.name && (<p className="danger">{errores.name}</p>)}
          

          
          <label className="labels" htmlFor="difficulty">Difficulty: </label>
          <input className={errores.difficulty && "danger"} type="number"  name="difficulty" value={input.difficulty} onChange={handleChange} />
          {errores.difficulty && (<p className="danger">{errores.difficulty}</p>)}


          <label className="labels" htmlFor="duration">Duration: </label>
          <input className="input-duration" type="time"  name="duration" value={input.duration} onChange={handleChange} />
          {errores.duration && (<p className="danger">{errores.duration}</p>)}



          <p className="labels" >Seassion: </p>
          <select name="seassion" defaultValue={"default"} onChange={handleChange}>
          <option value={"default"}>SEASSION</option>
          {randomSeassion.map ((seassion, key) => {
            return ( 
               <option key={key} id="seassion" name="seassion" value={seassion} >{seassion}</option>
            )
          })}
          </select>
          {errores.seassion && (<p className="danger">{errores.seassion}</p>)}



          <p className="labels">Countries: </p>
          <select name="id" defaultValue="default" onChange={handleChange} >
          <option value="default" default>COUNTRIES</option>
          {countries.map (countries => {
            return ( 
               <option key={countries.id} id="id" name="id" value={countries.id} >{countries.name}</option>
            )
          })}

          </select>

          <br />
          
          {errores.name || errores.difficulty  ? (<p className="danger"><BiError size="0.8rem"/> Error: Plis, complete the form correctly</p>) : null}
          

          <button className="crear" disabled={disabledB} type="submit">CREATE</button> 
          {/* {disabledB === "false"? (<p className="true">Form sended correctly</p>) : null}      */}
          


        </form>
  


  
        {/* COUNTRIES LIST */}

        <div className="countriesList">
            <ul>     
            {
                input.id?.map((c) => {
            
                    let name = countries?.map((country) =>{
                       return country.id === c ? country.name : null
                    }) 
                    
                    return ( 
                    <div className="lista-container" key={c}>
                    <li className="lista">{name}</li>
                    <button className="boton-lista" onClick={removeCountry}><ImCross size="1rem"/></button>
                    </div>
                )
    
                })
            }
            </ul>
        </div> 
    



      </div>
    );
  }
  