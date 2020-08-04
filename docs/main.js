//Elementos del HTML
const lista = document.getElementById("lista"),
    btnAgregar = document.getElementById("btn-agregar"),
    tareaInput = document.getElementById("tareaInput");
//Funciones
let agregarTarea = function(){
    let tarea = tareaInput.value,
        nuevaTarea = document.createElement("li"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea);
    if(tarea === ""){
        tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
        // tareaInput.className = "error";
        tareaInput.classList.add("error");
        return false;
    }
    enlace.appendChild(contenido);
    enlace.setAttribute("href", "#");
    nuevaTarea.appendChild(enlace);
    lista.appendChild(nuevaTarea);
    tareaInput.value = "";
    //Borrando elementos de la lista
    for (let i = 0; i < lista.children.length; i++) {
        lista.children[i].addEventListener('click', eliminarTarea);
    }
};
let comprobarInput = function(){
    // tareaInput.className = "form-texto";
    tareaInput.classList.remove("error");
    tareaInput.setAttribute("placeholder", "Agrega tu tarea");
};
let eliminarTarea = function(){
    this.parentNode.removeChild(this);
};
//Eventos
//Agregar Tarea
btnAgregar.addEventListener('click', agregarTarea );
//Comprobar Input
tareaInput.addEventListener('click', comprobarInput );
