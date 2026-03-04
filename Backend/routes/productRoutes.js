const express = require('express');
const router = express.Router();
const { requireAuth, requireRole } = require('../middleware/authmiddleware');
<<<<<<< HEAD
const upload = require('../middleware/uploadMiddleware');

=======
>>>>>>> upstream/main
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

<<<<<<< HEAD
// Public
router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Admin
router.post(
  '/',
  requireAuth,           // 1. Verify Token first
  requireRole('ADMIN'),  // 2. Verify Role second
  upload.array('images', 5), // 3. Process files only if authorized
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
=======
// Public routes
router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Admin-only routes
router.post('/', requireAuth, requireRole('ADMIN'), createProduct);
router.put('/:id', requireAuth, requireRole('ADMIN'), updateProduct);
router.delete('/:id', requireAuth, requireRole('ADMIN'), deleteProduct);

module.exports = router;

>>>>>>> upstream/main
