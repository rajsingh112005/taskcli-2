📋 TaskCLI – Terminal-Based Task Manager
A fast and user-friendly command-line task manager built with Node.js. Create, view, update, and delete tasks directly from the terminal. Comes with features like tagging, due dates, recurring tasks, and task filtering.

🚀 Features
✅ Add, list, update, and delete tasks from the terminal.

🏷️ Tag tasks for easy grouping.

⏰ Add due dates to stay on schedule.

🔁 Support for recurring tasks.

📊 Filter by status (pending, completed) or priority (low, medium, high).

⚡ In-memory caching with lowdb for fast performance.

🌈 Color-coded output using chalk for better UX.

🧩 Modular structure for easy scaling.

📁 File Structure
pgsql
Copy code
task-cli-2/
│
├── commands/
│   ├── add.js
│   ├── list.js
│   ├── update.js
│   └── delete.js
│
├── db/
│   └── lowdb.js
│
├── utils/
│   └── helpers.js
│
├── index.js
├── package.json
└── README.md
🛠️ Installation
bash
Copy code
git clone https://github.com/yourusername/task-cli-2.git
cd task-cli-2
npm install
npm link # 🔗 Make CLI available globally as `taskcli`
📦 Dependencies
commander

inquirer

lowdb

chalk

dayjs (for date formatting, optional)

Install them with:

bash
Copy code
npm install commander inquirer lowdb chalk dayjs
⚙️ Usage
After npm link, use taskcli anywhere:

➕ Add a Task
bash
Copy code
taskcli add
📋 List All Tasks
bash
Copy code
taskcli list
🔁 Update a Task
bash
Copy code
taskcli update
❌ Delete a Task
bash
Copy code
taskcli delete
📌 Coming Soon
Notifications for overdue tasks

Export tasks to .csv

Priority-based sorting

Sync with cloud (optional)

