🎨 Xtreme Kolorz: Automotive Pearl Pigments E-commerce Frontend

This is a modern, responsive e-commerce frontend application built with React and Tailwind CSS, designed to showcase and sell premium automotive-grade pearl pigments.

🚀 Key Features

Responsive Design: Fully adaptive UI using Tailwind CSS for mobile, tablet, and desktop viewing.

Complete E-commerce Flow: Full end-to-end user journey: Product Browsing $\rightarrow$ Cart $\rightarrow$ Simulated Checkout.

Advanced Catalog: Products are categorized into 6 distinct Pearl Series (Solid, Chroma, Interference, etc.).

Deep Linking: Clicking a category on the Home page automatically filters the Shop page to that category.

Cart Management: Persistent shopping cart state supporting quantity updates and item removal.

Admin Panel (Mock API): Dedicated secure area for product management and sales analytics simulation.

Sorting/Filtering: Shop page allows filtering by category and sorting by price (low-to-high, high-to-low).

🛠️ Technology Stack

Framework: React

Styling: Tailwind CSS (with custom utility classes)

Routing: React Router DOM

Iconography: Lucide React

Data/State: React useState/useContext

Backend Simulation (Crucial): Custom JavaScript Mock API layer simulating a Node.js/Express server connecting to MongoDB.

🛑 Backend Simulation: MongoDB API

IMPORTANT: This application does not connect to a live database. All persistence, authentication, and CRUD operations are handled by a Mock API implemented in JavaScript (primarily in src/context/AuthContext.jsx and src/pages/AdminProducts.jsx).

If deploying this application, you must integrate a real Node.js/Express server and MongoDB instance to replace the mock functions.

🔑 Admin Panel Access

The administrative dashboard and product management area are protected by a simulated login gateway using the custom AuthContext.

Page

Route

Description

Login Gate

/admin

Entry point for administrative users.

Dashboard

/admin/dashboard

Mock sales metrics, progress charts, and recent activity.

Products

/admin/products

Simulated CRUD operations (Add, Edit, Delete) for managing inventory.

Admin Login Credentials (Mock)

Credential

Value

Notes

Access Code

xtreme2025

This code triggers a successful admin session in the mock API.

📁 Project Structure (Frontend/src)

Path

Description

src/App.jsx

Main component, containing global state, cart logic, and all React Router DOM definitions.

src/context/AuthContext.jsx

Critical: Implements the Mock API functions for authentication (login/logout) and admin state management (replacing Firebase).

src/data/products.js

Source of static product data used for the main shop.

src/components/

Reusable UI components (Navbar, Footer, ProductCard, CartSidebar).

src/pages/Home.jsx

Features the Hero section, 6 Pearl Series links, and a project gallery.

src/pages/Shop.jsx

Displays filterable and sortable product grid with deep linking capability.

src/pages/ProductPage.jsx

Product detail with quantity controls, technical specs, and recommended related products.

src/pages/AdminLogin.jsx

Login form using the Mock API access code.

src/pages/AdminDashboard.jsx

Displays mocked sales analytics and progress.

src/pages/AdminProducts.jsx

Implements product CRUD logic via simulated API calls.

⚙️ Setup and Installation

Clone the Repository:

git clone [Your Repo URL]
cd Painting-Shop/Frontend


Install Dependencies:

npm install
# or
yarn install


Start the Development Server (Vite):

npm run dev
# or
yarn dev


Open in Browser: The application should be running at http://localhost:5173 (or the address specified in your console).