# Página-Web-Responsive - Real Estate García

## Descripción
Real Estate García es una página web de Real Estate que presenta propiedades inmobiliarias, información sobre estas y servicios relacionados con el mercado inmobiliario. La página está desarrollada utilizando HTML y CSS.

## Contenido
### Página principal
Tenemos una página principal que expone la página web, un menú de navegación común a todo el sitio web, una sección principal (main), y un pie de página.

### Ventas
Como se ha mencionado anteriormente, el menú de navegación es común para toda la página, haciendo sencilla la navegación entre todos los rincones del dominio. Es la página más relevante junto al índice, ya que es la que presenta las distintas ofertas que se ofrecen.

### Información / Sobre Nosotros
Página que da hueco a una presentación de quienes somos, cuál es nuestra misión y nuestras ambiciones.

### Archivos
- `index.html`: Página principal de la web.
- `ventas.html`: Página con ofertas de propiedades.
- `informacion.html`: Página con información adicional.
- `style.css`: Archivo CSS que contiene los estilos para toda la web.
- `ventas.css`: Archivo CSS que refiere al HTML Ventas.
- `informacion.css`: Archivo CSS que refiere al HTML Información.
- `formulario.css`: Estilos específicos para el formulario.
- `addChildFormulario.js`: Script para añadir elementos al formulario, actua sobre la página informacion.html.
  En este archivo se encuentra ``añadirComentarioChild()``.
- `ampliarImagen.js`: Script para ampliar imágenes al hacer clic en ellas, actua sobre la página index.html (en la imagen contenida en el _main_).
  En este archivo se encuentra `ampliar(img)`.
- `cambiarEstiloInformacion.js`: Script para cambiar los estilos de la página de información, actua sobre la página informacion.html.
  En este archivo se encuentra `cambiarEstilo()`.
- `formularioValidacion.js`: Script para validar formularios, actua sobre la página formulario.html.
  En este archivo se encuentra `validarCorreo()`.

### Preview
![Contenido en el HTML Ventas](https://cdn.discordapp.com/attachments/767393348267802636/1183151046806229022/image.png)

## Scripts de JS Utilizados

### Función `ampliar(img)`
**Actua sobre el archivo index.html**  
Este script permite ampliar la imagen a la hora de clicar en ella, concretamente a 1.5 veces de su tamaño inicial y a volver a clicar volverá al tamaño 1.0, a su estado inicial.
Funciona con un onclick en la imagen, la función añade o quita una clase la cual contiene el modificador de tamaño para la imagen.

### Función `cambiarEstilo()`
**Actua sobre el archivo información.html**  
Este script invierte los colores del fondo y del texto a la hora de clicar en un botón, al ser gris oscuro y blanco, imita a la funcionalidad día/noche de muchas webs.
He utilizado el método getComputedStyle de "Window" `window.getComputedStyle()` para obtener todos los estilos del ID que he seleccionado, en este caso busco los estilos del fondo y de la letra del main.

### Función `añadirComentarioChild()`
**Actua sobre el archivo información.html**  
Este script actúa sobre un elemento "input" de tipo "text", a la hora de escribir un texto (para este caso un comentario) dentro de él y clicar en el botón, se añadirá un nuevo hijo (`<p>`), párrafo, a un div que se sitúa justo debajo, que inicialmente está vacío, los comentarios se sitúan uno debajo del otro y están enumerados por orden de entrada.
La enumeración se consigue creando una variable en el ámbito global (en este caso, fuera de la función, justo en la primera línea) e incrementando el valor en uno cada vez que se llame la función. Al ser cargado el archivo solo una única vez, la variable se crea y ya, a partir del uso de la función el valor cambiará y será utilizado.
Además, para facilitar la interacción del usuario con la página web, se emite una alerta/aviso a la hora de añadir un comentario, este también indicando el número de comentario añadido.

### Función `validarCorreo()`
**Actua sobre el archivo formulario.html**  
Este script se utiliza para validar un correo electrónico escrito por el usuario. Obtiene el valor del correo electrónico del elemento con id "email", y utiliza una expresión regular para validar si es una dirección de correo electrónico válida. Si el correo es válido, retorna `true`; de lo contrario, muestra una alerta y retorna `false`, impidiendo la entrada de los datos.

## Bibliografía
- **Temario del Moodle del instituto**, (privado, no hay link).
- **W3Schools**, para [JS](https://w3schools.com/js), [HTML](https://w3schools.com/html) y [CSS](https://w3schools.com/css).
