const express = require("express");
const router = express.Router();

router.get("/search", async (req, res) => {
  await res.status(200).json("search successful");
});

module.exports = router;
