
function checkEnter(event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.keyCode === 13) {
        addTask();
    }
}
// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Check if the input is not empty
    if (taskInput.value.trim() !== "") {
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.textContent = taskInput.value;

        // Add a delete button to the list item
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.classList.add('delete')
        deleteButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);

        // Add the new task to the list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
}
