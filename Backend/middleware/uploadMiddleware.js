const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");


const storage = new CloudinaryStorage({
  cloudinary, // MUST be v2 instance
  params: {
    folder: "painting-shop/products",
    format: async () => "webp",
    public_id: () => `product-${Date.now()}`,
  },
});


function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png|webp/;
  const mimetypes = /image\/jpg|image\/jpeg|image\/png|image\/webp/;

  if (
    filetypes.test(file.originalname.toLowerCase()) &&
    mimetypes.test(file.mimetype)
  ) {
    cb(null, true);
  } else {
    cb(new Error("Images only"));
  }
}

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => checkFileType(file, cb),
  limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = upload;
