const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// ✅ Serve static frontend files
app.use(express.static("./public"));

app.use("/ai", aiRoutes);


// ✅ SPA fallback (must use SAME folder)
app.use('*name',(req, res) => {
  res.sendFile(path.join(__dirname,"..","/public/index.html"));
});

module.exports = app;
