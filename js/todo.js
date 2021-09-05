
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleDelete(event) {
    const li = event.target.parentElement; 
    // x버튼의 부모 찾기
    // li.id 하면 부모의 id 까지 알 수 있다.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    //li.id 는 string이다, Time.now() 는 Number. 따라서 서로 같지 않음 -> parseInt()사용
    
    li.remove();
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id; // id에  key 추가하기
    const span = document.createElement("span");
    span.innerText = newTodoObj.text; // 오브젝트안에 텍스트 불러오기
    
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", handleDelete);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
 

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach((item) => paintToDo(item));
}

function todoFilter() {

}