import React from "react";
import { useDispatch } from "react-redux";
import { ASCENDENTE,DESCENDENTE } from "../constantes.js";
import { orderPoblation } from "../../../redux/actions/index.js";




export default function FilterPoblation() {
    const dispatch = useDispatch()



    function onSelectionchange(event){
        dispatch(orderPoblation(event.target.value))
       }


    return (
        <div>
            <p htmlFor="select">SEARCH BY POPULATION</p>
            <select name="select" defaultValue={"Default"} onChange={onSelectionchange}>
                <option value="Default">-</option>
                <option value={ASCENDENTE}>+</option>
                <option value={DESCENDENTE}>-</option>
            </select>
        </div>
    );
}

