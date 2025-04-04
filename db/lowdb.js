const { Low } = require("lowdb");
const { JSONFile } = require("lowdb/node");
const path = require("path");

const file = path.join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter, { tasks: [] });

async function initDB() {
  await db.read();
  db.data ||= { tasks: [] }; 
  await db.write();
}

module.exports = { db, initDB };
