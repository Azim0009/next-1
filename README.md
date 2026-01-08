📄 README.md
# ✅ Next.js Todo App

A simple and clean **Todo Application** built with **Next.js (App Router)** and **React Hooks**.  
You can add, edit, delete, search, filter, and toggle todo items easily.

---

## 🚀 Features

- ➕ Add new todo
- ✏️ Edit existing todo
- ❌ Delete todo
- ✔️ Mark as completed or pending
- 🔍 Search todos by text
- 🎛 Filter by
  - All
  - Completed
  - Pending
- 🎨 Nice responsive UI with Tailwind CSS

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|----------|
| **Next.js 13/14** | App framework |
| **React** | UI logic |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |

---

## 📁 Folder Structure



project/
└── app/
└── page.tsx # Main Todo component
└── package.json
└── README.md
└── tailwind.config.js


---

## ▶️ Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourname/todo-app.git
cd todo-app

2️⃣ Install Dependencies
npm install

3️⃣ Run the App
npm run dev


Then open:

http://localhost:3000

🧩 Components Used
State Hooks

useState – manage todos, search, filter, and editing states

Logic

addTodo() – create new task

editTodo() – update existing todo text

deleteTodo() – remove a task

chexbox() – toggle task status

.filter() – search + filter

.map() – render todo list

📸 Preview

(Add screenshot if you have one)
Example:

![Todo Screenshot](./public/todo-screenshot.png)

🎯 Future Improvements (Ideas)

💾 Save todos to LocalStorage

📱 Make modal for editing

🎁 Add categories or priority

👤 User login

☁️ Sync with database (Supabase / Firebase)

🤝 Contribution

Feel free to fork, open issues, and create pull requests.

📄 License

This project is open-source and available under the MIT License.