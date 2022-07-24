// import { ASCENDENTE } from "../../constantes/sort.js";


import { add_Countries_Favorites, remove_Countries_Favrites, get_All_Countries, get_Countries_Name, get_Countries_Detail, delete_Countries_Detail, create_Activities, get_activities } from "../actions/index.js"


const initialState = {
    countriesFavourites: [],
    countriesAll: [],
    countriesDetail: [],
    activitiesDetail: [],
    createActivities: {},
    activities: [],
    filterCountries: [],
};




export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case add_Countries_Favorites:
            return {
                ...state,
                //   moviesFavourites: [state.moviesFavourites.concat(action.payload)]
                countriesFavourites: [...state.countriesFavourites, action.payload]

            }

        case remove_Countries_Favrites:
            return {
                ...state, //Copio el estado para NO modificar el estado viejo
                countriesFavourites: state.countriesFavourites.filter(peliculas => peliculas.id !== action.payload)
                // CON EL FILTER ESTOY TOMANDO TODAS LAS PELICULAS MENOS LA QUE ME COINCIDE CON EL ID ASI LA ELIMINO
            }


        case get_All_Countries:
            return {
                ...state,
                countriesAll: action.payload,
                filterCountries: action.payload
            }


        case get_Countries_Name:
            return {
                ...state,
                filterCountries: action.payload
            }

        case get_Countries_Detail:
            return {
                ...state,
                countriesDetail: action.payload
            }

        case delete_Countries_Detail:
            return {
                ...state,
                countriesDetail: []
            }

        case create_Activities:
            return {
                ...state,
                createActivities: action.payload
            }

        case get_activities:
            return {
                ...state,
                activities: action.payload
            };


        // case orderGenre:
        //         return {
        //             ...state,
        //             VideogamesAll: state.VideogamesAll.filter(videogame => videogame.genres !== action.payload)

        //         };


        // case Sort:
        //     let videogamesOrder = [...state.VideogamesAll]

        //     videogamesOrder.sort((a,b) =>{
        //         if(a.name < b.name){
        //             return action.payload === ASCENDENTE ? -1 : 1
        //         }
        //         if(a.name > b.name){
        //             return action.payload === ASCENDENTE ? 1 : -1
        //         }
        //         return 0;
        //     })

        //     return {
        //         ...state,
        //         filterCountries: videogamesOrder
        //     }


        default:
            return state;
    }
}
