
const express = require('express');
const router = express.Router();
const { requireAuth, requireRole } = require('../middleware/authmiddleware');
const { upload } = require('../config/cloudinary'); // Import upload middleware
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// Public routes
router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Admin-only routes - Added upload.single('image')
router.post('/', requireAuth, requireRole('ADMIN'), upload.single('image'), createProduct);
// Backend/routes/productRoutes.js
router.post('/', requireAuth, requireRole('ADMIN'), upload.array('images', 8), createProduct);
router.put('/:id', requireAuth, requireRole('ADMIN'), upload.array('images', 8), updateProduct);

module.exports = router;