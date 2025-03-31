function validarNombre() {
    let nombre = document.getElementById("nombre");
    const minCaracteres = nombre.value.length >= 3;
    let mens = document.getElementById("mensajeErrorN");
    let esValida = true;
    
    if (!minCaracteres) {
        mens.style.color = "red";
        mens.innerHTML = "El nombre debe tener como mínimo 3 caracteres.";
        esValida = false;
    }
    if (esValida) {
        mens.style.color = "green";
        mens.innerHTML = "El nombre es válido.";
    }
    return esValida;
}

function validarEmail() {
    const validarCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let email = document.getElementById("email");
    let mens = document.getElementById("mensajeErrorE");
    let esValida = true;

    if (validarCorreo.test(email.value)) {
        mens.style.color = "green";
        mens.innerHTML = "El formato del Email es válido.";
    } else {
        mens.style.color = "red";
        mens.innerHTML = "El formato del Email no es válido.";
        esValida = false;
    }
    return esValida;
}

function contraseñaPuesta() {
    let contraseña = document.getElementById("contraseña");
    const minLargo = contraseña.value.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(contraseña.value);
    const tieneNumero = /[0-9]/.test(contraseña.value);
    let mens = document.getElementById("mensajeErrorC");
    let esValida = true;

    if (!minLargo || !tieneNumero || !tieneMayuscula) {
        mens.style.color = "red";
        mens.innerHTML = "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.";
        esValida = false;
    }
    else {
        mens.style.color = "green";
        mens.innerHTML = "La contraseña es válida.";
    }

    let confirmarContra = document.getElementById("confirmar");
    let mensCC = document.getElementById("mensajeErrorCC");

    if (contraseña.value !== confirmarContra.value) {
        mensCC.style.color = "red";
        mensCC.innerHTML = "Las contraseñas no coinciden.";
        esValida = false;
    }
    else{
        mensCC.style.color = "green";
        mensCC.innerHTML = "Las contraseñas coinciden.";
    }
    return esValida;
}

function validarFormulario() {
    let esValido = true;
    if (!validarNombre()) esValido = false;
    if (!validarEmail()) esValido = false;
    if (!contraseñaPuesta()) esValido = false;
    if (esValido == true) {
        alert("Registro exitoso.");
    }
    return esValido;
}