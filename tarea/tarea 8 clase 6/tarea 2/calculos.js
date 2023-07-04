function extraerNumeroMayor(listaDeNumeros) {
  let numeroMayor = listaDeNumeros[0];
  for (let i = 1; i < listaDeNumeros.length; i++) {
    if (listaDeNumeros[i] > numeroMayor) {
      numeroMayor = listaDeNumeros[i];
    }
  }
  return numeroMayor;
}
function extraerNumeroMenor(listaDeNumeros) {
  let numeroMenor = listaDeNumeros[0];
  for (let i = 1; i < listaDeNumeros.length; i++) {
    if (listaDeNumeros[i] < numeroMenor) {
      numeroMenor = listaDeNumeros[i];
    }
  }
  return numeroMenor;
}
function calcularPromedio(listaDeNumeros) {
  let acumulado = 0;
  for (let i = 0; i < listaDeNumeros.length; i++) {
    acumulado += listaDeNumeros[i];
  }
  return (acumulado / listaDeNumeros.length).toFixed(2);
}
function extraerNumeros(listaDeNumeros) {
  let numerosExtraidos = [];
  for (let i = 0; i < listaDeNumeros.length; i++) {
    if (listaDeNumeros[i].value) {
      numerosExtraidos.push(Number(listaDeNumeros[i].value));
    }
  }
  return numerosExtraidos;
}
