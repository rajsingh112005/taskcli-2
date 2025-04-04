const inquirer = require("inquirer");
const { db } = require("../db/lowdb");
const chalk = require("chalk");

module.exports = async function deleteTask() {
  const { title } = await inquirer.prompt({ type: "input", name: "title", message: "Enter task title to delete:" });
  const index = db.data.tasks.findIndex(t => t.title === title);
  if (index === -1) return console.log(chalk.red("❌ Task not found"));

  db.data.tasks.splice(index, 1);
  await db.write();
  console.log(chalk.green("🗑️ Task deleted successfully"));
};
