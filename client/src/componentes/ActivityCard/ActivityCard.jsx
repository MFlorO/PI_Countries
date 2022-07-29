import React from "react";

import "./activityCard.css"



export default function ActivityCard({ name, difficulty, seassion, duration }) {
  return (
    <div className="activity-items">

         <h4 className="activity-name">Name: {name}</h4>
         <p className="activity-p">Difficulty: {difficulty}</p>
         <p className="activity-p">Duration: {duration}Hs.</p>
         <p className="activity-p">Seassion: {seassion}</p>

    </div>
  );
}
