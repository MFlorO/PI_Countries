import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesName, getAllCountries} from "../../redux/actions/index.js";
import "./search.css"







export default function Search() {

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  

  function onSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    dispatch(getCountriesName(search))
    setSearch("")
    


  }

  function onClickReset(){
    dispatch(getAllCountries())
  }

  return (
    <div className="search">

      <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search county..."
        value={search}
        onChange={onSearchChange}
      />
      <button type="submit">BUSCAR</button>
      <button onClick={onClickReset}>RESET</button>
      </form>


    </div>
  );
}