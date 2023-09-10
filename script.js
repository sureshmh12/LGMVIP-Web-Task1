function addTask() {
    var taskInput = document.getElementById("task");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.className = "todo-item";
        listItem.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

function removeTask(btn) {
    btn.parentNode.remove();
}