// gracias a declarar un valor de entrada y que llamemos a la funcion con "this" usando el atributo onclick podemos pasar el nodo de la imagen directamente
function ampliar(img){
    //esto lo que hace es alternar el estado del nodo en cuando a si este mismo tiene incluida la clase "ampliada" o no
    //en otras palabras, quita y pone la clase "ampliada" a la imagen al clicas
    img.classList.toggle('ampliada');
}