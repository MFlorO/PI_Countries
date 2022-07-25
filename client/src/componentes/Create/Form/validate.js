

  //VALIDACION DEL FORMULARIO
  export default function validate(input){

    let errores = {};
  
    if(!input.name){
      errores.name = "No hay informacion del nombre"
    }

    if(!input.difficulty){
      errores.difficulty = "No hay informacion del difficulty"
    }else if(!typeof input.rating === "number"){   
    errores.difficulty = "El campo difficulty no es un numero"
    }else if (input.difficulty > 5 || input.difficulty < 0){
      errores.difficulty = "El campo difficulty no esta dentro del rango aceptable"
    }

    return errores
  }

