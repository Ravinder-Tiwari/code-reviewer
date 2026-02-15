const express = require('express');
const { route } = require('../app');
const aiController = require("../controllers/ai.controller")
const router = express.Router()
router.post("/get-review",aiController)

module.exports = router