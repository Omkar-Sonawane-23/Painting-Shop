// server.js (FINAL)

require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const { connectDB } = require("./config/db");

// Routes
const authRoutes = require("./routes/authroutes");
const userRoutes = require("./routes/userroutes");
const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const uploadRoutes = require("./routes/uploadRoutes"); // ✅ ADD THIS

const app = express();

/* =========================
   GLOBAL MIDDLEWARE
========================= */

// CORS (frontend origin from env)
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ IMPORTANT for multer
app.use(cookieParser());

/* =========================
   RATE LIMITING (OPTIONAL)
========================= */

// const limiter = rateLimit({
//   windowMs: 1 * 60 * 1000,
//   max: 10,
//   message: "Too many requests, try again later",
// });
// app.use("/api/auth", limiter);

/* =========================
   ROUTES
========================= */

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/dashboard", dashboardRoutes);

// 🔥 UPLOAD ROUTE (ISOLATED & SAFE)
app.use("/api/upload", uploadRoutes);

/* =========================
   HEALTH CHECK
========================= */

app.get("/health", (req, res) => {
  res.json({ ok: true, status: "Server is healthy" });
});

/* =========================
   GLOBAL ERROR HANDLER
   (VERY IMPORTANT)
========================= */

app.use((err, req, res, next) => {
  console.error("❌ GLOBAL ERROR:", err);

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

/* =========================
   START SERVER
========================= */

const PORT = process.env.PORT || 4000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/painting-shop";

connectDB(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server listening on port ${PORT}`);
      console.log("📦 MongoDB connected");
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB:", err.message);

    app.listen(PORT, () => {
      console.log(
        `⚠️ Server listening on port ${PORT} (without database connection)`
      );
    });
  });
