const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  await res.status(200).json("successful");
});

router.get("/", async (req, res) => {
  await res.status(200).json(" get all products successful");
});

module.exports = router;
