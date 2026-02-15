const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Serve static frontend
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.use("/ai", aiRoutes);

// ✅ Express 5 SAFE fallback (no "*", no "/*")
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
