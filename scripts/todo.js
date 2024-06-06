let addDutyBtn = document.querySelector(".add-task");
let newTask = document.querySelector(".newtask");
let addTaskBtn = document.querySelector(".addtask__btn");
let taskTitle = document.getElementById("task__title");
let taskDescription = document.getElementById("task__description");
let tagsBtn = document.querySelector(".newtask__tags__btn");
let tagsBtnIcon = document.querySelector(".newtask__tags__btn__icon");
let tags = document.querySelector(".newtask__tags");
let taskDown = document.querySelector(".newtask__tags__down");
let taskMid = document.querySelector(".newtask__tags__mid");
let taskUp = document.querySelector(".newtask__tags__up");
let todoTasks = JSON.parse(localStorage.getItem("todoTasks"))
let task = {
    title: "",
    description: "",
    priority: ""
}
function addPriority(priority) {
    task.priority = priority;
}
addDutyBtn.addEventListener("click", () => {
    newTask.style.display = 'block';
    addDutyBtn.style.display = 'none';
});
tagsBtn.addEventListener("click", () => {
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
});
taskDown.addEventListener("click", () => addPriority("down"));
taskMid.addEventListener("click", () => addPriority("mid"));
taskUp.addEventListener("click", () => addPriority("up"));
addTaskBtn.addEventListener("click", () => {
    newTask.style.display = 'none';
    addDutyBtn.style.display = 'flex';
    task.title= taskTitle.value;
    task.description = taskDescription.value;
    todoTasks.push(task);
    localStorage.setItem("todoTasks", JSON.stringify(todoTasks))
});