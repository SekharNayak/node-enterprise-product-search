const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  await res.status(200).json("successful");
});

module.exports = router;
