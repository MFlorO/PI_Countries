import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCountriesFavrites } from "../../redux/actions/index.js";
import { Link } from 'react-router-dom';
import "./myList.css"




export default function MyList(){

     
    const dispatch = useDispatch();

    const countriesFavourites = useSelector(state=>state.countriesFavourites);

    console.log(countriesFavourites)


    return (
        <div className="myList">
          <h2>COUNTRY LIST</h2>
          <ul>
            {countriesFavourites.map(countries =>  
            <div key={countries.id}>
               <Link to={`/detail/${countries.id}`}>
                  <li>{countries.name}</li>
               </Link>
               <img src={countries.imageFlag} alt="" />
               <button onClick={() => dispatch(removeCountriesFavrites(countries.id))}> X </button>
            </div>
            )}
          </ul>
        </div>
      );
}



