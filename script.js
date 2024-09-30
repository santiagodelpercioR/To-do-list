const addTaskButton = document.querySelector("#botonAgregar");
const addFolderButton = document.querySelector("#botonAgregarCarpeta");
const input = document.querySelector("#inputTarea");
const seccionCarpetas = document.querySelector(".carpetas");
const lista = document.createElement("ul");

input.focus();

seccionCarpetas.appendChild(lista);

let cantFolders = 0;

addTaskButton.addEventListener("click", addTask);

function isEnter(e){
    if(event.key === 'Enter'){
        addTask();
    }
}

function addTask(){
    let taskValue = input.value;
    
    if(taskValue === ''){
        
    }
    else{
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
    });

    doneButton.addEventListener('click', () => {
        span.classList.toggle("tachado");
    });
    }
    input.focus();
    
}