const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("board.db", (err) => {
    if(err){
        return console.log(err.message);
    }
    console.log("CONNECT DB SUCCESS")
});

db.run(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    boardId VARCHAR(20),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);