import { fetchTasks } from "./api.js";
import { loadTasks, saveTasks } from "./storage.js";
import { renderAllTasks } from "./render.js";
import { openAddModal } from "./modal.js";
import { initializeTheme, setupThemeToggleButtons } from "./theme.js";
import { initializeSidebarToggle } from './sidebar.js';

export let tasks = loadTasks();

async function initialRender() {
  tasks = loadTasks();  // Load tasks from localStorage
  if (tasks.length === 0) {
    try {
      tasks = await fetchTasks();
      saveTasks(tasks);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  }
  renderAllTasks(tasks);
}

document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    setupThemeToggleButtons();
    document.getElementById("desktop-add-task-btn").addEventListener("click", () => openAddModal(tasks));
    initializeSidebarToggle();
    initialRender();
});