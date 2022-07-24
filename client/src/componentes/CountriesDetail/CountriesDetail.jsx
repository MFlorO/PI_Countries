import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesDetail, deleteCountriesDetail } from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading.jsx";
import ActivityCard from "../ActivityCard/ActivityCard.jsx";




export default function CountriesDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const countriesDetail = useSelector((state) => state.countriesDetail);

  // const iD = props.match.params.id;   --> IDEM a useParams

  console.log(countriesDetail)

  useEffect(() => {
    dispatch(getCountriesDetail(id));
    console.log("el componente se monto");

    return () => {
      dispatch(deleteCountriesDetail(id));
      console.log("el componente se desmonto");
      //TENGO QUE DESMONTAR EL COMPONENTE
    };
  }, [id]);

  return (
    <div>
      {countriesDetail.imageFlag ? (
        <div>
          <img src={countriesDetail.imageFlag[1]} alt="Imagen del videojuego" />
          <h3>{countriesDetail.name}</h3>
          <p>{countriesDetail.id}</p>

          {/* <h2>{typeof countriesDetail.genres === "object"?  videogameDetail.genres.name : videogameDetail.genres}</h2>  */}

          <p>{countriesDetail.continent}</p>
          <p>{countriesDetail.capital}</p>
          <p>{countriesDetail.subregion}</p>
          <p>{countriesDetail.area}Km2</p>
          <p>{countriesDetail.population}</p>


            

          <h3>ACTIVIDADES:</h3>
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

          {/* <div>
          {countriesDetail.activities.map( a => (
            <div key={a.id}>
                <h3>{a.name}</h3>
                <p>{a.difficulty}</p>
                <p>{a.continent}</p>
            </div>
          ))}
          </div> */}

        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
