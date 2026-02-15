const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Define ONE frontend path
const publicPath = path.join(__dirname, "public");

// ✅ Serve static frontend files
app.use(express.static(publicPath));

// ✅ API routes
app.use("/ai", aiRoutes);

// ✅ SPA fallback (must use SAME folder)
app.use((req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

module.exports = app;
