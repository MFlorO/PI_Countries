import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getCountriesDetail,  deleteCountriesDetail,} from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading.jsx";





export default function Activity() {

  const { id } = useParams();

  const dispatch = useDispatch();
  const activitiesDetail = useSelector((state) => state.activitiesDetail);
  // const iD = props.match.params.id;   --> IDEM a useParams

  console.log(activitiesDetail);
  console.log(id);

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
      {activitiesDetail.lenght > 0 ? (
        <div>

          <h3>{activitiesDetail.name}</h3>
          <p>{activitiesDetail.difficulty}</p>
          <p>{activitiesDetail.duration}</p>
          <p>{activitiesDetail.seassion}</p>

        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
