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

    // Show loading message
    const loadingAlert = document.getElementById("loading");  
    loadingAlert.textContent = "Loading...";

    try {
        // Fetch API
        const response = await fetch("https://jsl-kanban-api.vercel.app/");

        // Check response status is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status ${response.status}`);
        }

        // Parse response JSON into JS object
        const parsedTasks = await response.json();

        // Clear loading message after successful fetch
        loadingAlert.textContent = "";

        // Return array of objects for later use
        return parsedTasks;
    }

    catch (error) {
        // Show error message if tasks failed to load
        loadingAlert.textContent = "Failed to load tasks. Please try again later.";
        console.error(error);
        throw error;
    }
}