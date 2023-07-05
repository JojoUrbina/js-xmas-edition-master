/*# Tarea clase 8

A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias.

regExp ,objetos ,forEach,Estils,mostrar errores en interfas ususarios  y escribir pruebas

TIP: Las edades no pueden tener decimales.
*/

let $form = document.querySelector("#formulario");
let $botonAgregarFamiliares = document.querySelector("#agregar-familiares");
let $botonCalcular = document.querySelector("#calcular");
let $botonEmpezarDeNuevo = document.querySelector("#empezar-de-nuevo");

function crearFamiliares(cantidadFamiliares) {
  EmpezarDeNuevo();

  let $divFamiliar = document.querySelector("#familiares");
  for (let i = 1; i <= cantidadFamiliares; i++) {
    let $div = document.createElement("div");
    $div.className = "div-familiar";

    let $label = document.createElement("label");
    $label.innerText = `Familiar #${i}: `;

    let $input = document.createElement("input");
    $input.placeholder = "ingresar Edad";
    $input.className = "edad-familiar";
    $input.type = "number";

    $div.appendChild($label);
    $div.appendChild($input);
    $divFamiliar.appendChild($div);
  }
}
function validarCantidadFamiliares(cantidadFamiliares) {
  if (cantidadFamiliares <= 0) {
    return "la cantidad de familiares debe ser mayor a 0";
  }
  if (cantidadFamiliares > 10) {
    return "la cantidad de familiares debe ser menor a 10";
  }
  if (cantidadFamiliares === "") {
    return "debe escribir alguna cantidad entre 1 y 9";
  }
  if (cantidadFamiliares === "") {
    return "este campo no puede estar vacio";
  }
  return "";
}
function validarEdad(edad) {
  if (edad > 100) {
    return "La edad debe ser menor de 100";
  }
  if (edad === "") {
    return "este campo no puede estar vacio";
  }
  if (edad < 0) {
    return "la edad debe ser mayor a 0";
  }
  return "";
}

$botonAgregarFamiliares.onclick = function (e) {
  let cantidadFamiliares = document.querySelector("#cantidad-familiares").value;
  const errorCantidad = validarCantidadFamiliares(cantidadFamiliares);
  if (errorCantidad) {
    manejarErrorCantidad(errorCantidad);
  } else {
    crearFamiliares(cantidadFamiliares);
  }
  e.preventDefault();
};

$botonCalcular.onclick = function (e) {
  let $edadesFamiliares = document.querySelectorAll(".edad-familiar");
  let edadesFamiliares = extraerNumeros($edadesFamiliares);

  let familiarMayor = extraerNumeroMayor(edadesFamiliares);
  let familiarMenor = extraerNumeroMenor(edadesFamiliares);
  let promedioEdadFamilia = calcularPromedio(edadesFamiliares).toFixed(2);
  let $divResultado = document.querySelector("#resultado");

  let resultado = `El familiar con mas edad tiene ${familiarMayor} años,
  el menor tiene ${familiarMenor} ${familiarMenor > 1 ? "años " : "año "}
   y  el promedio de edad en la familia es de ${promedioEdadFamilia} años`;

  $divResultado.innerText = resultado;

  e.preventDefault();
};

$botonEmpezarDeNuevo.onclick = function (e) {
  EmpezarDeNuevo();
  e.preventDefault();
};

function EmpezarDeNuevo() {
  document.querySelector("#cantidad-familiares").value = "";
  document.querySelector("#resultado").innerText = "";
  let divsExistentes = document.querySelectorAll(".div-familiar");
  for (let i = 0; i < divsExistentes.length; i++) {
    divsExistentes[i].remove();
  }
}
function validarFormulario() {
  const cantidadFamiliares = $form["cantidad-familiares"].value;
  const $edadesFamiliares = document.querySelectorAll(".edad-familiar");
  const edadesFamilares = extraerNumeros($edadesFamiliares);
}

function manejarErrorCantidad(errorCantidad) {
  const $errores = document.querySelector("#errores");
  if (errorCantidad) {
    const $error = document.createElement("li");
    $error.innerText = errorCantidad;
    $errores.appendChild($error);
  }
}

// function manejarErrores(errores) {
//   const keys = Object.keys(errores);
//   const $errores = document.querySelector("#errores");

//   keys.forEach(function (key) {
//     let $listaDeErrores=document.querySelectorAll("#errores li");
//     const error = errores[key];
//     for (let i = 0; i < $listaDeErrores.length; i++) {
//       if (!($listaDeErrores[i].innerText === error)) {
//         const $error = document.createElement("li");
//         $error.innerText = error;
//         $errores.appendChild($error)
//       }
//     }
//   });
// }
