/**
 * Loads tasks from browser localStorage.
 * @returns {Array<Task>} An array of task objects, or empty array if none are saved in localStorage.
 */
export function loadTasks() {
  const jsonString = localStorage.getItem("kanban-tasks");
  return jsonString ? JSON.parse(jsonString) : [];
}

/**
 * Saves an array of tasks to the browser's localStorage.
 * @param {Array<Task>} tasks - The tasks to save.
 */
export function saveTasks(tasks) {
  localStorage.setItem("kanban-tasks", JSON.stringify(tasks));
}
