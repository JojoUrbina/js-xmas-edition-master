/*# Tarea clase 8

A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias.

regExp ,objetos ,forEach,Estils,mostrar errores en interfas ususarios  y escribir pruebas

TIP: Las edades no pueden tener decimales.
*/

const $btnAgregar = document.querySelector("#agregar");
const $btnQuitar = document.querySelector("#quitar");
const $btnCalcular = document.querySelector("#calcular");

$btnAgregar.onclick = function (e) {
  let cantidadFamiliares = document.querySelectorAll(".salario-anual").length;

  const esValido = validarCantidadSalarios(cantidadFamiliares) === "";

  if (esValido) {
    console.log(cantidadFamiliares);
    const $divInputs = document.querySelector("#inputs");
    const $divSalarios = document.createElement("div");

    const $labelSalario = document.createElement("label");
    $labelSalario.innerText = "ingresar salario anual : ";

    const $inputSalario = document.createElement("input");
    $inputSalario.placeholder = "00000.00";
    $inputSalario.className = "salario-anual";

    $divSalarios.appendChild($labelSalario);
    $divSalarios.appendChild($inputSalario);
    $divInputs.append($divSalarios);
  }
};

function extraerNumeros(listaDeNumeros) {
  let numerosExtraidos = [];
  for (let i = 0; i < listaDeNumeros.length; i++) {
    if (listaDeNumeros[i].value > 0) {
      numerosExtraidos.push(Number(listaDeNumeros[i].value));
    }
  }
  return numerosExtraidos;
}

$btnCalcular.onclick = function (e) {
  const $salarios = document.querySelectorAll(".salario-anual");
  const salarios = extraerNumeros($salarios);

  let esExito = manjerarErrorSalario($salarios) === 0;
  if (esExito) {
    const salarioPromedioMensual = (calcularPromedio(salarios) / 12).toFixed(2);

    mostrarSalario(extraerNumeroMayor(salarios), "mayor");
    mostrarSalario(extraerNumeroMenor(salarios), "menor");
    mostrarSalario(calcularPromedio(salarios), "promedio-anual");
    mostrarSalario(salarioPromedioMensual, "promedio-mensual");

    mostrarResultado();
  } else {
    ocultarResultado();
  }
};

$btnQuitar.onclick = function (e) {
  const $divSalario = document.querySelectorAll("#inputs div")[0];
  $divSalario && $divSalario.remove();
  ocultarResultado();
};

function mostrarSalario(salario, salarioString) {
  let $salario = document.querySelector(`#salario-${salarioString}`);
  $salario.innerText = salario;
}

function mostrarResultado() {
  let $resultado = document.querySelector("#resultado");
  $resultado.className = "";
}
function ocultarResultado() {
  let $resultado = document.querySelector("#resultado");
  $resultado.className = "oculto";
}

function validarSalario(salario) {
  if (salario === "") {
    return "este campo no puede estar vacio";
  } else if (!/^[0-9]+$/i.test(salario)) {
    return "este campo solo permite numeros";
  }
}
function validarCantidadSalarios(salarios) {
  if (salarios >= 10) {
    return "El maximo de salarios es de 10";
  }
  return "";
}
function manjerarErrorSalario($salarios) {
  const $ulErrores = document.querySelector("#errores");
  const $liErrores = document.querySelectorAll("#errores .error-salario");
  let cantidadErrores = 0;
  for (let i = 0; i < $liErrores.length; i++) {
    $liErrores[i].remove();
  }
  $salarios.forEach(function ($inputSalario) {
    const errorSalario = validarSalario($inputSalario.value);
    if (errorSalario) {
      cantidadErrores++;
      $inputSalario.classList.add("error");
      let esRepetido = validarRepetidoEnLista(errorSalario);
      if (!esRepetido) {
        let $liError = document.createElement("li");
        $liError.innerText = errorSalario;
        $liError.className = "error-salario";
        $ulErrores.appendChild($liError);
      }
    } else {
      $inputSalario.classList.remove("error");
    }
  });
  return cantidadErrores;
}
function validarRepetidoEnLista(errorSalario) {
  const $liErrores = document.querySelectorAll("#errores .error-salario");
  for (let i = 0; i < $liErrores.length; i++) {
    if (errorSalario === $liErrores[i].innerText) {
      return true;
    } else {
      return false;
    }
  }
}
