function addTask() {

    let taskInput = document.getElementById("taskInput");

    let taskText = taskInput.value;

    if(taskText === "") {

        alert("Please Enter Task");

        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `

        <span onclick="toggleComplete(this)">
            ${taskText}
        </span>

        <button onclick="deleteTask(this)">
            Delete
        </button>
    `;

    document.getElementById("taskList")
            .appendChild(li);

    taskInput.value = "";
}

function toggleComplete(task) {

    task.classList.toggle("completed");
}

function deleteTask(button) {

    button.parentElement.remove();
}

function filterTasks(type) {

    let tasks =
        document.querySelectorAll("#taskList li");

    tasks.forEach(task => {

        let completed =
            task.querySelector("span")
                .classList.contains("completed");

        if(type === "all") {

            task.style.display = "block";
        }

        else if(type === "completed") {

            task.style.display =
                completed ? "block" : "none";
        }

        else if(type === "pending") {

            task.style.display =
                !completed ? "block" : "none";
        }
    });
}