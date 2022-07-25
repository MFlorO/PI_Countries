import React from "react";
import {useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import {addCountriesFavorites}from "../../redux/actions/index.js"
import "./countriesCard.css"
// import Alert from "../Alert/Alert.jsx"






export default function CountriesCard({ id, name, image, continent}) {

  const dispatch = useDispatch();

  function onChangeClick(){
    dispatch(addCountriesFavorites({name: name, id: id, image:image}))
    alert(`ADDED "${name.toUpperCase()}" A MY LIST`)
  }

  return (
    
  <div className="countries-card">
      <button className="boton-fav" onClick={() => onChangeClick()  }> ♥ </button>

      <h3>{name}</h3>
      <Link to={`/detail/${id}`}><img className="bandera"src={image} alt="" /></Link>
      <p>{continent}</p>

  </div>
  );
}
