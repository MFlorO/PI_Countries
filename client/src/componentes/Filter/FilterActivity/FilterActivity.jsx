import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities, orderTypeActivities } from "../../../redux/actions/index.js";



export default function FilterActivity() {

  const activities = useSelector((state) => state.activities);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  console.log("getActivities", activities)


  function onActivityChange(event) {
    event.preventDefault()
    dispatch(orderTypeActivities(event.target.value));
  }

  

  return( 

  <div>

      <p htmlFor="select">SEARCH BY TYPE OF ACTIVITY</p>
      <select name="select" defaultValue={"Default"} onChange={onActivityChange}>
        <option value="Default">-</option>
        {activities.map( a => {
            return <option key={a.id} value={a.name}>{a.name.toUpperCase()}</option>
        })}
      </select> 


  </div>

  )
}
