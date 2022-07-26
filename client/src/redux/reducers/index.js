import { DESCENDENTE } from "../../componentes/Filter/constantes.js";


import { add_Countries_Favorites, remove_Countries_Favrites, OrderCont, get_All_Countries, get_Countries_Name, get_Countries_Detail, delete_Countries_Detail, create_Activities, get_activities, asc_des, order_Poblation, Order_Type_Activities } from "../actions/index.js"


const initialState = {
    countriesAll: [],
    filterCountries: [],
    countriesDetail: [],
    createActivities: [],
    activities: [],
    countriesFavourites: [],
};




export default function rootReducer(state = initialState, action) {

    switch (action.type) {

        case create_Activities:
            return {
                ...state,
                createActivities: action.payload
            }

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


        case get_activities:
            return {
                ...state,
                activities: action.payload
            };


        
        case OrderCont:
           const continetFilter = action.payload === "Default" ? state.countriesAll : state.countriesAll.filter(el => el.continent[0] === action.payload)
            return{
              ...state,
             filterCountries: continetFilter    
            }
               

        case Order_Type_Activities:
            const activitiesFilter = action.payload === "Default" ? state.countriesAll : state.countriesAll.filter(el => el.activities.name === action.payload)
            console.log(action.payload)
            return{
            ...state,
            filterCountries: activitiesFilter   
            }


        case asc_des:

            let continetOrder = [...state.countriesAll]

            let continetOrder2 = action.payload === "Default" ? continetOrder :

            continetOrder.sort((a,b) =>{
                if(a.name < b.name){
                    return action.payload === DESCENDENTE ? 1 : -1
                }
                if(a.name > b.name){
                    return action.payload === DESCENDENTE ? -1 : 1
                }
                return 0;
            })

            return {
                ...state,
                filterCountries: continetOrder2
            }



            case order_Poblation:
                let poblationOrder =  [...state.countriesAll]

                let poblationOrder2 =  action.payload === "Default" ? poblationOrder :
    
                poblationOrder.sort((a,b) =>{

                    if(a.population < b.population){
                        return action.payload === DESCENDENTE ? -1 : 1
                    }
                    if(a.population > b.population){
                        return action.payload === DESCENDENTE ? 1 : -1
                    }
                    return 0;
                })
    
                return {
                    ...state,
                    filterCountries: poblationOrder2
                }


        default:
            return state;
    }
}
