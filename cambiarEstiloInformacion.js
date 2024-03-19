function cambiarEstilo(){
    //conseguimos el nodo de la id, en este caso del main de informacion
    let elemento = document.getElementById("informacion-main");
    //conseguimos todos los estilos del id
    let estilos = window.getComputedStyle(elemento);
    //conseguimos los colores del fondo y de la letra
    let colorTextoActual = estilos.color;
    let colorFondoActual = estilos.backgroundColor;
    //y ponemos el del fondo para la letra y el de la letra para el fondo
    elemento.style.color = colorFondoActual;
    elemento.style.backgroundColor = colorTextoActual;
}