/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

/*
TAREA 2:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $btnAgregar = document.querySelector("#agregar");
const $btnQuitar = document.querySelector("#quitar");
const $btnCalcular = document.querySelector("#calcular");

$btnAgregar.onclick = function (e) {
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

  const salarioPromedioMensual = (calcularPromedio(salarios) / 12).toFixed(2);

  mostrarSalario(extraerNumeroMayor(salarios), "mayor");
  mostrarSalario(extraerNumeroMenor(salarios), "menor");
  mostrarSalario(calcularPromedio(salarios), "promedio-anual");
  mostrarSalario(salarioPromedioMensual, "promedio-mensual");

  mostrarResultado();
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
