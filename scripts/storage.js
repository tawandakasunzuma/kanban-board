/** @returns {Array<Task>} */
export function loadTasks() {
  const jsonString = localStorage.getItem("kanban-tasks");
  return jsonString ? JSON.parse(jsonString) : [];
}

/** @param {Array<Task>} tasks */
export function saveTasks(tasks) {
  localStorage.setItem("kanban-tasks", JSON.stringify(tasks));
}
