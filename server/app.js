require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");

const authRoutes = require("./routes/auth.routes");
const noteRoutes = require("./routes/note.routes");

const app = express();
connectDB();

app.use(express.json());
app.use(cors({ origin: "https://notes-app-hazel-pi.vercel.app" }));

app.get("/", (req, res) => res.send("Hello"));

app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

module.exports = app;
