import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {  getActivitiesDetail,  deleteActivitiesDetail,} from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading.jsx";

export default function CountriesDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const countriesDetail = useSelector((state) => state.countriesDetail);

  // const iD = props.match.params.id;   --> IDEM a useParams

  console.log(countriesDetail);
  console.log(id);

  useEffect(() => {
    dispatch(getActivitiesDetail(id));
    console.log("el componente se monto");

    return () => {
      dispatch(deleteActivitiesDetail(id));
      console.log("el componente se desmonto");
      //TENGO QUE DESMONTAR EL COMPONENTE
    };
  }, [id]);

  return (
    <div>
      {countriesDetail.imageFlag ? (
        <div>
          <img src={countriesDetail.imageFlag[0]} alt="Imagen del videojuego" />
          <h3>{countriesDetail.name}</h3>
          <p>{countriesDetail.id}</p>

          {/* <h2>{typeof countriesDetail.genres === "object"?  videogameDetail.genres.name : videogameDetail.genres}</h2>  */}

          <p>{countriesDetail.continent}</p>
          <p>{countriesDetail.capital}</p>
          <p>{countriesDetail.subregion}</p>
          <p>{countriesDetail.area}Km2</p>
          <p>{countriesDetail.population}</p>

          <ul>
          {countriesDetail.activities.map((activity) =>{
            return <Link to={`/activity/${activity.id}`}><li>{activity.name}</li></Link>
          })}
          </ul>

        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

