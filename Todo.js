const todoContainer = document.querySelector(".todolistinput");
const todoInput = todoContainer.querySelector("input");
const todoList = document.querySelector(".js_todolist");

const TODOLIST = "todolist";

let todolistvalue = [];

function saveToDoList() {
    localStorage.setItem(TODOLIST, JSON.stringify(todolistvalue));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");

    const newId = todolistvalue.length + 1;
    const toDoObj = {
        text: text,
        id: newId
    };

    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", handleDelBtn);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);

    todolistvalue.push(toDoObj);

    saveToDoList();

}
function testTodo(data) {
    paintToDo(data.text);
}

// DelBtn 누르면 todolistvalue에서 정보제거 그리고 저장
function handleDelBtn(event) {
    //console.dir(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    //console.log(li.id);

    const cleanToDoListValue = todolistvalue.filter(todo => {
        return todo.id !== parseInt(li.id);
    });
    //console.log(cleanToDoListValue);
    todoList.removeChild(li);
    todolistvalue = cleanToDoListValue;
    saveToDoList();


}

// 제출 handle
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    //console.log(todoInput.value);
    paintToDo(currentValue);
}

// ToDo List load
function loadToDoList() {
    const loadedToDoList = localStorage.getItem(TODOLIST);

    if (loadedToDoList !== null) {
        const parseToDoList = JSON.parse(loadedToDoList);
        parseToDoList.forEach(testTodo);
    }
}

function init() {

    loadToDoList();
    todoContainer.addEventListener("submit", handleSubmit);

}

init();