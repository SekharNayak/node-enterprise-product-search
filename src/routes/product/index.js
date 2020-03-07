const express = require("express");
const router = express.Router();
const addProduct = require("./addProduct");
const getProductDetails = require("./getProductDetails");

router.use("/product", addProduct);
router.use("/product", getProductDetails);

module.exports = router;
