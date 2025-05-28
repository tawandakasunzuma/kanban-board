/**
 * Initializes the sidebar toggle functionality.
 * Toggles the visibility of the sidebar and show/hide button.
 * 
 * When the "hide" button is clicked, the sidebar is hidden, and the "show" button is displayed.
 * When the "show" button is clicked, the sidebar is shown, and the "show" button is hidden.
 */
export function initializeSidebarToggle() {
  const sidebar = document.getElementById('side-bar-div');
  const hideSidebarBtn = document.getElementById('sidebar-toggle-container');
  const showSidebarBtn = document.getElementById('icon-hide-menu');

  hideSidebarBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
    showSidebarBtn.style.display = 'flex';
  });

  showSidebarBtn.addEventListener('click', () => {
    sidebar.style.display = 'flex';
    showSidebarBtn.style.display = 'none';
  });
}
