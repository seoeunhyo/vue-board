const express = require('express')
const cors = require('cors')
const db = require('./db.js')
const app = express()
const port = 3000;
const path = require('path');
const { writer } = require('repl');

// Vue 정적파일 서빙 (경로 주의!)
// app.use(express.static(path.join(__dirname, "../dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../dist", "index.html"));
// });

app.use(cors());
app.use(express.json());

// 1. 게시글 목록 보기 
app.get('/board/:boardId/list', (req, res) => {
  const { boardId } = req.params;
  db.all("SELECT * FROM posts WHERE boardId = ? ORDER BY RegDate DESC", [boardId], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ posts: rows });
  });
});

// 2. 게시글 상세보기 
app.get('/board/view/:id', (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM posts WHERE seqno = ?", [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ post: row });
  });
});

// 3. 게시글 쓰기 
app.post('/board/:boardId/write', (req, res) => {
  const { title, contents, writer } = req.body;
  const { boardId } = req.params;
  db.run("INSERT INTO posts (boardId, title, contents, writer, FileName , RegDate, ModDate) VALUES (?, ?, ?, ?, NULL,  datetime('now'), NULL)", [boardId, title, contents, writer], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID }); // 새로 생성된 글의 id 반환
  });
});

// 4. 게시글 수정하기 
app.put('/board/update/:id', (req, res) => {
  const { id } = req.params;
  const { title, contents, writer } = req.body;
  db.run("UPDATE posts SET title = ?, contents = ?, writer = ?, ModDate =  datetime('now') WHERE seqno = ?", [title, contents, writer, id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ changes: this.changes }); // 변경된 row 수 반환
  });
});

// (추가) 게시글 삭제하기 
app.delete('/board/delete/:id', (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM posts WHERE seqno = ?", [id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ deleted: this.changes });
    });
});


app.listen(port, () => {
  console.log(`백엔드 서버가 http://localhost:${port} 에서 실행 중입니다.`);
});