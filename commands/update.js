const inquirer = require("inquirer");
const { db } = require("../db/lowdb");
const chalk = require("chalk");

module.exports = async function updateTask() {
  const { title } = await inquirer.prompt({ type: "input", name: "title", message: "Enter task title to update:" });
  const task = db.data.tasks.find(t => t.title === title);
  if (!task) return console.log(chalk.red("❌ Task not found"));

  const { status, description } = await inquirer.prompt([
    { type: "list", name: "status", message: "New Status:", choices: ["pending", "completed"], default: task.status },
    { type: "input", name: "description", message: "Update Description:", default: task.description },
  ]);

  task.status = status;
  task.description = description;
  await db.write();
  console.log(chalk.green("✅ Task updated successfully"));
};
