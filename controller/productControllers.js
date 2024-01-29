const Product = require("../models/Product");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const addProduct = async (req, res) => {
  try {
    const { productName, description, quantity, unitPrice } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided" });
    }

    const productImage = req.file.buffer;

    const newProduct = new Product({
      name: productName,
      description: description,
      countInStock: quantity,
      price: unitPrice,
    });
    const imageUrl = `data:image/png;base64,${productImage.toString("base64")}`;

    // Save the URL in the product document
    newProduct.imageUrl = imageUrl;

    await newProduct.save();

    res.status(201).json({ message: "Product created successfully", imageUrl });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
};
