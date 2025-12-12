// server.js (UPDATED)

require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { connectDB } = require('./config/db');

const authRoutes = require('./routes/authroutes');
const userRoutes = require('./routes/userroutes');
const adminRoutes = require('./routes/adminRoutes'); // 🔑 NEW: Import admin routes

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// CORS - allow React app origin (set in env or change to your front-end origin)
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173',
  credentials: true
}));

// rate limiter for auth endpoints
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
  message: 'Too many requests, try again later'
});
app.use('/api/auth', limiter);

// routes
app.use('/api/auth', authRoutes);

// ⚠️ IMPORTANT: Mounting the admin routes under /api/admin
app.use('/api/admin', adminRoutes); 

// Note on userRoutes: I have removed the line:
// app.use('/api/admin/users', userRoutes); 
// as it conflicts with the new /api/admin/users route defined in adminRoutes.js.
// If your existing userRoutes are for regular customer profile management, 
// they should be mounted separately, likely under /api/users. 
// Example (Assuming existing customer userRoutes are for /api/users):
// app.use('/api/users', userRoutes); 

// health
app.get('/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4000;

// Connect to DB and start server
connectDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
}).catch(err => {
  console.error('Failed to connect to DB', err);
});