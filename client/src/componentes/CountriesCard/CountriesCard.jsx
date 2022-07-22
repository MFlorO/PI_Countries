import React from "react";
import {useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import {addCountriesFavorites}from "../../redux/actions/index.js"
import "./countriesCard.css"
// import Alert from "../Alert/Alert.jsx"






export default function CountriesCard({ id, name, image, continent, capital, subregion, area, population }) {

  const dispatch = useDispatch();

  function onChangeClick(){
    dispatch(addCountriesFavorites({name: name, id: id, image:image}))
    alert("ADDED COUNTRY")
  }

  return (
    
  <div>
      <button onClick={() => onChangeClick()  }> ♥ </button>

      <h3>{name}</h3>
      <Link to={`/detail/${id}`}><img src={image} alt="" /></Link>
      <p>{continent}</p>

  </div>
  );
}
