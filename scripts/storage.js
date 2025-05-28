/**
 * Loads tasks from browser's localStorage.
 * @returns {Array<Task>} An array of task objects, or empty array if none are saved.
 */
export function loadTasks() {
  const jsonString = localStorage.getItem("kanban-tasks");
  return jsonString ? JSON.parse(jsonString) : [];
}

/**
 * Saves an array of tasks to browser's localStorage.
 * @param {Array<Task>} tasks - The tasks to save.
 */
export function saveTasks(tasks) {
  localStorage.setItem("kanban-tasks", JSON.stringify(tasks));
}
