function extraerNumeros() {
    let $edadesFamiliares = document.querySelectorAll(".edad-familiar");
    let numerosExtraidos = [];
    for (let i = 0; i < $edadesFamiliares.length; i++) {
      numerosExtraidos.push(Number($edadesFamiliares[i].value));
    }
    return numerosExtraidos;
  }
  
  function extraerNumeroMenor(edadesFamiliares) {
    let numeroMenor = edadesFamiliares[0];
    for (let i = 1; i < edadesFamiliares.length; i++) {
      if (edadesFamiliares[i] < numeroMenor) {
        numeroMenor = edadesFamiliares[i];
      }
    }
    return numeroMenor;
  }
  
  function extraerNumeroMayor(edadesFamiliares) {
    let numeroMayor = edadesFamiliares[0];
    for (let i = 1; i < edadesFamiliares.length; i++) {
      if (edadesFamiliares[i] > numeroMayor) {
        numeroMayor = edadesFamiliares[i];
      }
    }
    return numeroMayor;
  }
  function calcularPromedio(edadesFamiliares) {
    let total = 0;
    for (let i = 0; i < edadesFamiliares.length; i++) {
      total += edadesFamiliares[i];
    }
    return total / edadesFamiliares.length;
  }