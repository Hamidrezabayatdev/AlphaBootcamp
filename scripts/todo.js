let addDutyBtn = document.querySelector(".add-task");
let newTask = document.querySelector(".newtask");
let addTaskBtn = document.querySelector(".addtask__btn");
let taskTitle = document.getElementById("task__title");
let taskDescription = document.getElementById("task__description");
let tagsBtn = document.querySelector(".newtask__tags__btn");
let tagsBtnIcon = document.querySelector(".newtask__tags__btn__icon");
let tags = document.querySelector(".newtask__tags");
let todoEmpty = document.querySelector(".todo__empty");
let taskDown = document.querySelector(".newtask__tags__down");
let taskMid = document.querySelector(".newtask__tags__mid");
let taskUp = document.querySelector(".newtask__tags__up");
let todos = document.querySelector(".todos");
let taskDelete = document.querySelector(".delete__task");
let taskEdit = document.querySelector(".edit__task");
let todoTasks;
// localStorage.setItem("todoTasks", JSON.stringify([]));
JSON.parse(localStorage.getItem("todoTasks")) ? (todoTasks = JSON.parse(localStorage.getItem("todoTasks"))) : (todoTasks = []);
let task = {
    // id: 0,
    title: "",
    description: "",
    priority: ""
}
function sortTodoTasks(todoTasks) {
    todoTasksSorted = []
    for (const task of todoTasks) {
        if (task.priority == "up")
            todoTasksSorted.push(task)
    }
    for (const task of todoTasks) {
        if (task.priority == "mid")
            todoTasksSorted.push(task)
    }
    for (const task of todoTasks) {
        if (task.priority == "down")
            todoTasksSorted.push(task)
    }
    return todoTasksSorted
}
function tagsBtnChange() {
    if (tags.style.display == "flex") {
        tags.style.display = "none"
        tagsBtnIcon.style.transform = "rotate(0deg)";
        tagsBtnIcon.style.fill = "none";
    }
    else { 
        tagsBtnIcon.style.transform = "rotate(90deg)";
        tagsBtnIcon.style.fill = "#AFAEB2";
        tags.style.display = "flex";
    }
}
function addPriority(priority) {
    task.priority = priority;
}
function todoCardCreate(task) {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo__card");
    let prio = "";
    switch (task.priority) {
        case "up":
            prio = "بالا";
            break;
        case "mid":
            prio = "متوسط";
            break;
        case "down":
            prio = "پایین";
            break;
        default:
            break;
    }
    todoCard.innerHTML = `
        <div class="todo__card__right">
            <div class="todo__card__color todo__card__color__${task.priority}"></div>
            <div class="todo__card__content">
                <div class="todo__card__head">
                    <input class="todo__checkbox" type="checkbox" name="state" id="card__check">
                    <p class="todo__card__title">${task.title}</p>
                    <div class="todo__card__tag newtask__tags__${task.priority} tag">${prio}</div>
                </div>
                <p class="todo__card__description">${task.description}</p>
            </div>
        </div>
        <div class="todo__card__options">
            <svg class="todo__card__options__icon" width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="#525252"/>
                <circle cx="2" cy="9" r="2" fill="#525252"/>
                <circle cx="2" cy="16" r="2" fill="#525252"/>
            </svg>
            <div class="todo__card__options__box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="newtask__tags__sep"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    `;
    return todoCard;
}
function todosShow() {
    todoTasks.forEach(task => {
        todos.appendChild(todoCardCreate(task));
    });
}
document.addEventListener("DOMContentLoaded", () => {
    todosShow()
    if (todoTasks.length)
        todoEmpty.style.display = "none";
    todos.style.marginTop = "10px";
});
addDutyBtn.addEventListener("click", () => {
    newTask.style.display = 'block';
    addDutyBtn.style.display = 'none';
});
tagsBtn.addEventListener("click", tagsBtnChange);
taskDown.addEventListener("click", () => addPriority("down"));
taskMid.addEventListener("click", () => addPriority("mid"));
taskUp.addEventListener("click", () => addPriority("up"));
addTaskBtn.addEventListener("click", () => {
    tagsBtnChange()
    newTask.style.display = 'none';
    todoEmpty.style.display = "none";
    addDutyBtn.style.display = 'flex';
    // (todoTasks.length) ? (task.id = todoTasks.length) : task.id = 0;
    task.title= taskTitle.value;
    task.description = taskDescription.value;
    taskTitle.value = "";
    taskDescription.value = "";
    todoTasks.push(task);
    localStorage.setItem("todoTasks", JSON.stringify(todoTasks));
    todos.appendChild(todoCardCreate(task));
});
let todoOptions = document.querySelector(".todo__card__options__icon");
let todoOptionsBox = document.querySelector(".todo__card__options__box");
todoOptions.addEventListener("click", () => {
    if (todoOptionsBox.style.display == "flex")
        todoOptionsBox.style.display = "none";
    else
        todoOptionsBox.style.display = "flex";
});
// taskDelete.addEventListener("click", () => {
//     let taskDiv = (((taskDelete.parentNode).parentNode).parentNode);
//     console.log(taskDiv)
// });