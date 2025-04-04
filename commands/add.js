const inquirer = require("inquirer");
const { db } = require("../db/lowdb");
const { nanoid } = require("nanoid");
const chalk = require("chalk");

module.exports = async function addTask() {
  const task = await inquirer.prompt([
    { type: "input", name: "title", message: "Task Title:" },
    { type: "input", name: "description", message: "Task Description:" },
    { type: "input", name: "tag", message: "Tag (e.g. work, personal):" },
    { type: "input", name: "dueDate", message: "Due Date (YYYY-MM-DD):" },
    { type: "list", name: "priority", message: "Priority:", choices: ["low", "medium", "high"] },
    { type: "list", name: "recurring", message: "Recurring:", choices: ["none", "daily", "weekly"] },
  ]);

  const newTask = {
    id: nanoid(6),
    ...task,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  db.data.tasks.push(newTask);
  await db.write();
  console.log(chalk.green("✅ Task added successfully!"));
};

