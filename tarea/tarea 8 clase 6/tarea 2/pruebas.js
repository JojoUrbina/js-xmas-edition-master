function probarValidarSalario() {
    console.assert(validarSalario("")==="este campo no puede estar vacio","validarSalario no valido que el campo no este vacio")
    console.assert(validarSalario("adas")==="este campo solo permite numeros","validarSalario no valido que solo permita numeros en el campó")
}
function probarValidarCantidadSalarios() {
    console.assert(validarCantidadSalarios(11)==="El maximo de salarios es de 10","validarCantidadSalarios no valido que el maximo de salarios no sea mayor a 10")
}
probarValidarSalario()
probarValidarCantidadSalarios()