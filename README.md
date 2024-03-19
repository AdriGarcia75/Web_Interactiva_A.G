# Web_Interactiva_A.G
Para LLMM CIFPFBMOLL 2023-2024

# A continuación, explicaré cada uno de los scripts de JS utilizados en la página web.
## Función `ampliar(img)`
Este script permite ampliar la imagen a la hora de clicar en ella, concretamente a 1.5 veces de su tamaño inicial y a volver a clicar volverá al tamaño 1.0, a su estado inicial.
Funciona con un onclick en la imagen, la función añade o quita una clase la cual contiene el modificador de tamaño para la imagen.

## Función `cambiarEstilo()`
Este script invierte los colores del fondo y del texto a la hora de clicar en un botón, al ser gris oscuro y blanco, imita a la funcionalidad dia/noche de muchas webs.
He utilizado el metodo getComputedStyle de "Window" `window.getComputedStyle()` para obtener todos los estilos del ID deseado, en este caso del fondo y de la letra del main.

## Función `añadirComentarioChild()`
Este script actua sobre un elemento "input" de tipo "text", a la hora de escribir un texto (para este caso un comentario) dentro de el y clicar en el botón, se añadirá un nuevo hijo (`<p>`), parrafo, a un div que se situa justo debajo, que inicialmente está vacio, los comentarios se situan uno debajo del otro y están enumerados por orden de entrada.
La enumeración se consigue creando una variable en el ambito global (en este caso, fuera de la función, justo en la primera linea) e incrementando el valor en uno cada vez que se llame la función, al ser cargado el archivo sólo una única vez, la variable se crea y ya, a partir del uso de la función el valor cambiará y será utilizado.
A parte, para facilitar la interacción del usuario con la página web, se emite una alerta/aviso a la hora de añadir un comentario, este también indicando el número de comentario añadido. 

## Función `validarCorreo()`
Este script se utiliza para validar un correo electrónico escrito por el usuario. Obtiene el valor del correo electrónico del elemento con id "email", y utiliza una expresión regular para validar si es una dirección de correo electrónico válida. Si el correo es válido, retorna `true`; de lo contrario, muestra una alerta y retorna `false`, impidiendo la entrada de los datos.
