const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  addProduct,
} = require("../controller/productControllers");
const multer = require("multer");
const storage = multer.memoryStorage(); // Use memory storage for simplicity
const upload = multer({ storage: storage });

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/create", upload.single("productImage"), addProduct);

module.exports = router;
