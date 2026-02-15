const aiService = require("../services/ai.service");

async function getReview(req, res) {
  try {
    const code = req.body.code;

    if (!code) {
      return res.status(400).json({ error: "prompt is required" });
    }

    const result = await aiService(code);

    res.json({ result });
  } catch (error) {
    console.error("Controller Error:", error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = getReview;
