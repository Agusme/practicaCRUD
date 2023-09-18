import {
  campoRequerido,
  validarNumeros,
  validarURL,
  validarGeneral,
} from "./validaciones.js";


//traigo los elementos q necesito del html
let campoCodigo = document.getElementById("codigo");
console.log(campoCodigo);
let campoProducto = document.getElementById("producto");
let campoDescripcion = document.getElementById("descripcion");
let campoCantidad = document.getElementById("cantidad");
let campoURL = document.getElementById("URL");
let formProductos = document.getElementById("formProductos");

//variable bandera, si el producto existente es false, quiero crear, si es true quiero modificarlo
let productoExistente = false;


//asociar un evento a cada elemento
/* const handleFocus=()=>{
    console.log("desde handle focus")   
   }
   
   campoCodigo.addEventListener('focus', handleFocus)
    */
/* 
OTRA FORMA
const handleFocus=(algo)=>{
 console.log("desde handle focus")   
}

campoCodigo.addEventListener('focus', (algo)=>{
    handleFocus()
})
 */

//VALIDACIONES

campoCodigo.addEventListener("blur", () => {
  console.log("desde blur");
  campoRequerido(campoCodigo);
});

campoProducto.addEventListener("blur", () => {
  console.log("desde blur");
  campoRequerido(campoProducto);
});
campoDescripcion.addEventListener("blur", () => {
  console.log("desde blur");
  campoRequerido(campoDescripcion);
});
campoCantidad.addEventListener("blur", () => {
  console.log("desde blur");
  campoRequerido(campoCantidad);

  validarNumeros(campoCantidad);
});
campoURL.addEventListener("blur", () => {
  console.log("desde blur");
  validarURL(campoURL);
});

formProductos.addEventListener("submit", guardarProducto);

//Empieza la logida del CRUD
function guardarProducto(e) {
  //para no recargar la pagina
  e.preventDefault();
  //verificar que todos los datos sean correctos
  if (
    validarGeneral(
      campoCodigo,
      campoProducto,
      campoDescripcion,
      campoCantidad,
      campoURL
    )
  ) {
    console.log("los datos son correctos para enviar");
    if(!productoExistente){
        //crear producto
    crearProducto();
    } else{
        // modificar
modificarProducto();
    }


  }
}
