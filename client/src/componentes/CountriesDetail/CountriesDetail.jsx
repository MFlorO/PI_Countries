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
      //TENGO QUE DESMONTAR EL COMPONENTE
    };
  }, [dispatch,id]);

  

  return (
    <div className="countries-details">
      {countriesDetail.imageFlag ? (

        <div>

          <img src={countriesDetail.imageFlag[1]} alt="Imagen del videojuego" />
          <h3>{countriesDetail.name}</h3>
          <p>Code: {countriesDetail.id}</p>
          <p>Continent: {countriesDetail.continent}</p>
          <p>Capital: {countriesDetail.capital}</p>
          <p>Subregion: {countriesDetail.subregion}</p>
          <p>Area: {countriesDetail.area}Km2</p>
          <p>Population: {countriesDetail.population}</p>
          

          <h3>ACTIVITIES:</h3>
          {countriesDetail.activities.map((a) => (
            <div key={a.id}>
              <ActivityCard
                name={a.name}
                difficulty={a.difficulty}
                seassion={a.seassion}
                duration={a.duration}
              />
            </div>
          ))}

     

        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
