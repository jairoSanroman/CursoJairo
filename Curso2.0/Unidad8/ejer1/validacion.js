function validarFormulario() {

    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;


    // Validar nombre vacío

    if (nombre == "") {

        alert("El campo 'nombre' es obligatorio");
        document.getElementById("nombre").focus();

        return false;
    }


    // Validar que el nombre solo tenga letras y espacios

    var expresionNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;

    if (!expresionNombre.test(nombre)) {

        alert("El campo nombre sólo acepta letras y espacios en blanco");
        document.getElementById("nombre").focus();

        return false;
    }


    // Validar edad vacía

    if (edad == "") {

        alert("El campo 'edad' es obligatorio");
        document.getElementById("edad").focus();

        return false;
    }


    // Validar edad numérica

    if (isNaN(edad)) {

        alert("El campo edad debe contener un número");
        document.getElementById("edad").focus();

        return false;
    }


    // Validar edad entre 0 y 120

    if (edad < 0 || edad > 120) {

        alert("La edad debe estar entre 0 y 120");
        document.getElementById("edad").focus();

        return false;
    }


    // Validar email vacío

    if (email == "") {

        alert("El campo 'email' es obligatorio");
        document.getElementById("email").focus();

        return false;
    }


    // Validar formato del email

    var expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionEmail.test(email)) {

        alert("El email no es válido");
        document.getElementById("email").focus();

        return false;
    }


    // Validar longitud del mensaje

    if (mensaje.length > 255) {

        alert("El mensaje no puede contener más de 255 caracteres");
        document.getElementById("mensaje").focus();

        return false;
    }


    // Si todo es correcto

    alert("Formulario enviado");

    return false;
}