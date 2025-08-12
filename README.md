# Kanban Task Management App

> A modern Kanban-style task management app built with HTML, CSS, and JavaScript, developed to demonstrate front-end proficiency.

🌐 [Live Demo on Netlify](https://tawanda-kanban-task-manager.netlify.app/)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![GitHub Stars](https://img.shields.io/github/stars/tawandakasunzuma/kanban-board?style=social)](https://github.com/tawandakasunzuma/kanban-board/stargazers)  
[![GitHub Issues](https://img.shields.io/github/issues/tawandakasunzuma/kanban-board)](https://github.com/tawandakasunzuma/kanban-board/issues)

## 📝 Overview

**Kanban Task Management App** allows users to:

- ✅ Create, edit, and delete tasks across multiple columns (To Do, Doing, Done)  
- 🔄 Fetch tasks dynamically from a public API  
- 💾 Save tasks persistently using `localStorage`  
- 🌗 Toggle between light and dark themes  
- 📱 Navigate via a responsive sidebar and mobile menu  

Built with modular JavaScript for clarity and maintainability.

---

## 🧰 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript** (ES6+)
- **LocalStorage**
- **Git & GitHub** (version control)
- **Netlify** (deployment)

---

## 🚀 Key Features

- ✅ Create, edit, and delete tasks across multiple columns (To Do, Doing, Done)  
- 🔄 Fetch tasks dynamically from a public API  
- 💾 Save tasks persistently using localStorage  
- 📊 Sort tasks by priority within each column  
- 🌗 Toggle light and dark themes across all devices  
- 📱 Responsive sidebar and mobile menu for easy navigation  
- 🧩 Modular JavaScript architecture with clear documentation

---

## 🛠️ Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/tawandakasunzuma/kanban-board.git
   cd kanban-board

   ```

2. **Run Locally**  
   No server required — simply open `index.html` in any modern browser:

   ```bash
   open index.html
   ```

---

## 💡 Usage Guide

- 📌 Track tasks by status: **To Do**, **Doing**, and **Done** columns.  
- ✏️ Add, edit, and delete tasks via user-friendly modal dialogs.  
- 🎯 Organize tasks using priority-based sorting within each column.  
- 🌙 Toggle between light and dark themes for comfort and accessibility.  
- 📱 Navigate easily using a responsive sidebar or mobile menu on all devices.

---

## 📖 Code Structure & Quality

The app is built with modular vanilla JavaScript for maintainability:

- `main.js` — Initializes the app, fetches tasks from API, and triggers rendering.  
- `api.js` — Manages all external data fetching logic.  
- `render.js` — Handles DOM rendering and updates for tasks and columns.  
- `modal.js` — Controls task creation/edit modals, including form logic.  
- `storage.js` — Interacts with `localStorage` for saving and loading tasks.  
- `sidebar.js` — Manages responsive sidebar and mobile menu behavior.  
- `theme.js` — Implements light/dark theme toggling and persistence.  

Code is documented using JSDoc, following clear separation of concerns.  
The modular structure enhances testability and scalability.

---

## 🧩 Contributing

Contributions are welcome! To get started:

1. **Fork** the repository

2. **Create a new branch:**

   ```git checkout -b feature/your-feature```

3. **Commit your changes:**

   ```git commit -m "Add your feature"```

4. **Push to your branch:**

   ```git push origin feature/your-feature```

5. **Open a Pull Request** on GitHub

---

## 📬 Contact

For questions, feedback, or collaboration, please reach out to:

**Tawanda Kasunzuma**  
📧 tskasunzuma@gmail.com  
🔗 https://github.com/tawandakasunzuma  
🔗 https://www.linkedin.com/in/tawanda-kasunzuma/
