
import axios from "axios"



export function addCountriesFavorites(payload) {
  return {
    type: add_Countries_Favorites,
    payload
  };
}


export function removeCountriesFavrites(id) {
  return {
    type: remove_Countries_Favrites,
    payload: id
  };
}


export function getAllCountries() {
  return async function (dispatch) {
    try {
      let response = await axios.get(`http://www.localhost:3001/countries/`)

      return dispatch({
        type: get_All_Countries,
        payload: response.data
      });

    } catch (error) {
      console.log("getAllCountries", error)
    }

  };
}





export function getCountriesName(name) {
  return async function (dispatch) {
    try {
      let response = await axios.get(`http://www.localhost:3001/countries?name=${name}`)

      return dispatch({
        type: "GET_COUNTRIES_NAME",
        payload: response.data
      });

    } catch (error) {
      console.log("getCountriesName", error)
    }
  };
}



// export function getCountriesDetail(id) {
//   return function (dispatch) {
//     try{
//       axios.get(`http://www.localhost:3001/countries/${id}`)
//       .then(response => {
//         dispatch({
//           type: get_Countries_Detail ,
//           payload: response.data
//         });
//       })
//     }catch(error){
//       console.log(getCountriesDetail,error)
//     }
//   };
// }


export function getCountriesDetail(id) {
  return async function (dispatch) {
    try {
      let response = await axios.get(`http://localhost:3001/countries/${id}`)
      return dispatch({
        type: get_Countries_Detail,
        payload: response.data
      })
    } catch (error) {
      console.log("getCountriesDetail", error)
    }
  }
}


export function deleteCountriesDetail(id) {
  return {
    type: delete_Countries_Detail,
    payload: id
  };
}

export function getActivitiesDetail(id) {
  return async function (dispatch) {
    try {
      let response = await axios.get(`http://localhost:3001/activities/${id}`)
      return dispatch({
        type: get_Activities_Detail,
        payload: response.data
      })
    } catch (error) {
      console.log("getActivitiesDetail", error)
    }
  }
}


export function deleteActivitiesDetail(id) {
  return {
    type: delete_Activities_Detail,
    payload: id
  };
}


export function createCountries(body) {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/activities/", body);
      return dispatch({
        type: create_Countries
      })
    } catch (error) {
      console.log("createCountries", error)
    }
  }
}



export function getActivities() {
  return async function (dispatch) {
    try {
      let response = await axios.get(`http://localhost:3001/activities`)
      return dispatch({
        type: get_activities,
        payload: response.data,
      })
    } catch (error) {
      console.log("getActivities", error)
    }
  }
}


// export function orderGenres(genre) {
//   return {
//     type: orderGenre,
//     payload:genre

//   };
// }





// export function Order(order) {
//   return {
//     type: Sort,
//     payload: order,
//     //El playload va a ser el videojeugo a eliminar 
//   };
// }







export const add_Countries_Favorites = "ADD_COUNTRIES_FAVORITE";
export const remove_Countries_Favrites = "REMOVE_COUNTRIES_FAVORITE";
export const get_All_Countries = "GET_ALL_COUNTRIES"
export const get_Countries_Name = "GET_COUNTRIES_NAME";
export const get_Countries_Detail = "GET_VIDEOGAME_DETAIL";
export const delete_Countries_Detail = "DELETE_VIDEOGAME_DETAIL";
export const get_Activities_Detail = "GET_ACTIVITIES_DETAIL";
export const delete_Activities_Detail = "DELETE_ACTIVITIES_DETAIL";
export const create_Countries = "CREATE_VIDEOGAME"
export const get_activities = "GET_ACTIVITIES";

// export const videogameFilter = "VIDEOGAME_FILTER";


// export const pagina = "PAGINA";
// export const Sort = "ORDER";

// export const orderGenre = "ORDER_GENRE"


