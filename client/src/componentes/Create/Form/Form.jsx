import React,{useState} from "react";
import { useDispatch} from "react-redux";

import {createActivities} from "../../../redux/actions/index.js"
import validate from "./validate.js"
import "./form.css"




 




export default function Form({countries}) {

    const dispatch = useDispatch();



    //ESTADO DEL COMPONENTE.
    const [input, setInput] = useState({
        name: "",
        difficulty: 0,
        duration: "",
        seassion: "",
        countrie: [],
      });
    


   //ESTADO DE LOS ERRORES DE LA FUNCION VALIDATE
   const [errores, setErrores] = useState({});
   



   const randomSeassion = ['Summer', "Autunm" , 'Winter', 'Spring']
        




  
   function handleChange(event) {

    if(event.target.name === "countrie"){

      if(!input.countrie.includes(event.target.value)){

        const arr = input[event.target.name];
        setInput({
            ...input,
            [event.target.name]: arr.concat(event.target.value),
        });
      }


    }else{
        

      setInput({
      ...input,
      [event.target.name]: event.target.value,
      })
    
               
    setErrores(validate ({
      ...input,
      [event.target.name]:event.target.value
     }));
     
  }}



  
    

      function handleSubmit(evento) {
      evento.preventDefault();


      dispatch(createActivities(input));

      console.log("input",input)
      

       if(!errores) {
        (alert("FORMULARIO ENVIADO"))
        evento.target.reset();
       }      
       
      }

 
  






    return (


      
    <div className="form">
         
           
        
        <h1>CREATE A TOURIST ACTIVITY</h1>
  
        <form className="form-item" onSubmit={handleSubmit}>

          
          <label htmlFor="name">Name: </label>
          <input className={errores.name && 'danger'} type="text" name="name" value={input.name} onChange={handleChange} />
          {/* {errores.name && (<p className="danger">{errores.name}</p>)} */}
          

          
          <label htmlFor="rating">Difficulty: </label>
          <input className={errores.Difficulty && 'danger'} type="number"  name="difficulty" value={input.difficulty} onChange={handleChange} />
          {/* {errores.Difficulty && (<p className="danger">{errores.Difficulty}</p>)} */}


          <label htmlFor="duration">Duration: </label>
          <input type="time"  name="duration" value={input.duration} onChange={handleChange} />
          



          <p className="seassion">Seassion: </p>
          <select name="seassion" onChange={handleChange}>
          <option hidden>SEASSION</option>
          {randomSeassion.map ((seassion, key) => {
            return ( 
               <option key={key} id="seassion" name="seassion" value={seassion} defaultValue={""} >{seassion}</option>
            )
          })}

          </select>




         {/* ################      COUNTRIES              ###################### */}

          <p className="countrie">Countries: </p>
          <select name="countrie" onChange={handleChange} >
          <option hidden>COUNTRIES</option>

          {countries.map (countries => {
            return ( 
               <option key={countries.id} id="countrie" name="countrie" value={countries.id}>{countries.name}</option>
            )
          })}

          </select>

  

          <button className="crear" type="submit">CREATE</button>          
        </form>
  


  
        {/* COUNTRIES LIST */}

        <div className="countriesList">
            <ul>     
            {
                input.countrie?.map((c) => {
            
                    let name = countries?.map((country) =>{
                       return country.id === c ? country.name : null
                    }) 
                    
                    return ( 
                    <div key={c}>
                    <li>{name}</li>
                    </div>
                )
    
                })
            }
            </ul>
        </div> 
    



      </div>
    );
  }
  