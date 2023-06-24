
function validacionNombre(nombre) {
  if (nombre.length === 0) {
    return "este campo debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "este campo debe tener menos de 50 caracteres";
  }
  if (!/^[a-z]+$/i.test(nombre)) {
    return "este campo solo acepta letras";
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
  if (!/^[a-z0-9 ]+$/i.test(descripcionRegalo)) {
    return "el campo descripcionRegalo debe tener solo letras y numeros";
  } else if (descripcionRegalo.length <= 50) {
    return "el campo descripcionRegalo debe tener un minimo de 50 caracteres";
  } else if (descripcionRegalo.length > 200) {
    return "el campo descripcionRegalo debe tener menos de 200 caracteres";
  } else {
    return "";
  }
}
function validarFormulario(event) {
  
  
  const $form =document.querySelector("#carta-a-santa");
  
  const nombre= $form.nombre.value;
  const ciudad=$form.ciudad.value;
  const descripcionRegalo=$form["descripcion-regalo"].value;
  
  const errorNombre=validacionNombre(nombre);
  const errorCiudad=validacionCiudad(ciudad);
  const errorDescripcionRegalo=validacionDescripcionRegalo(descripcionRegalo);

  const errores={
    nombre:errorNombre,
    ciudad:errorCiudad,
    descripcionRegalo:errorDescripcionRegalo
  };
  manejarErrores(errores)
  
  event.preventDefault();
}

function manejarErrores(errores) {
  
  errorNombre=errores.nombre;
  errorCiudad=errores.ciudad;
  errorDescripcionRegalo=errores.descripcionRegalo

  if (errorNombre) {
    $form.nombre.className="error"
    
  } else {
    $form.nombre.className=""
  }
  if (errorCiudad) {
    $form.ciudad.className="error"   
  } else {
    $form.ciudad.className=""
  }
  if (errorDescripcionRegalo) {
    $form["descripcion-regalo"].className="error"
  } else {
    $form["descripcion-regalo"].className=""
  }
}
const $form = document.querySelector("#carta-a-santa");

$form.onsubmit = validarFormulario;