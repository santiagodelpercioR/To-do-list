function addTask(valor = null){

    let taskValue = valor !== null ? valor: input.value.trim();

    if(taskValue === ''){
        return;    
    }
    input.value = '';

    const task = document.createElement("li");
    const primerTask = document.querySelector("li");
    const span = document.createElement("span");
    const spanButtons = document.createElement("span");
    const doneButton = document.createElement('img');
    const deleteButton = document.createElement("img");


    spanButtons.appendChild(doneButton);
    spanButtons.appendChild(deleteButton);

    spanButtons.classList.add("listImgs");
    
    task.appendChild(span);
    task.appendChild(spanButtons);
    span.textContent = taskValue;

    doneButton.classList.add("checkImg");
    doneButton.src= "images/check.png";

    deleteButton.classList.add("deleteImg");
    deleteButton.src = "images/delete.png";

    span.classList.add("task");

    if(primerTask === null){
        lista.appendChild(task);
    }
    else{
        lista.insertBefore(task,primerTask);
    }
    
    deleteButton.addEventListener("click", () => {
        lista.removeChild(task);
        deleteFromLocalStorage(taskValue);
    });

    doneButton.addEventListener('click', () => {
        span.classList.toggle("tachado");
    });

    //Agrego la tarea al local storage
    saveOnLocalStorage(taskValue);
    input.focus();
}

const addTaskButton = document.querySelector("#botonAgregar");
const addFolderButton = document.querySelector("#botonAgregarCarpeta");
const input = document.querySelector("#inputTarea");
const seccionCarpetas = document.querySelector(".carpetas");
const lista = document.createElement("ul");
const tasks = []; // Creo un array de tareas

input.focus();

seccionCarpetas.appendChild(lista);

addTaskButton.addEventListener("click", () => addTask());

input.addEventListener("keydown", (event) => {
    if(event.code === "Enter"){
        addTask();
    }
});

getFromLocalStorage();

function getFromLocalStorage(){

    if(localStorage.getItem("savedTasks")){ // se que existe el array de tareas en el localStorage
        const tareas = JSON.parse(localStorage.getItem("savedTasks"));
        console.log(tareas);
        tareas.forEach((element) => addTask(element));
    }
    else {
        console.log("no hay entradas en el local storage");
    }
}

function saveOnLocalStorage(task){
    tasks.push(task); // Agrego la tarea al array de tareas
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
}

function deleteFromLocalStorage(task){
    console.log("tengo q borrar " + task);
    let position = tasks.indexOf(task);
    tasks.splice(position, 1);
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
}