
const addTaskButton = document.querySelector("#botonAgregar");
const addFolderButton = document.querySelector("#botonAgregarCarpeta");
const input = document.querySelector("#inputTarea");
const lista = document.querySelector("ul");
const contenedor = document.querySelector(".container");
const seccionCarpetas = document.querySelector(".carpetas");

let noFolders = true;

addTaskButton.addEventListener("click", addTask);
addFolderButton.addEventListener("click", addFolder);

function addTask(){
    let taskValue = input.value;
    console.log(taskValue);

    input.value = '';

    const task = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    task.appendChild(span);
    span.textContent = taskValue;

    task.appendChild(deleteButton);
    deleteButton.textContent = "Delete";

    lista.appendChild(task);


    deleteButton.addEventListener("click", () => {
        lista.removeChild(task);
    });


    input.focus();
}

function addFolder(){
    let folderName = input.value;
    
    input.value = '';

    const folderDiv = document.createElement("div");
    const folderTitle = document.createElement("h3");
    const deleteButton = document.createElement("button");

    folderTitle.textContent = folderName;

    folderDiv.appendChild(deleteButton);
    deleteButton.textContent = "Delete";

    folderDiv.appendChild(folderTitle);
    folderDiv.classList.add("carpeta");

    seccionCarpetas.appendChild(folderDiv);

    deleteButton.addEventListener("click", () => {
        contenedor.removeChild(folderDiv);
    });
}
