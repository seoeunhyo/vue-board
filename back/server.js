const express = require('express')
const cors = require('cors')
const db = require('./db.js')
const app = express()
const port = 3000;

// Vue 정적파일 서빙 (경로 주의!)
app.use(express.static(path.join(__dirname, "../dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.use(cors());
app.use(express.json());

// 1. 게시글 목록 보기 (GET /api/posts)
app.get('/api/posts', (req, res) => {
  db.all("SELECT * FROM posts WHERE board_id = ? ORDER BY createdAt DESC", [board_id], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ posts: rows });
  });
});

// 2. 게시글 상세보기 (GET /api/posts/:id)
app.get('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM posts WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ post: row });
  });
});

// 3. 게시글 쓰기 (POST /api/posts)
app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;
  db.run("INSERT INTO posts (title, content) VALUES (?, ?)", [title, content], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID }); // 새로 생성된 글의 id 반환
  });
});

// 4. 게시글 수정하기 (PUT /api/posts/:id)
app.put('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  db.run("UPDATE posts SET title = ?, content = ? WHERE id = ?", [title, content, id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ changes: this.changes }); // 변경된 row 수 반환
  });
});

// (추가) 게시글 삭제하기 (DELETE /api/posts/:id)
app.delete('/api/posts/:id', (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM posts WHERE id = ?", [id], function(err) {
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