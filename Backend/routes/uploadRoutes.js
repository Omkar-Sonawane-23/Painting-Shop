const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
const { requireAuth } = require("../middleware/authmiddleware");

dotenv.config();

const router = express.Router();

/* =========================
   CLOUDINARY CONFIG
========================= */

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* =========================
   MULTER STORAGE
========================= */

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "painting-shop/uploads",
    format: async () => "webp",
    public_id: () => `upload-${Date.now()}`,
  },
});

/* =========================
   FILE FILTER
========================= */

function checkFileType(file, cb) {
  const allowed = /jpg|jpeg|png|webp/;
  const isValidExt = allowed.test(file.originalname.toLowerCase());
  const isValidMime = allowed.test(file.mimetype);

  if (isValidExt && isValidMime) cb(null, true);
  else cb(new Error("Only images are allowed"));
}

/* =========================
   MULTER INSTANCE
========================= */

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => checkFileType(file, cb),
  limits: { fileSize: 5 * 1024 * 1024 },
});

/* =========================
   ROUTES
========================= */

// SINGLE IMAGE
router.post(
  "/single",
  requireAuth,
  upload.single("image"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    return res.status(200).json({
      message: "Image uploaded successfully",
      url: req.file.path,
    });
  }
);

// MULTIPLE IMAGES
router.post(
  "/multiple",
  requireAuth,
  upload.array("images", 5),
  (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No images uploaded" });
    }

    const urls = req.files.map((file) => file.path);

    return res.status(200).json({
      message: "Images uploaded successfully",
      urls,
    });
  }
);

module.exports = router;
