const express = require("express");

// create an express server with in-memory data to save notes
const app = express();
app.use(express.json());

const notes = [
  { id: 1, title: "筆記 1", content: "這是筆記 1" },
  { id: 2, title: "筆記 2", content: "這是筆記 2" },
  { id: 3, title: "筆記 3", content: "這是筆記 3" },
  { id: 4, title: "筆記 4", content: "這是筆記 4" },
];

// enable CORS
app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// GET /notes?term=  search notes by content
app.get("/notes", (req, res) => {
  const term = req.query.term;
  if (term) {
    const filteredNotes = notes.filter((note) => note.content.includes(term));
    res.json(filteredNotes);
  } else {
    res.json(notes);
  }
  // res.status(500).json({ message: "加載筆記列表出錯" });
});

app.post("/notes", (req, res) => {
  const note = req.body;
  note.id = notes.length + 1;
  notes.push(note);
  res.json(note);
});

// listen on port 3000
app.listen(3000, () =>
  console.log("Server listening on http://localhost:3000")
);
