function probarValidarCantidadFamiliares() {
    console.assert(
        validarCantidadFamiliares("")==="este campo no puede estar vacio",
        "validarCantidadFamiliares no esta validando que el campo no este vacio"
        );

    console.assert(
        validarCantidadFamiliares(0)==="la cantidad de familiares debe ser mayor a 0",
        "validarCantidadFamiliares no esta validando que la cantidad sea mayor a 0"
    )
    console.assert(
        validarCantidadFamiliares(11)==="la cantidad de familiares debe ser menor a 10",
        "validarCantidadFamiliares no esta validando que la cantidad de familiares sea menor a 10"
    )
}
function probarValidarEdad(){
    console.assert(
        validarEdad("")==="este campo no puede estar vacio",
        "validarEdad no esta validando que el campo edad no este vacio"
    )
    console.assert(
        validarEdad(0)==="la edad debe ser mayor a 0",
        "validarEdad no esta validando que la edad sea mayor a 0"
    )
    console.assert(
        validarEdad(101)==="La edad debe ser menor de 100",
        "validarEdad no esta validando que la edad sea menor a 100"

    )
}

probarValidarCantidadFamiliares()
probarValidarEdad()