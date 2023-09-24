// Función para agregar una nueva tarea
function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function() {
    listaTareas.removeChild(nuevaTarea);
    };
    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
    nuevaTareaInput.value = "";
    }
    }
// Función para marcar una tarea como completada
    function marcarCompletada(tarea) {
    tarea.classList.toggle("completed");

}// Agregar evento de clic a las tareas para marcarlas como completadas
    document.getElementById("listaTareas").addEventListener("click",
    function(event) {
    if (event.target.tagName === "LI") {
    marcarCompletada(event.target);
}
});

// Agregar evento de clic al botón "Agregar"
    document.getElementById("agregar").addEventListener("click",
    agregarTarea);

// Función para mostrar tareas completadas
    function mostrarCompletadas() {
        const tareasCompletadas = document.querySelectorAll('li.completed');
        const tareasPendientes = document.querySelectorAll('li:not(.completed)');
    
        tareasCompletadas.forEach(tarea => {
            tarea.style.display = "block";
    });

    tareasPendientes.forEach(tarea => {
        tarea.style.display = "none";
    });
}

// Función para mostrar tareas pendientes
    function mostrarPendientes() {
        const tareasCompletadas = document.querySelectorAll('li.completed');
        const tareasPendientes = document.querySelectorAll('li:not(.completed)');
    
        tareasCompletadas.forEach(tarea => {
            tarea.style.display = "none";
    });

    tareasPendientes.forEach(tarea => {
        tarea.style.display = "block";
    });
}

    document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);
    document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);

//
    const mostrarCompletadasButton = document.getElementById('mostrarCompletadas');
    const mostrarPendientesButton = document.getElementById('mostrarPendientes');
  
    mostrarCompletadasButton.addEventListener('click', mostrarCompletadas);
    mostrarPendientesButton.addEventListener('click', mostrarPendientes);