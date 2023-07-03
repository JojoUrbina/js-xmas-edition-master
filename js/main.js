function validacionNombre(nombre) {
  if (nombre.length === 0) {
    return "este campo debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "este campo debe tener menos de 50 caracteres";
  }
  if (!/^[a-z]+$/i.test(nombre)) {
    return "este campo solo acepta letras";
  }
  return "";
}
function validacionCiudad(ciudad) {
  if (ciudad === "") {
    return "debe elegir alguna ciudad";
  }
  return "";
}
function validacionDescripcionRegalo(descripcionRegalo) {
  if (!/^[a-z0-9 ]+$/i.test(descripcionRegalo)) {
    return "el campo descripcionRegalo debe tener solo letras y numeros";
  } else if (descripcionRegalo.length <= 50) {
    return "el campo descripcionRegalo debe tener un minimo de 50 caracteres";
  } else if (descripcionRegalo.length > 200) {
    return "el campo descripcionRegalo debe tener menos de 200 caracteres";
  } else {
    return "";
  }
}
function validarFormulario(event) {
  const $form = document.querySelector("#carta-a-santa");

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validacionNombre(nombre);
  const errorCiudad = validacionCiudad(ciudad);
  const errorDescripcionRegalo = validacionDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcionRegalo,
  };
  const esExito = manejarErrores(errores) === 0;
  if (esExito) {
    $form.className = "oculto";
    document.querySelector("#exito").className = "";
    setTimeout(function () {
      window.location.href = "wishlist.html";
    }, 5000);
  }

  event.preventDefault();
}

function manejarErrores(errores) {
  const keys = Object.keys(errores);
  const $errores = document.querySelector("#errores");
  let cantidadErrores = 0;
  keys.forEach(function (key) {
    const error = errores[key];
    let $listaDeErrores = document.querySelectorAll("#errores li");

    if (error) {
      $form[key].className = "error";

      for (let i = 0; i < $listaDeErrores.length; i++) {
        if (error === $listaDeErrores[i].innerText) {
          $listaDeErrores[i].remove();
        }
      }

      cantidadErrores++;

      const $error = document.createElement("li");
      $error.innerText = error;
      $error.id = key;
      $errores.appendChild($error);
    } else {
      $form[key].className = "";
      for (let i = 0; i < $listaDeErrores.length; i++) {
        if (key === $listaDeErrores[i].id) {
          $listaDeErrores[i].remove();
        }
      }
    }
  });
  return cantidadErrores;
}
const $form = document.querySelector("#carta-a-santa");

$form.onsubmit = validarFormulario;
//tarea: borrar la lista de errores en cada submit 1:53:00, bonus, borrar el campo adecuado en el else
