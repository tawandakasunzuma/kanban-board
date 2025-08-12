# 🚀 Kanban Task Management App

> A modern Kanban-style task management app built with HTML, CSS, and JavaScript, developed to demonstrate front-end proficiency.

🌐 [Live Demo](https://tawanda-kanban-task-manager.netlify.app/)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![GitHub Stars](https://img.shields.io/github/stars/tawandakasunzuma/kanban-board?style=social)](https://github.com/tawandakasunzuma/kanban-board/stargazers)  
[![GitHub Issues](https://img.shields.io/github/issues/tawandakasunzuma/kanban-board)](https://github.com/tawandakasunzuma/kanban-board/issues)

## 📝 Overview

This app allows users to **create, edit, and delete tasks** across multiple columns based on **status** (To Do, Doing, Done). Task data is dynamically fetched from a public API and stored locally using **localStorage**, ensuring persistence even after page refreshes.

Key features include:

- ✅ Fully **responsive design**
- 🌙 **Light/Dark theme toggle**
- 📱 **Mobile-friendly sidebar and menu**
- 🧩 **Modular JavaScript structure**

---

## 🧰 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **LocalStorage**
- **Netlify** (for deployment)

---

## 🚀 Features

- 🔄 **Fetch Tasks Dynamically** from [Kanban API](https://jsl-kanban-api.vercel.app/)
- ✏️ **Edit and Delete Tasks** with confirmation modals
- 💾 **Save Tasks Persistently** using LocalStorage
- 📊 **Sort Tasks by Priority** within columns
- 🌗 **Toggle Light/Dark Theme** across all devices
- 📱 **Responsive Sidebar & Menu** for mobile and desktop
- 🧩 **Modular JavaScript Architecture** with clear documentation

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

Use this app to:

- 📌 Track tasks by **status**: To Do, Doing, Done
- ✏️ **Add, edit, and delete tasks** using intuitive modals
- 🎯 Stay focused with **priority-based task sorting**
- 🌙 Toggle between **light and dark modes**
- 📱 Navigate using a **responsive sidebar or mobile menu**

---

## 📖 Code Structure & Quality

This project follows a **modular structure**:

- `main.js`: Entry point; initializes the app, fetches tasks from the API, and begins rendering
- `api.js`: Handles all data fetching from the Kanban API
- `render.js`: Contains DOM manipulation logic to render and update tasks on the page
- `modal.js`: Manages task-create/edit modals (opening, closing, and form buttons logic)
- `storage.js`: Interacts with `localStorage` to load and persist tasks
- `sidebar.js`: Controls sidebar show/hide behavior for responsive navigation
- `theme.js`: Implements light/dark theme toggle and persists the user’s preference

All modules are cleanly separated and well-documented:
Functions are documented using **JSDoc** for clarity and maintainability.

---

## 🧩 Contributing

Contributions are welcome! To get started:

1. **Fork** the repository

2. **Create a new branch**

```bash
git checkout -b feature/your-feature
```

3. **Commit your changes**

```bash
git commit -m "Add your feature"
```

4. **Push to your branch**

```bash
git push origin feature/your-feature
```

5. **Open a Pull Request** on Github

---

## 🙋‍♂️ Contact

Have questions or want to collaborate?

📧 Email me at: [tskasunzuma@gmail.com](mailto:tskasunzuma@gmail.com)
