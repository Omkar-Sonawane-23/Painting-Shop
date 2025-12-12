const express = require('express');
const router = express.Router();
const { requireAuth, requireRole } = require('../middleware/authmiddleware');
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

// Admin-only routes
router.post('/', requireAuth, requireRole('ADMIN'), createProduct);
router.put('/:id', requireAuth, requireRole('ADMIN'), updateProduct);
router.delete('/:id', requireAuth, requireRole('ADMIN'), deleteProduct);

module.exports = router;

