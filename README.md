# 📝 Work List Management App (Angular)

A simple multi-user work list management application built with Angular.
This app allows users to manage tasks efficiently with persistent storage.

---

## 🌐 Live Demo

👉 https://work-list-angular-qxtbk9370-solimanrabies-projects.vercel.app/

## 🚀 Features

- 👤 Select a user
- 📋 View user-specific tasks
- ➕ Add new tasks
- ✅ Mark tasks as completed (remove)
- 💾 Save tasks in **localStorage**
- 🔄 Real-time UI updates

---

## 🛠️ Tech Stack

- **Angular (Standalone Components)**
- **TypeScript**
- **HTML / CSS**
- **Angular Signals**
- **Services (Dependency Injection)**

---

## 📂 Project Structure

```
src/
│
├── app/
│   ├── header/
│   ├── user/
│   ├── tasks/
│   │   ├── task/
│   │   ├── new-task/
│   │   ├── tasks.service.ts
│   │
│   ├── shared/
│   │   ├── card/
│   │
│   ├── app.component.ts
│
└── assets/
```

---

## ⚙️ Installation

```bash
git clone https://github.com/SolimanRabie/work-list-Angular-.git
cd your-repo
npm install
ng serve
```

Then open:

```
http://localhost:4200
```

---

## 🧠 Key Concepts Used

### 1. Dependency Injection

```ts
private tasksService = inject(TasksService);
```

---

### 2. State Management via Service

- Centralized task handling
- Clean separation of concerns

---

### 3. Local Storage Persistence

```ts
localStorage.setItem("tasks", JSON.stringify(this.tasks));
```

---

### 4. Component Communication

- `@Input()` for passing data
- `@Output()` for emitting events

---

## 📸 Screenshots

### 🏠 Home Page

![Home](/screenShootes/HomePage.PNG)

### ➕ Add Task

![Add Task](/screenShootes/AddTask.PNG)

### ✅ Task List

![Tasks](/screenShootes/viewTask.PNG)

### ✅ Tasks Completed

## ![Completed](/screenShootes/completTask.PNG)

## 🔮 Future Improvements

- ✏️ Edit tasks
- 🔍 Search & filter
- 📊 Task status (Done / Pending)
- 🌐 Backend integration (API)
- 🔐 Authentication

---

## 👨‍💻 Author

**Soliman Rabie**

- LinkedIn: [www.linkedin.com/in/soliman-rabie-017b401b8]
- GitHub: [https://github.com/SolimanRabie]

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
