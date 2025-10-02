const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("board.db", (err) => {
    if(err){
        return console.log(err.message);
    }
    console.log("CONNECT DB SUCCESS")
});

db.serialize(() => {
  // 기존 테이블 삭제 (있으면)
  db.run(`DROP TABLE IF EXISTS posts`);
db.run(`
  CREATE TABLE IF NOT EXISTS posts (
    SeqNo      INTEGER PRIMARY KEY AUTOINCREMENT,
    boardId    INTEGER,
    title      VARCHAR(200) NOT NULL,
    contents   VARCHAR(1000),
    FileName   VARCHAR(100),
    writer     VARCHAR(50),
    RegDate    DATETIME DEFAULT CURRENT_TIMESTAMP,
    ModDate    DATETIME
  )
`);
db.run(`
  INSERT INTO posts (boardId, title, contents, FileName, writer, RegDate, ModDate)
  VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'))
`, [1, '게시판 제목 1', '게시판 내용 1', 'example.txt', '서은효'], function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`새 글이 추가되었습니다. SeqNo: ${this.lastID}`);
});

db.run(`
  INSERT INTO posts (boardId, title, contents, FileName, writer, RegDate, ModDate)
  VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'))
`, [1, '게시판 제목 2', '게시판 내용 1', 'example.txt', '서은효'], function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`새 글이 추가되었습니다. SeqNo: ${this.lastID}`);
});

db.run(`
  INSERT INTO posts (boardId, title, contents, FileName, writer, RegDate, ModDate)
  VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'))
`, [1, '게시판 제목 3', '게시판 내용 1', 'example.txt', '서은효'], function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`새 글이 추가되었습니다. SeqNo: ${this.lastID}`);
});


db.run(`
  INSERT INTO posts (boardId, title, contents, FileName, writer, RegDate, ModDate)
  VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'))
`, [2, '게시판 제목 3', '게시판 내용 1', 'example.txt', '서은효'], function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`새 글이 추가되었습니다. SeqNo: ${this.lastID}`);
});

db.run(`
  INSERT INTO posts (boardId, title, contents, FileName, writer, RegDate, ModDate)
  VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'))
`, [2, '게시판 제목 6', '게시판 내용 1', 'example.txt', '서은효'], function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`새 글이 추가되었습니다. SeqNo: ${this.lastID}`);
});
});


module.exports = db;