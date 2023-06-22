// function probarValidarNombre() {
//   console.assert(
//       validarNombre('') === 'Este campo debe tener al menos 1 caracter',
//       'Validar nombre no validó que el nombre no sea vacío',
//   );

//   console.assert(
//       validarNombre(
//           '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
//       'Este campo debe tener menos de 50 caracteres',
//       'Validar nombre no validó que el nombre sea menor a 50 caracteres',
//   );
// }
function probarValidarNombre() {
    console.assert(validacionNombre("")===
    "este campo debe tener al menos 1 caracter",
    "validar nombre no valido que el nombre no este vacio")

    console.assert(validacionNombre("1231132132131312312312312321123213213211111111111111111111111111111111123")===
    "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no valido que el nombre sea menor a 50 caracteres")
    
}
probarValidarNombre();
