/**
 * Get saved theme from localStorage and apply it on page load.
 */
export function initializeTheme() {
  // Get saved theme
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";

  applyTheme(isDark);
}

/**
 * Apply theme User Interface changes.
 * @param {boolean} isDark - Whether to apply dark theme.
 */
function applyTheme(isDark) {
  const body = document.body;
  body.classList.toggle("dark", isDark);

  // Show/hide logos based on theme
  const lightLogo = document.getElementById("logo");
  const darkLogo = document.getElementById("dark-logo");
  if (lightLogo) {
    lightLogo.style.display = isDark ? "none" : "flex";
  }
  if (darkLogo) {
    darkLogo.style.display = isDark ? "flex" : "none";
  }

  // Toggle switch circle position based on theme
  const switchCircles = document.querySelectorAll(".switch-circle");
  switchCircles.forEach(circle =>
    circle.classList.toggle("theme-dark-clicked", isDark)
  );
}

/**
 * Add click event listeners to toggle buttons.
 * Toggles theme and saves preference.
 */
export function setupThemeToggleButtons() {
  const body = document.body;

  const lightLogo = document.getElementById("logo");
  const darkLogo = document.getElementById("dark-logo");

  const switchCircles = document.querySelectorAll(".switch-circle");
  const toggleButtons = document.querySelectorAll(".toggle-theme-btn");

  toggleButtons.forEach(button =>
    button.addEventListener("click", () => {

      // Toggle dark class on body and save preference
      const isNowDark = body.classList.toggle("dark");
      localStorage.setItem("theme", isNowDark ? "dark" : "light");

      // Show/hide logos based on new theme
      if (lightLogo) {
        logo.style.display = isNowDark ? "none" : "flex";
      }
      if (darkLogo) {
        darkLogo.style.display = isNowDark ? "flex" : "none";
      } 

      // Toggle switch circle position based on new theme
      switchCircles.forEach(circle =>
        circle.classList.toggle("theme-dark-clicked", isNowDark)
      );
    })
  );
}