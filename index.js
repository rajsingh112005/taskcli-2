#!/usr/bin/env node
const { program } = require("commander");
const { initDB } = require("./db/lowdb");
const addTask = require("./commands/add");
const listTasks = require("./commands/list");
const updateTask = require("./commands/update");
const deleteTask = require("./commands/delete");

(async () => {
  await initDB();

  program.version("1.0.0").description("Task Tracker CLI App");

  program
    .command("add")
    .description("Add a new task")
    .action(addTask);

  program
    .command("list")
    .description("List all tasks")
    .option("--status <status>", "Filter by status")
    .option("--priority <priority>", "Filter by priority")
    .option("--tag <tag>", "Filter by tag")
    .option("--dueToday", "Filter tasks due today")
    .action(listTasks);

  program
    .command("update")
    .description("Update a task by title")
    .action(updateTask);

  program
    .command("delete")
    .description("Delete a task by title")
    .action(deleteTask);

  program.parse(process.argv);
})();

