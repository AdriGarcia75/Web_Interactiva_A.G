//esta funcion sirve para controlar la entrada de datos del campo del correo electronico
function validarCorreo() {
    //recogemos el id del email
    let emailInput = document.getElementById("email");
    //recogemos el valor del email (en este caso, el correo que nos haya enviado el usuario)
    let email = emailInput.value;
    // expresion regular para validar correo electrónico
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //utilizamos test para conseguir un booleano, true si se cumple, false si no
    if (regex.test(email)) {
        return true; // El correo es válido, el formulario se enviará
    } else {
        alert("Por favor, introduce una dirección de correo electrónico válida.");
        return false; // El correo no es válido, el formulario no se enviará
    }
}