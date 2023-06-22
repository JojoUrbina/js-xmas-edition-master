const $form=document.querySelector("#carta-a-santa");
const nombre=$form.nombre.value
const ciudad=$form.ciudad.value
const comportamiento=$form.comportamiento.value
const descripcionRegalo=$form["descripcion-regalo"].value

function validacionNombre(nombre){
    if (nombre.length===0) {
        return "este campo debe tener al menos 1 caracter"
    }
    if (nombre.length>=50) {
        return "este campo debe tener menos de 50 caracteres"
    }
    return ""
}
function ValidacionCiudad(ciudad) {
    if (ciudad==="") {
        return "debe elegir alguna ciudad"
    }
    return ""
}
console.log(ValidacionCiudad("Buenos Aires"))

validacionNombre(nombre)