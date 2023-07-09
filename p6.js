const input = document.querySelector("input");
const button = document.querySelector("button");
const todoListDiv = document.querySelector(".todo-list");
const deleteIcon = document.querySelector(".delete-icon");
let todoList = [];
let count = 1;
function renderTodolist() {
    todoListDiv.innerHTML = "";
    input.value = "";
    const lengthofTodoList = todoList.length;
    let htmlTorender = "";
    for (let i = 0; i < lengthofTodoList; i++) {
        htmlTorender += `<div class="todo-item">
            <p>${todoList[i].text} </p>
            <img id="delete-icon"data-id="${todoList[i].id}"src="del.png"/>
        </div>`;
    }
    todoListDiv.insertAdjacentHTML("beforeend", htmlTorender)
}
button.addEventListener("click", function () {
    const inputValue = input.value.trim();
    if (inputValue == "")
        return;               
    todoList.push({ id: count++, text: inputValue });
    console.log(todoList)
    renderTodolist()
});
todoListDiv.addEventListener("click", function (e) {
    const target = e.target;
    const todoItemId = Number(target.dataset.id);
    if (target.id === "delete-icon") {
        const newTodoList = todoList.filter(function (item) {
            return item.id !== todoItemId;
        });
        todoList = newTodoList;
        renderTodolist();
    }
});
