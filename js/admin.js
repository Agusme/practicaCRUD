import { Producto } from "./productoClass.js";
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
let listaProductos = []

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

function crearProducto()
{
//crear producto
//para ello vamos a crear un objeto producto
let productoNuevo = new Producto(campoCodigo.value, campoProducto.value, campoDescripcion.value, campoCantidad.value, campoURL.value)

console.log(productoNuevo)
//guardar cada obejto (producto)
listaProductos.push(productoNuevo)
//limpiar formulario
limpiarFormulario()
console.log(listaProductos)
}


function limpiarFormulario(){
    //limpiar los values del formulario
formProductos.reset();
//reset las clases de los input para que esten como eran originalmente
campoCodigo.className = "form-control"
campoProducto.className ="form-control"
campoDescripcion.className ="form-control"
campoCantidad.className ="form-control"
campoURL.className ="form-control"
//RESET variable bandera o boolean para el caso de modificar producto
productoExistente = false

}

