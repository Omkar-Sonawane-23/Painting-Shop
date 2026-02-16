const express = require('express');
const router = express.Router();
const { requireAuth, requireRole } = require('../middleware/authmiddleware');
const upload = require('../middleware/uploadMiddleware');

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// Public
router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Admin
router.post(
  '/',
  requireAuth,
  requireRole('ADMIN'),
  upload.array('images', 5), // 🔥 THIS WAS MISSING
  createProduct
);

router.put(
  '/:id',
  requireAuth,
  requireRole('ADMIN'),
  upload.array('images', 5),
  updateProduct
);

router.delete('/:id', requireAuth, requireRole('ADMIN'), deleteProduct);

module.exports = router;
