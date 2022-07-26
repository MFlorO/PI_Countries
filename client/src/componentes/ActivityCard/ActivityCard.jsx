import React from "react";



export default function ActivityCard({ id, name, difficulty, seassion, duration }) {
  return (
    <div>
     <section>
      
      <h4>Name: {name}</h4>
      <p>Difficulty: {difficulty}</p>
      <p>Seassion: {seassion}</p>
      <p>Duration: {duration}Hs.</p>

     </section>
    </div>
  );
}
