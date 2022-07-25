import React from "react";
import { Link } from "react-router-dom";



export default function Activity({ id, name, difficulty, seassion, duration }) {
  return (
    <div>
     <section>
      <Link to={`/activity/${id}`}>
        <h3>Name: {name}</h3>
      </Link>
      <p>Difficulty: {difficulty}</p>
      <p>Seassion: {seassion}</p>
      <p>Duration: {duration}Hs.</p>
     </section>
    </div>
  );
}
