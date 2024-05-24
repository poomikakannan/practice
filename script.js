
"use strict";

let todolist = [];

let addtask = document.getElementById("addTask");
addtask.addEventListener("click", addtodoItem);

function addtodoItem() {
    let item = document.getElementById("todo-input").value;
    if (item.trim() === "")
    todolist.push(item);

    let list = document.getElementById("todolist");

    let listItem = createTodoItem(item);
    list.appendChild(listItem);

    document.getElementById("todo-input").value = "";
    
}

function createTodoItem(item) {
    let listItem = document.createElement("div");
    listItem.className = "todoItem";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
        if (checkbox.checked) {
            moveToCompleted(listItem, item);
        } else {
            moveToTodoList(listItem, item);
        }
    };
    listItem.appendChild(checkbox);

    let itemText = document.createElement("span");
    itemText.textContent = item;
    listItem.appendChild(itemText);

    let buttonsDiv = document.createElement("div");
    listItem.appendChild(buttonsDiv);

    let editButton = document.createElement("button");
    editButton.innerHTML = `<i class="fas fa-pencil-alt"></i>`;
    editButton.onclick = function () {
        itemText.contentEditable = true;
        itemText.focus();
    };
    buttonsDiv.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    deleteButton.onclick = function () {
        let parentList = listItem.parentElement;
        parentList.removeChild(listItem);
        todolist.splice(todolist.indexOf(item), 1);
    };
    buttonsDiv.appendChild(deleteButton);

    return listItem;
}

function moveToCompleted(listItem, item) {
    let completedList = document.getElementById("checkCancel");
    completedList.appendChild(listItem);
    listItem.classList.add("checked");
    listItem.querySelector("span").style.textDecoration = "line-through";
}

function moveToTodoList(listItem, item) {
    let todoList = document.getElementById("todolist");
    todoList.appendChild(listItem);
    listItem.classList.remove("checked");
    listItem.querySelector("span").style.textDecoration = "none";
}




