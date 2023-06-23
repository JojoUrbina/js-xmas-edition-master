const $form = document.querySelector("#carta-a-santa");
const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form["descripcion-regalo"].value;

function validacionNombre(nombre) {
  if (nombre.length === 0) {
    return "este campo debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "este campo debe tener menos de 50 caracteres";
  }
  if (!/^[a-z]+$/i.test(nombre)) {
    return "este campo solo acepta letras"
  }
  return "";
}
function validacionCiudad(ciudad) {
  if (ciudad === "") {
    return "debe elegir alguna ciudad";
  }
  return "";
}
function validacionDescripcionRegalo(descripcionRegalo) {
  if(!/^[a-z0-9 ]+$/i.test(descripcionRegalo)){
    return "el campo descripcionRegalo debe tener solo letras y numeros"
  }
  else if (descripcionRegalo.length <= 50) {
    return "el campo descripcionRegalo debe tener un minimo de 50 caracteres";
  }
  else if (descripcionRegalo.length > 200) {
    return "el campo descripcionRegalo debe tener menos de 200 caracteres";
  }else{return ""}
}


validacionNombre(nombre);
validacionCiudad(ciudad);
console.log(validacionDescripcionRegalo(descripcionRegalo));
