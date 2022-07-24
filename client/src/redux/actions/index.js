
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


//CON ASYNC 
// export function getAllCountries() {
//   return async function (dispatch) {
//     try {
//       let response = await axios.get(`http://localhost:3001/countries/`)

//       return dispatch({
//         type: get_All_Countries,
//         payload: response.data
//       });

//     } catch (error) {
//       console.log("getAllCountries", error)
//     }

//   };
// }

// CON AXIOS.

export function getAllCountries() {
  return function (dispatch) {
    axios.get(`http://localhost:3001/countries/`)
      .then(response => {
        dispatch({
          type: get_All_Countries,
          payload: response.data
        });
      })
  };
}



// export function getAllCountries() {
//   return function(dispatch) { //LLAMADA ASINCRONICA --> NO SE CUANDO VA A SUCEDER
//     return fetch(`http://localhost:3001/countries`)
//       .then(response => response.json())
//       .then(json => {
//         dispatch({ 
//             type: get_All_Countries,
//             payload: json, //Objeto que recibo en mi request
//           });
//       });
//   };
// }

// export function getCountriesName(name) {
//   return function(dispatch) { //LLAMADA ASINCRONICA --> NO SE CUANDO VA A SUCEDER
//     return fetch(`http://localhost:3001/countries?name=${name}`)
//       .then(response => response.json())
//       .then(json => {
//         dispatch({ 
//             type: get_Countries_Name,
//             payload: json, //Objeto que recibo en mi request
//           });
//       });
//   };
// }


//CON ASYNC
export function getCountriesName(name) {
  return async function (dispatch) {
    try {
      let response = await axios.get(`http://localhost:3001/countries?name=${name}`)

      return dispatch({
        type: get_Countries_Name,
        payload: response.data
      });

    } catch (error) {
      console.log("getCountriesName", error)
    }
  };
}


//CON AXIOS

// export function getCountriesName(name) {
//   return function (dispatch) {
//     axios.get(`http://localhost:3001/countries?name=${name}`)
//       .then(response => {
//         dispatch({
//           type: get_Countries_Name,
//           payload: response.data
//         });
//       })
//   };
// }




// export function getCountriesDetail(id) {
//   return function (dispatch) {
//     try{
//       axios.get(`http://localhost:3001/countries/${id}`)
//       .then(response => {
//         dispatch({
//           type: get_Countries_Detail ,
//           payload: response.data
//         });
//       })
//     }catch(error){
//       console.log("getCountriesDetail",error)
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




// export function getCountriesDetail(id) {
//   return function (dispatch) {
//     axios.get(`http://localhost:3001/countries/${id}`)
//       .then(response => {
//         dispatch({
//           type: get_Countries_Detail,
//           payload: response.data
//         });
//       })
//   };
// }


export function deleteCountriesDetail(id) {
  return {
    type: delete_Countries_Detail,
    payload: id
  };
  
}




// export function createActivities(body) {
//   return async function (dispatch) {
//     try {
//       await axios.post("http://localhost:3001/activities/", body);
//       return dispatch({
//         type: create_Activities
//       })
//     } catch (error) {
//       console.log("createActivities", error)
//     }
//   }
// }


export function createActivities(body) {
  return async function (dispatch) {
    try{
      const newActivity = await axios.post("http://localhost:3001/activities/", body);
      console.log(newActivity);
      return dispatch({
        type:create_Activities,
      }
      )

    }catch(error){
      console.log(error)
    }
}
}


// export const createActivities = (payload) => {
//   return dispatch => {
//       try {
//           return fetch(`http://localhost:3001/activities/`, {
//               method: 'POST',
//               headers: {
//                   'Accept': 'application/json',
//                   'Content-Type': 'application/json'
//               },
//               body: JSON.stringify(payload)
//           })
//               .then((response) => {
//                   dispatch({
//                       type: create_Activities
//                   })
//               })
//       } catch (e) {
//           console.log("postActivity " + e)
//       }
//   }
// }







export function getActivities() {
  return async function (dispatch) {
    try {
      let response = await axios.get(`http://localhost:3001/activities/`)
      return dispatch({
        type: get_activities,
        payload: response.data,
      })
    } catch (error) {
      console.log("getActivities", error)
    }
  }
}









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
export const get_Countries_Detail = "GET_COUNTRIES_DETAIL";
export const delete_Countries_Detail = "DELETE_COUNTRIES_DETAIL";
export const create_Activities = "CREATE_ACTIVITIES"
export const get_activities = "GET_ACTIVITIES";



