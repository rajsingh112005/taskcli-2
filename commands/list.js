const { db } = require("../db/lowdb");
const chalk = require("chalk");

module.exports = async function listTasks(options) {
  const tasks = db.data.tasks;
  const today = new Date().toISOString().split("T")[0];

  const filtered = tasks.filter(task => {
    if (options.status && task.status !== options.status) return false;
    if (options.priority && task.priority !== options.priority) return false;
    if (options.tag && task.tag !== options.tag) return false;
    if (options.dueToday && task.dueDate !== today) return false;
    return true;
  });

  if (filtered.length === 0) return console.log(chalk.yellow("⚠️  No matching tasks found."));

  filtered.forEach(task => {
    console.log(chalk.cyan.bold(`\n📌 ${task.title}`));
    console.log(chalk.gray(`   Description:`), chalk.white(task.description));
    console.log(chalk.gray(`   Tag:`), chalk.magenta(task.tag));
    console.log(chalk.gray(`   Due:`), chalk.yellow(task.dueDate));
    console.log(chalk.gray(`   Priority:`), chalk.redBright(task.priority));
    console.log(chalk.gray(`   Recurring:`), chalk.blue(task.recurring));
    console.log(chalk.gray(`   Status:`), task.status === "completed" ? chalk.green(task.status) : chalk.yellow(task.status));
  });
};

