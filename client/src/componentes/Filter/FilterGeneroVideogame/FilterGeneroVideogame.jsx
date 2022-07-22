import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {orderGenres} from "../redux/actions/index.js"



export default function FilterGeneroVideogame(){

    const dispatch = useDispatch()

    const genres = useSelector(state=>state.genres);


    // console.log(genres)

    // console.log(genres[0])
    

    function onSelectionchange(event){
        dispatch(orderGenres(event.target.value))
       }

       
    return (
        <div>
            <p>ORDENAR POR GENERO</p>
            <select name="select" onChange={onSelectionchange}>
                <option>-</option>
             {genres.map(g => (
                    <option key={g.id} value={g.name}>{g.name}</option>
             ))}

            </select>
        </div>
    );
}