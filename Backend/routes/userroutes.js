const express = require('express');
const router = express.Router();
const { requireAuth, requireRole } = require('../middleware/authmiddleware');
const User = require('../models/user');

router.get('/', requireAuth, requireRole('ADMIN'), async (req, res) => {
  const users = await User.find().select('-passwordHash');
  res.json({ users });
});

module.exports = router;
