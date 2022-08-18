import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar.jsx";
import {useHistory} from "react-router-dom";
import { getActivities, deleteActivities, truncateActivities } from "../../redux/actions/index.js";
import "./allActivity.css"
import Modal from './Modal/Modal.jsx';




function AllActivity() {


    const history = useHistory();
    const dispatch = useDispatch();

    const [modal, setModal] = useState(false)

    const [input, setInput] = useState({
        activityId: 0,
        name: "",
        difficulty: 0,
        duration: "",
        seassion: "",
        id: [], //idCountries
      },);





    const activities = useSelector((state) => state.activities);



    useEffect(() => {
      dispatch(getActivities())
    }, [dispatch]);
  
    
    



    function goForm(){ //boton lleva a formulario
        history.push("/create")
     }


     console.log("activities",activities)


     function mostrarModal(){
        setModal(true)
    }


    function ocultarModal(){
        setModal(false)
    }



    function HandleDelete(id){
        let confirm = window.confirm(`Are you sure you want to delete?`)
        if(confirm){
          dispatch(deleteActivities(id));
          window.location.reload() //refresca la pagina despues de borrar
        }
      }

      function HandleTruncate(){
        let confirm = window.confirm(`Are you sure you want to delete ALLWAYS ACTIVITY?`)
        if(confirm){
          dispatch(truncateActivities());
          window.location.reload() //refresca la pagina despues de borrar
        }
      }


    
  return (
    
    <div className="allactivity-cointeiner">

      <NavBar />

      <div>
        <h1>TODAS LAS ACTIVIDADES</h1>
        <button onClick={goForm}>Create new activity</button>

            <thead >
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Duration</th>
                    <th>Seassion</th>
                    <th>Countries</th>
                </tr>
            </thead>
            <tbody>
                {activities.map( a => (
                    <tr>
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                        <td>{a.duration}</td>
                        <td>{a.seassion}</td>
                        {a.countries.map((e) => {
                            return <td key={e.id}>{e.name}</td>
                            
                        })} 
                        
                        <td>
                            <button onClick={mostrarModal}>EDIT</button>                       
                        </td>
                        <td>
                            <button onClick={() => HandleDelete(a.id)}>DELETE</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <button onClick={HandleTruncate}>DELETE ALLWAYS ACTIVITIES</button>
      
      </div>


     {modal && <Modal ocultarModal={ocultarModal} setInput={setInput} input={input} /> }


    </div>
  )
}

export default AllActivity