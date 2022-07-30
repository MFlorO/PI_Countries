

  //VALIDACION DEL FORMULARIO
  export default function validate(input){

    let errores = {};
  
    if(!input.name){
      errores.name = "No name information"
    }else if(!typeof input.name === "string"){   
      errores.name = "Error in name format"
    }
    if(!input.difficulty){
      errores.difficulty = "There is not information on the difficulty"
    }else if(!typeof input.rating === "number"){   
    errores.difficulty = "The difficulty is not a number"
    }else if (input.difficulty > 5 || input.difficulty < 0){
      errores.difficulty = "The difficulty field is not within the acceptable range."
    }

    return errores
  }

