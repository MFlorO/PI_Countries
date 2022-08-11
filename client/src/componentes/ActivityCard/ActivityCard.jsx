import React from "react";
import { useDispatch} from "react-redux";
import "./activityCard.css"
import {deleteActivities} from "../../redux/actions/index.js"



export default function ActivityCard({ idc, id, name, difficulty, seassion, duration }) {

  const dispatch = useDispatch();

  // console.log(idc)
  // console.log(id)

  function HandleDelete(){
    dispatch(deleteActivities(id))
    alert(`Actividad "${name.toUpperCase()}" Eliminada`)
    window.location.reload() //refresca la pagina despues de borrar
  }


  return (
    <div className="activity-items">

         <h4 className="activity-name">{name.toUpperCase()}</h4>
         <p className="activity-p">Difficulty: {difficulty}</p>
         <p className="activity-p">Duration: {duration}Hs</p>
         <p className="activity-p">Seassion: {seassion}</p>
         <button className="activity-button-delete" onClick={HandleDelete}>ELIMINAR</button>

    </div>
  );
}
