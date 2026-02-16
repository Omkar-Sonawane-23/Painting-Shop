const Product = require('../models/product');

// GET all products (public endpoint)
async function getAllProducts(req, res) {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Failed to fetch products' });
  }
}

// GET single product by ID (public endpoint)
async function getProductById(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Failed to fetch product' });
  }
}
// ... (existing imports)

// POST create new product (admin only)
async function createProduct(req, res) {
  try {
    console.log("📥 BODY:", req.body);
    console.log("🖼 FILES:", req.files);

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        message: "At least one product image is required",
      });
    }

    const {
      name,
      description,
      category,
      price,
      tag,
      stock,
    } = req.body;

    if (!name || !category || !price) {
      return res.status(400).json({
        message: "Name, category and price are required",
      });
    }

    const imageUrls = req.files.map((file) => file.path);

    const product = await Product.create({
      name,
      description,
      category,
      price: Number(price),
      images: imageUrls,
      tag,
      stock: Number(stock || 0),
    });

    return res.status(201).json(product);
  } catch (error) {
    console.error("❌ CREATE PRODUCT ERROR:", error);

    return res.status(500).json({
      message: "Product creation failed",
      error: error.message,
    });
  }
}



// PUT update product (admin only)
async function updateProduct(req, res) {
  try {
    const { name, description, category, price, tag, stock } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ message: 'Product not found' });

    if (name !== undefined) product.name = name;
    if (description !== undefined) product.description = description;
    if (category !== undefined) product.category = category;
    if (price !== undefined) product.price = Number(price);
    if (tag !== undefined) product.tag = tag;
    if (stock !== undefined) product.stock = Number(stock);

    if (req.files && req.files.length > 0) {
      product.images = req.files.map(file => file.path);
    }

    await product.save();
    res.json(product);
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ message: 'Failed to update product' });
  }
}

// ... (rest of the controller)

// DELETE product (admin only)
async function deleteProduct(req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Failed to delete product' });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};

