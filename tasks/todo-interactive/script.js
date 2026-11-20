const taskButtons = document.querySelectorAll(".task");
const taskCount = document.querySelector("#task-count");

function updateTaskCount() {
  const completedTasks = document.querySelectorAll(".task.completed").length;
  taskCount.textContent = `${completedTasks} of ${taskButtons.length} completed`;
}

taskButtons.forEach((taskButton) => {
  taskButton.addEventListener("click", () => {
    const isCompleted = taskButton.classList.toggle("completed");
    taskButton.setAttribute("aria-pressed", String(isCompleted));
    updateTaskCount();
  });
});

updateTaskCount();
