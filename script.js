
const addTaskButton = document.querySelector("#botonAgregar");
const addFolderButton = document.querySelector("#botonAgregarCarpeta");
const input = document.querySelector("#inputTarea");
const contenedor = document.querySelector(".container");
const seccionCarpetas = document.querySelector(".carpetas");
const lista = document.createElement("ul");

let cantFolders = 0;

addTaskButton.addEventListener("click", addTask);
addFolderButton.addEventListener("click", addFolder);

function addTask(){
    let taskValue = input.value;
    console.log(taskValue);

    input.value = '';

    if(cantFolders < 1){
        alert("no hay carpetas");
    }
    else {
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
    }
    input.focus();
    
}

function addFolder(){
    let folderName = input.value;
    
    input.value = '';

    if(cantFolders < 1 ){
        const folderDiv = document.createElement("div");
        const folderTitle = document.createElement("h3");
        const deleteButton = document.createElement("button");
        const span = document.createElement("span");
        
        folderTitle.textContent = folderName;
        span.appendChild(folderTitle);

        deleteButton.textContent = "Delete";
        span.appendChild(deleteButton);

        folderDiv.classList.add("carpeta");
        folderDiv.appendChild(span);

        span.classList.add("folderTitle");

        folderDiv.appendChild(lista);

        seccionCarpetas.appendChild(folderDiv);

        deleteButton.addEventListener("click", () => {
            seccionCarpetas.removeChild(folderDiv);
            cantFolders--;
        });

        cantFolders++;
    }
    else{
        alert("ya hay una carpeta");
    }
}
