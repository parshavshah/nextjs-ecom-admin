const sql = require("better-sqlite3");
const db = sql("ecomdemo.db");

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS products (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       image TEXT NOT NULL,
       description TEXT NOT NULL,
       price TEXT NOT NULL
    )
`
).run();
