/**
 * @typedef {Object} Task
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} status
 * @property {string} board
 */

/**
 * Fetch tasks from API.
 * @returns {Promise<Array<Task>>}
 */
export async function fetchTasks() {
  const loadingAlert = document.getElementById("loading-overlay");
  loadingAlert.style.display = "flex";

  try {

    const response = await fetch("https://jsl-kanban-api.vercel.app/");
    
    if (!response.ok) throw new Error(`HTTP error! Status ${response.status}`);

    const parsedTasks = await response.json();
    
    loadingAlert.style.display = "none";
    
    return parsedTasks;
  } 
  catch (error) {
  
    document.getElementById("loading-text").textContent = "Failed to load tasks. Please try again later.";

    console.error("Error:", error)
  }
}
