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
function EmpezarDeNuevo() {
  document.querySelector("#cantidad-familiares").value = "";
  document.querySelector("#resultado").innerText = "";
  let divsExistentes = document.querySelectorAll(".div-familiar");
  for (let i = 0; i < divsExistentes.length; i++) {
    divsExistentes[i].remove();
  }
  const $liErrores = document.querySelectorAll("#errores .error-edad");
  for (let i = 0; i < $liErrores.length; i++) {
    $liErrores[i].remove();
  }
}
function validarCantidadFamiliares(cantidadFamiliares) {
  if (cantidadFamiliares==="") {
    return "este campo no puede estar vacio"
  }

  if (cantidadFamiliares <= 0) {
    return "la cantidad de familiares debe ser mayor a 0";
  }
  if (cantidadFamiliares > 10) {
    return "la cantidad de familiares debe ser menor a 10";
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
  if (edad <= 0) {
    return "la edad debe ser mayor a 0";
  }
  return "";
}

function manejarErrorCantidad(error) {
  let $errorCantidad = document.querySelector("#errores #error-cantidad");
  let $cantidadFamiliares = document.querySelector("#cantidad-familiares");
  if (error) {
    $errorCantidad.innerText = error;
    $errorCantidad.className = "";
    $cantidadFamiliares.className = "error";
  } else {
    $errorCantidad.innerText = "";
    $errorCantidad.className = "oculto";
    $cantidadFamiliares.className = "";
  }
}

function manejarErrorEdad($edadesFamiliares) {
  const $ulErrores = document.querySelector("#errores");
  const $liErrores = document.querySelectorAll("#errores .error-edad");
  let cantidadErrores = 0;
  for (let i = 0; i < $liErrores.length; i++) {
    $liErrores[i].remove();
  }

  $edadesFamiliares.forEach(function ($inputEdad) {
    const errorEdad = validarEdad($inputEdad.value);
    if (errorEdad) {
      cantidadErrores++;
      $inputEdad.classList.add("error");
      let esRepetido = validarRepetidoEnLista(errorEdad);
      if (!esRepetido) {
        let $liError = document.createElement("li");
        $liError.innerText = errorEdad;
        $liError.className = "error-edad";
        $ulErrores.appendChild($liError);
      }
    } else {
      $inputEdad.classList.remove("error");
    }
  });
  return cantidadErrores;
}

function validarRepetidoEnLista(errorEdad) {
  const $liErrores = document.querySelectorAll("#errores .error-edad");
  for (let i = 0; i < $liErrores.length; i++) {
    if (errorEdad === $liErrores[i].innerText) {
      return true;
    } else {
      return false;
    }
  }
}
$botonAgregarFamiliares.onclick = function (e) {
  let cantidadFamiliares = document.querySelector("#cantidad-familiares").value;
  const errorCantidad = validarCantidadFamiliares(cantidadFamiliares);
  if (errorCantidad === "") {
    manejarErrorCantidad(errorCantidad);
    crearFamiliares(cantidadFamiliares);
  } else {
    manejarErrorCantidad(errorCantidad);
  }
  e.preventDefault();
};

$botonCalcular.onclick = function (e) {
  let $edadesFamiliares = document.querySelectorAll(".edad-familiar");
  let edadesFamiliares = extraerNumeros($edadesFamiliares);

  const esExito = manejarErrorEdad($edadesFamiliares) === 0;

  if (esExito) {
    let familiarMayor = extraerNumeroMayor(edadesFamiliares);
    let familiarMenor = extraerNumeroMenor(edadesFamiliares);
    let promedioEdadFamilia = calcularPromedio(edadesFamiliares).toFixed(2);
    let $divResultado = document.querySelector("#resultado");

    let resultado = `El familiar con mas edad tiene ${familiarMayor} años,
    el menor tiene ${familiarMenor} ${familiarMenor > 1 ? "años " : "año "}
     y  el promedio de edad en la familia es de ${promedioEdadFamilia} años`;

    $divResultado.innerText = resultado;
  }

  e.preventDefault();
};

$botonEmpezarDeNuevo.onclick = function (e) {
  EmpezarDeNuevo();
  e.preventDefault();
};
