export const campoRequerido = (input) => {
    console.log("desde campo REQUERIDO");
    console.log(input.value);
    if (input.value.trim().length > 0) {
      console.log("aqui todo bien");
      input.className = "form-control is-valid";
      return true;
    } else {
      console.log("hay error");
      input.className = "form-control is-invalid";
      return false;
    }
  };
 export const validarNumeros = (input) => {
    let patron = /^[0-9]{1,3}$/;
    //el metodo test permite comparar un string con el patron y devuelve true o false
    //regex.test('string a validar')
    if (patron.test(input.value)) {
      //cumple con la regex
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  };
  
 export const validarURL = (input) => {
    let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  
    if (patron.test(input.value)) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  };
  
 export const validarGeneral = (
    campoCodigo,
    campoProducto,
    campoDescripcion,
    campoCantidad,
    campoURL
  ) => {
      let alert= document.getElementById("mensajeAlert")
   
      //comparar que pase cada una de las validaciones y si no pasa mostrar el alert
      if (
      campoRequerido(campoCodigo) &&
      campoRequerido(campoProducto) &&
      campoRequerido(campoDescripcion) &&
      validarNumeros(campoCantidad) &&
      validarURL(campoURL)
    ) {
      alert.className = "alert alert-danger my-3 d-none"
      console.log("validacion correcta")
      return true
    } else {
      console.log("validacion INCORRECTA")
      alert.className = "alert alert-danger my-3"
  return false
  }
  };
  
/* tambien se puede exportar asi 
export{
campoRequerido,
validarURL,
validarGeneral
}
*/