import React from "react";
import { useDispatch } from "react-redux";
import { ASCENDENTE,DESCENDENTE } from "../constantes/sort";
import { Order } from "../redux/actions";




export default function FilterAscDesc() {
    const dispatch = useDispatch()



    function onSelectionchange(event){
        dispatch(Order(event.target.value))
       }

    return (
        <div>
            <p>ASCENDENTE/DESCENDENTE</p>
            <select name="select" onChange={onSelectionchange}>
                <option>-</option>
                <option value={ASCENDENTE}>A-Z</option>
                <option value={DESCENDENTE}>Z-A</option>
            </select>
        </div>
    );
}


