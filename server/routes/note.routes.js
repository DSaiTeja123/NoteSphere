const express = require("express");
const router = express.Router();
const {
  addNote,
  editNote,
  deleteNote,
  getAllNotes,
  updatePinned,
  searchNotes,
} = require("../controllers/note.controller");

const { authenticateToken } = require("../utils/utils");

router.post("/", authenticateToken, addNote);
router.put("/:noteId", authenticateToken, editNote);
router.delete("/:noteId", authenticateToken, deleteNote);
router.get("/", authenticateToken, getAllNotes);
router.put("/pin/:noteId", authenticateToken, updatePinned);
router.get("/search", authenticateToken, searchNotes);

module.exports = router;
