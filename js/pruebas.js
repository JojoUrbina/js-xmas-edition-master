function probarValidacionNombre() {
  console.assert(
    validacionNombre("") === "este campo debe tener al menos 1 caracter",
    "validar nombre no valido que el nombre no este vacio"
  );

  console.assert(
    validacionNombre(
      "1231132132131312312312312321123213213211111111111111111111111111111111123"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no valido que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validacionNombre("Ejemplo") === "",
    "La validación del nombre falló para un nombre válido"
  );
}

function probarValidacionCiudad() {
  console.assert(
    validacionCiudad("") === "debe elegir alguna ciudad",
    "validacionCiudad no esta validando que el usuario elija una ciudad"
  );
  console.assert(
    validacionCiudad("Buenos Aires") === "",
    "La validación de la ciudad falló para una ciudad válida"
  );
}

function probarValidacionDescripcionRegalo() {
  console.assert(
    validacionDescripcionRegalo("Descripción corta") ===
      "este campo debe tener un mínimo de 50 caracteres",
    "La validación descripciónRegalo no valido una descripción con menos de 50 caracteres"
  );

  // (tiene 91 caracteres)
  console.assert(
    validacionDescripcionRegalo(
      "1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950"
    ) === "",
    "La validación descripciónRegalo no valido una descripcion correcta con mas de 50 caracteres y menos de 200"
  );

  // (tiene 201 caracteres)
  console.assert(
    validacionDescripcionRegalo(
      "123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100111111111"
    ) === "este campo debe tener menos de 200 caracteres",
    "La validación descripciónRegalo no valido que la descripcion tuviera menos de 200 caracteres"
  );
}
probarValidacionNombre();
probarValidacionCiudad();
probarValidacionDescripcionRegalo();
