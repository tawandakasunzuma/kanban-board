import { saveTasks } from "./storage.js";
import { renderAllTasks } from "./render.js";

let currentTask;
let allTasks;

/* ===============
  Open and Close modals
=============== */

const overlay = document.getElementById("modal-overlay");
const modals = document.querySelectorAll(".modal");

// Open modal
function openModal(modalId) {
  overlay.style.display = "block";
  document.getElementById(modalId).style.display = "block";
}

// Close modal
function closeModal(modalId) {
  overlay.style.display = "none";
  document.getElementById(modalId).style.display = "none";
}

// Overlay click to close all modals
overlay.addEventListener("click", () => {
  modals.forEach(modal => {
      closeModal(modal.id);
    })
});

/* ===============
  Open Modals
=============== */

// Open 'Edit Task' modal
export function openEditModal(task, tasksArray) {
  currentTask = task;
  allTasks = tasksArray;

  document.getElementById("edit-title").value = task.title;
  document.getElementById("edit-description").value = task.description;
  document.getElementById("edit-status").value = task.status;

  openModal("edit-task-modal");
}

// Open 'Add New Task' modal
export function openAddModal(tasksArray) {
  allTasks = tasksArray;
  openModal("add-task-modal");
}

/* ===============
  Event Listeners
=============== */

// Add New Task
document.getElementById("add-new-task-btn").addEventListener("click", (event) => {
  event.preventDefault();

  const newTitle = document.getElementById("add-new-task-title");
  const newDescription = document.getElementById("add-new-task-description");
  const newStatus = document.getElementById("add-new-task-status");

  if (!newTitle) {
    return alert("Please enter a task title.");
  }

  // Get max ID
  let currentMaxId = 0;
  for (let i = 0; i < allTasks.length; i++) {
    const currentTask = allTasks[i];
    if (currentTask.id > currentMaxId) {
      currentMaxId = currentTask.id;
    }
  }

  const newTask = {
    id: currentMaxId++,
    title: newTitle.value.trim(),
    description: newDescription.value.trim(),
    status: newStatus.value
  };

  allTasks.push(newTask);
  saveTasks(allTasks);
  renderAllTasks(allTasks);

  // Clear form
  newTitle.value = "";
  newDescription.value = "";
  newStatus.value = "todo";

  closeModal("add-task-modal");
});

// Save Edited Task
document.getElementById("save-changes-btn").addEventListener("click", (event) => {
  event.preventDefault();

  currentTask.title = document.getElementById("edit-title").value;
  currentTask.description = document.getElementById("edit-description").value;
  currentTask.status = document.getElementById("edit-status").value;

  saveTasks(allTasks);
  renderAllTasks(allTasks);
  closeModal("edit-task-modal");
});

// Delete Task
document.getElementById("delete-task-btn").addEventListener("click", (event) => {
  event.preventDefault();

  if (!confirm("Are you sure you want to delete this task?")) {
    return;
  }

  allTasks = allTasks.filter(task => task.id !== currentTask.id);
  saveTasks(allTasks);
  renderAllTasks(allTasks);
  closeModal("edit-task-modal");
});

// Close Buttons
document.querySelectorAll(".modal-close-btn").forEach(button => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const modal = button.closest(".modal");
    if (modal) {
      closeModal(modal.id);
    }
  });
});

// Open Mobile Menu
document.querySelectorAll(".logo-mobile").forEach(icon => {
  icon.addEventListener("click", (event) => {
    event.preventDefault();
    openModal("mobile-menu-modal");
  });
});

// Close Mobile Menu
document.getElementById("mobile-modal-close-btn").addEventListener("click", (event) => {
  event.preventDefault();
  closeModal("mobile-menu-modal");
});
