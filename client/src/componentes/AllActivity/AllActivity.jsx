import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar.jsx";
import {useHistory} from "react-router-dom";
import { getActivities, deleteActivities, truncateActivities } from "../../redux/actions/index.js";
import "./allActivity.css"
import swal from 'sweetalert'
import Modal from './Modal/Modal.jsx';




function AllActivity() {


    const history = useHistory();
    const dispatch = useDispatch();

    
    const activities = useSelector((state) => state.activities);


    const [modal, setModal] = useState(false)

    const [input, setInput] = useState({
        activityId: activities.id,
        name: activities.name,
        difficulty: activities.difficulty,
        duration: activities.duration,
        seassion: activities.seassion,
        id: activities.countries, //idCountries
      },);







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

        if(activities.length > 0){
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover the activities!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Poof! You have deleted all activities", {
              icon: "success",
            });
            dispatch(truncateActivities());
            window.location.reload() //refresca la pagina despues de borrar
          } else {
            swal("Your activities is safe!");

          }
        });
        } else{

          swal("Not exist any activity!");

        }
      }


    
  return (
    
    <div className="allactivity-cointeiner">

      <NavBar />

      <div className="allactivity-conteiner-2">
        <h1 className='allactivity-h1'>TODAS LAS ACTIVIDADES</h1>
        <button className="boton-aform" onClick={goForm}>Create new activity</button>

        <div>
            <thead className='lista-allactivity'>
                <tr className='lista-items-1'>
                    <th className='lista-items-1-1-1'>Id</th>
                    <th className='lista-items-1-1'>Name</th>
                    <th className='lista-items-1-1'>Duration</th>
                    <th className='lista-items-1-1'>Seassion</th>
                    <th className='lista-items-1-1'>Countries</th>
                </tr>
            </thead>
            <tbody className='lista-allactivity'> 
                {activities.map( a => (
                    <tr className='lista-items-1'>
                        <td className='lista-items-1-1-1'>{a.id}</td>
                        <td className='lista-items-1-1'>{a.name}</td>
                        <td className='lista-items-1-1'>{a.duration}</td>
                        <td className='lista-items-1-1'>{a.seassion}</td>
                        {a.countries.map((e) => {
                            return <td className='lista-items-1-1' key={e.id}>{e.name}</td>
                            
                        })} 
                        
                        <td>
                            <button className="edit-allActivity" onClick={mostrarModal}>EDIT</button>                       
                        </td>
                        <td>
                            <button className="delete-allActivity" onClick={() => HandleDelete(a.id)}>DELETE</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <button className="truncateAllActivity" onClick={HandleTruncate}>DELETE ALLWAYS ACTIVITIES</button>
          </div>
      </div>


     {modal && <Modal ocultarModal={ocultarModal} setInput={setInput} input={input} /> }


    </div>
  )
}

export default AllActivity