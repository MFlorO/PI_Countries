import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {  getAllCountries, updateActivities } from "../../../redux/actions/index.js";
import "./modal.css"









function Modal({ocultarModal, input, setInput}) {

    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countriesAll);

    


    useEffect(() => {
      dispatch(getAllCountries);
      dispatch(updateActivities);
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



    console.log("countries",countries)
    console.log("input",input)


  return (
    
<div className='form-allActivity'> 

<form className='items-form-allActivity'>


<label className="labels-all-a" htmlFor="name">Id: </label>
<input className="input-all-a" type="text" name="id" value={input.id} />

          
<label className="labels-all-a" htmlFor="name">Name: </label>
<input className="input-all-a" type="text" name="name" value={input.name} onChange={handleChange} />



<label className="labels-all-a" htmlFor="difficulty">Difficulty: </label>
<input className="input-all-a" type="number"  name="difficulty" value={input.difficulty} onChange={handleChange} />


<label className="labels-all-a" htmlFor="duration">Duration: </label>
<input className="input-all-a-duration" type="time"  name="duration" value={input.duration} onChange={handleChange} />



<p className="labels-all-a">Seasion: </p>
<select className="input-all-a-seassion" name="seassion" defaultValue={"default"} onChange={handleChange}>
<option className="input-all-a-seassion-1" value={"default"} hidden>{input.seassion}</option>
{randomSeassion.map ((seassion, key) => {
  return ( 
     <option className="input-all-a-seassion-1" key={key} id="seassion" name="seassion" value={seassion}>{seassion}</option>
  )
})}
</select>



<p className="labels-all-a">Countries: </p>
<select className="input-all-a-seassion"name="id" defaultValue={"default"} onChange={handleChange} >
<option className="input-all-a-seassion-1" value={"default"} hidden>{input.countries.name}</option>
{countries.map (countries => {
  return ( 
     <option className="input-all-a-seassion-1" key={countries.id} id="id" name="id" value={countries.id}>{countries.name}</option>
  )
})}
</select>

<div className='botones-all-a'>
<button  className="button-all-a-editar" onClick={dispatch(updateActivities)} >EDITAR</button> 
<button className="button-all-a-cancelar" onClick={ocultarModal}>CANCELAR</button>  
</div>


</form>

</div>
  )
}

export default Modal