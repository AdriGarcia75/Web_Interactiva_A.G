let i = 1;

function añadirComentarioChild(){
    let texto = document.getElementById("comentarios").value;
    let comentario = document.createElement("p");
    comentario.textContent = i + ". " + texto;
    let divComentarios = document.getElementById("divComentarios");
    divComentarios.appendChild(comentario)
    alert("Se ha añadido un comentario, este es el comentario número " + i)
    i++;
}