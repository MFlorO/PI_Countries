import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesDetail, deleteCountriesDetail } from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading.jsx";
import ActivityCard from "../ActivityCard/ActivityCard.jsx";

import "./countriesDetail.css"




export default function CountriesDetail() {
  const { id } = useParams();  // const iD = props.match.params.id;   --> IDEM a useParams

  const dispatch = useDispatch();
  const countriesDetail = useSelector((state) => state.countriesDetail);

 



  useEffect(() => {
    dispatch(getCountriesDetail(id));
    console.log("el componente se monto");

    return () => {
      dispatch(deleteCountriesDetail(id));
      console.log("el componente se desmonto");
      //TENGO QUE DESMONTAR EL COMPONENTE SINO ME QUEDA AHI COLGADO
    };
  }, [dispatch,id]);

  

  return (
    <div className="countries-details">
      {countriesDetail.imageFlag ? (

        <div className="countriesdetail-container">

          <h1 className="cd-h1">{countriesDetail.name}</h1>
          <img className="cd-image" src={countriesDetail.imageFlag[1]} alt="Imagen del videojuego" />
          <p className="cd-2">Code: {countriesDetail.id}</p>
          <p className="cd-2">Continent: {countriesDetail.continent}</p>
          <p className="cd-2">Capital: {countriesDetail.capital}</p>
          <p className="cd-2">Subregion: {countriesDetail.subregion}</p>
          <p className="cd-2">Area: {countriesDetail.area}Km2</p>
          <p className="cd-3">Population: {countriesDetail.population}</p>
          
        
          
      {countriesDetail.activities.length > 0 ?
          <>
          <h3 className="activity-h3">ACTIVITIES:</h3>

          <div className="activity-container">
          {countriesDetail.activities.map((a) => (
            <div  key={a.id}>
              <ActivityCard 
                idc={id}
                id={a.id}
                name={a.name}
                difficulty={a.difficulty}
                seassion={a.seassion}
                duration={a.duration}
              />
            </div>
          ))}
          </div>
          </> 
          
          : <div className="vacio-div-cdetail">The Country not have any activities</div>}

          

        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
