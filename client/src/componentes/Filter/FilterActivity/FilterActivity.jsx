import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities, orderTypeActivities, getAllCountries } from "../../../redux/actions/index.js";
import "./filterActivity.css"



export default function FilterActivity() {

  const activities = useSelector((state) => state.activities);
  const countries = useSelector((state) => state.countriesAll);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getAllCountries());
  }, [dispatch]);

  console.log("activities-filter", activities)
  console.log("countries-filter", countries)


  function onActivityChange(event) {
    event.preventDefault()
    dispatch(orderTypeActivities(event.target.value));
  }







  return( 

  <div className="filter-activity">

      <p className="filter-p" htmlFor="select">SEARCH BY TYPE OF ACTIVITY</p>
      <select name="select" defaultValue={"Default"} onChange={onActivityChange}>
        <option value="Default">-</option>
        {activities.map( a => {
            return <option key={a.id} value={a.countries}>{a.name.toUpperCase()}</option>
        })}
      </select> 


  </div>

  )
}
