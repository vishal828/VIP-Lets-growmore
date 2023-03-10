const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {
    const task = taskInput.value;
    if (task !== "") {
        const li = document.createElement("li");
        li.innerText = task;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(li);
        });
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
});
