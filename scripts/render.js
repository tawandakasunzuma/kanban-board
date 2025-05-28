import { openEditModal } from "./modal.js";

/**
 * Main function to render all tasks on the kanban board.
 * Clears containers, updates task counts, and renders task elements to containers.
 * @param {Array<Object>} tasks - Array of task objects to render.
 */
export function renderAllTasks(tasks) {
    const containers = getTaskContainers();
    clearContainers (containers);
    updateTaskCounts (tasks);
    renderTasks (tasks, containers);
}

/**
 * Retrieves references to the DOM elements that contain tasks for each status.
 * @returns {Object} An object with keys 'todo', 'doing', and 'done' assigned to their containers in the DOM.
 */
function getTaskContainers() {
    return {
        todo: document.getElementById("todo-tasks-container"),
        doing: document.getElementById("doing-tasks-container"),
        done: document.getElementById("done-tasks-container")
    };
}

/**
 * Clears the innerHTML of all task containers, so they are empty.
 * @param {Object} containers - Object containing task container DOM elements.
 */
function clearContainers(containers) {
    const allContainers = Object.values(containers);
    allContainers.forEach(container => {
        container.innerHTML = "";
    });
}

/**
 * Updates the displayed count of tasks for each status category.
 * @param {Array<Object>} tasks - Array of task objects to count.
 */
function updateTaskCounts (tasks) {
    // Filter each count to get total tasks
    const todoCount = tasks.filter(task => task.status === "todo").length;
    const doingCount = tasks.filter(task => task.status === "doing").length;
    const doneCount = tasks.filter(task => task.status === "done").length;

    // Set value of total tasks in heading
    document.getElementById("num-tasks-todo").textContent = `(${todoCount})`;
    document.getElementById("num-tasks-doing").textContent = `(${doingCount})`;
    document.getElementById("num-tasks-done").textContent = `(${doneCount})`;
}

/**
 * Renders task elements inside their relevant containers based on their task status.
 * Adds click event listeners to open the edit modal for each task.
 * @param {Array<Object>} tasks - Array of task objects to render.
 * @param {Object} containers - The task containers (todo, doing, done)
 */
function renderTasks(tasks, containers) {
    // Render each task
    tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task-div";
        taskDiv.textContent = task.title;

        taskDiv.addEventListener("click", () => {
            openEditModal(task, tasks);
    });

    // Append each taskDiv into correct container
    if (task.status === "todo") {
        containers.todo.append(taskDiv);
    } else if (task.status === "doing") {
        containers.doing.append(taskDiv);
    } else {
        containers.done.append(taskDiv);
    }
    });
}