const Note = require("../models/note.model");

const addNote = async (req, res) => {
  const { title, content, tags } = req.body;
  const { user } = req.user;

  if (!title || !content)
    return res.status(400).json({ message: "Title and content are required" });

  const note = await Note.create({ title, content, tags, userId: user._id });
  res.json({ error: false, message: "Note added", note });
};

const editNote = async (req, res) => {
  const { noteId } = req.params;
  const { title, content, tags, isPinned } = req.body;
  const { user } = req.user;

  const note = await Note.findOne({ _id: noteId, userId: user._id });
  if (!note) return res.status(404).json({ message: "Note not found" });

  Object.assign(note, { title, content, tags, isPinned });
  await note.save();
  res.json({ error: false, message: "Note updated", note });
};

const deleteNote = async (req, res) => {
  const { noteId } = req.params;
  const { user } = req.user;

  const note = await Note.findOneAndDelete({ _id: noteId, userId: user._id });
  if (!note) return res.status(404).json({ message: "Note not found" });

  res.json({ error: false, message: "Note deleted" });
};

const getAllNotes = async (req, res) => {
  const { user } = req.user;
  const notes = await Note.find({ userId: user._id }).sort({ createdAt: -1 });
  res.json({ error: false, message: "Notes fetched", notes });
};

const updatePinned = async (req, res) => {
  const { noteId } = req.params;
  const { isPinned } = req.body;
  const { user } = req.user;

  const note = await Note.findOneAndUpdate(
    { _id: noteId, userId: user._id },
    { isPinned },
    { new: true }
  );
  if (!note) return res.status(404).json({ message: "Note not found" });

  res.json({ error: false, message: "Pin updated", note });
};

const searchNotes = async (req, res) => {
  const { query } = req.query;
  const { user } = req.user;

  if (!query) return res.status(400).json({ message: "Query required" });

  const notes = await Note.find({
    userId: user._id,
    $or: [
      { title: new RegExp(query, "i") },
      { content: new RegExp(query, "i") },
    ],
  });

  res.json({ error: false, notes });
};

module.exports = {
  addNote,
  editNote,
  deleteNote,
  getAllNotes,
  updatePinned,
  searchNotes,
};
