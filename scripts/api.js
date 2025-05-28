/**
 * Fetch tasks from API.
 * @returns {Promise<Array<Task>>}
 */
export async function fetchTasks() {

  const loadingAlert = document.getElementById("loading");
  
  loadingAlert.textContent = "Loading...";

  try {
  
    const response = await fetch("https://jsl-kanban-api.vercel.app/");
  
    if (!response.ok) {
        throw new Error(`HTTP error! Status ${response.status}`);
    }

    const parsedTasks = await response.json();

    loadingAlert.textContent = "";

    return parsedTasks;
  }
  catch (error) {
    loadingAlert.textContent = "Failed to load tasks. Please try again later.";
    console.error(error);
    throw error;
  }
}