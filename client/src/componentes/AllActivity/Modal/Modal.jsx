import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {  getAllCountries, updateActivities } from "../../../redux/actions/index.js";
import "./modal.css"


function Modal({ocultarModal, input, setInput}) {

    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);

    
    // const [input, setInput] = useState({
    //     activityId: activities.id,
    //     name: "",
    //     difficulty: 0,
    //     duration: "",
    //     seassion: "",
    //     id: [], //idCountries
    //   },);


    useEffect(() => {
      dispatch(getAllCountries());
    }, [dispatch]);
  
    
  const randomSeassion = ['Summer', "Autunm" , 'Winter', 'Spring']



  function handleChange(event) {

    if(event.target.name === "id"){

      if(!input.id.includes(event.target.value)){

        setInput({
          ...input, 
          id: [...input.id, event.target.value]
        })
      }
       
    }else{
        
      setInput({
      ...input,
      [event.target.name]: event.target.value,
      })
    }}





  return (
    
<div className='form-allActivity'> 
<form className='items-form-allActivity'>


<label  htmlFor="name">Id: </label>
<input type="text" name="id" value={input.activityId} />

          
<label  htmlFor="name">Name: </label>
<input type="text" name="name" value={input.name} onChange={handleChange} />



<label htmlFor="difficulty">Difficulty: </label>
<input type="number"  name="difficulty" value={input.difficulty} onChange={handleChange} />


<label htmlFor="duration">Duration: </label>
<input className="input-duration" type="time"  name="duration" value={input.duration} onChange={handleChange} />



<p >Seasion: </p>
<select name="seassion" defaultValue={"default"} onChange={handleChange}>
<option value={"default"}>SEASION</option>
{randomSeassion.map ((seassion, key) => {
  return ( 
     <option key={key} id="seassion" name="seassion" value={seassion} >{seassion}</option>
  )
})}
</select>



{/* <p >Countries: </p>
<select name="id" defaultValue="default" onChange={handleChange} >
<option value="default" default>COUNTRIES</option>
{countries.map (countries => {
  return ( 
     <option key={countries.id} id="id" name="id" value={countries.id} >{countries.name}</option>
  )
})}
</select> */}

<button  onClick={dispatch(updateActivities)} >EDITAR</button> 
<button  onClick={ocultarModal}>CANCELAR</button>  




</form>
</div>
  )
}

export default Modal