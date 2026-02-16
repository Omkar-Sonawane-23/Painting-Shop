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
    const { name, description, category, price, tag, stock } = req.body;

    // 1. Log the direct file upload result from Cloudinary
    console.log('--- Direct Cloudinary Upload Log ---');
    console.log('Files received and uploaded:', req.files);

    // 2. Map the uploaded file paths (Cloudinary URLs) to an array
    const imageUrls = req.files ? req.files.map(file => file.path) : [];
    console.log('Final URLs being saved to DB:', imageUrls);

    const product = new Product({
      name,
      description,
      category,
      price: Number(price),
      images: imageUrls, // Direct Cloudinary URLs
      tag,
      stock: stock || 0
    });

    await product.save();
    console.log('✅ Product and images saved successfully');
    res.status(201).json(product);
  } catch (error) {
    console.error('❌ Upload Error:', error);
    res.status(500).json({ message: 'Failed to upload images and save product' });
  }
}

// PUT update product (admin only)
async function updateProduct(req, res) {
  try {
    const { name, description, category, price, tag, stock } = req.body;
    const product = await Product.findById(req.params.id);
    
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Update fields
    if (name !== undefined) product.name = name;
    if (description !== undefined) product.description = description;
    if (category !== undefined) product.category = category;
    if (price !== undefined) product.price = Number(price);
    if (tag !== undefined) product.tag = tag;
    if (stock !== undefined) product.stock = Number(stock);

    // If a new image is uploaded, update it
    if (req.file) {
      product.image = req.file.path;
    }

    await product.save();
    res.json(product);
  } catch (error) {
    console.error('Error updating product:', error);
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

