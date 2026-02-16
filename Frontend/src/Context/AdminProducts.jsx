// File: Frontend/src/Context/AdminProducts.jsx

import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { API_URL as BACKEND_URL } from "../config";
import {
  Plus,
  Trash2,
  Edit,
  Save,
  X,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const API_PRODUCTS_ENDPOINT = `${BACKEND_URL}/products`;

/* =========================
   API FUNCTIONS
========================= */

const fetchProducts = async (token) => {
  const res = await fetch(API_PRODUCTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

const createProduct = async (product, token) => {
  const formData = new FormData();

  formData.append("name", product.name);
  formData.append("category", product.category);
  formData.append("price", product.price);
  formData.append("description", product.description || "");
  formData.append("tag", product.tag || "");
  formData.append("stock", product.stock || 0);

  product.images.forEach((file) => {
    formData.append("images", file); // 🔑 MUST MATCH BACKEND
  });

const res = await fetch(API_PRODUCTS_ENDPOINT, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  body: formData,
});

const text = await res.text();

if (!res.ok) {
  throw new Error(text || "Product creation failed");
}

return JSON.parse(text);


  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Create failed");
  }

  return res.json();
};

const deleteProduct = async (id, token) => {
  const res = await fetch(`${API_PRODUCTS_ENDPOINT}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Delete failed");
};

/* =========================
   MAIN COMPONENT
========================= */

export default function AdminProducts() {
  const { isAdmin, accessToken } = useAuth();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Solid Pearls",
    price: "",
    description: "",
    tag: "",
    stock: 0,
    images: [],
  });

  const categories = [
    "Solid Pearls",
    "Interference Pearls",
    "Carbon Pearls",
    "OEM+ Pearls",
    "Special Effect Pearls",
    "Chroma Pearls",
  ];

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await fetchProducts(accessToken);
      setProducts(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin) loadProducts();
  }, [isAdmin]);

  const handleSave = async () => {
    try {
      setError("");
      setSuccess("");

      if (!newProduct.name || !newProduct.price || newProduct.images.length === 0) {
        throw new Error("Name, price & at least one image required");
      }

      await createProduct(newProduct, accessToken);
      setSuccess("Product created successfully");

      setNewProduct({
        name: "",
        category: "Solid Pearls",
        price: "",
        description: "",
        tag: "",
        stock: 0,
        images: [],
      });

      setIsAdding(false);
      loadProducts();
    } catch (e) {
      setError(e.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await deleteProduct(id, accessToken);
      loadProducts();
    } catch (e) {
      setError(e.message);
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <AlertCircle className="h-10 w-10 text-red-500" />
        <p className="ml-4">Admin access only</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading products...
      </div>
    );
  }

  return (
    <div className="bg-[#0b0f14] min-h-screen py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-black">
            PRODUCT <span className="text-sky-500">MANAGEMENT</span>
          </h1>

          <button
            onClick={() => setIsAdding(true)}
            className="bg-sky-500 text-black px-6 py-3 rounded-xl font-bold flex items-center"
          >
            <Plus className="mr-2" /> Add Product
          </button>
        </div>

        {error && <div className="mb-4 bg-red-900/40 p-4 rounded">{error}</div>}
        {success && <div className="mb-4 bg-emerald-900/40 p-4 rounded">{success}</div>}

        {/* ADD PRODUCT MODAL */}
        {isAdding && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-[#121821] p-8 rounded-2xl w-full max-w-2xl">

              <h2 className="text-2xl font-black mb-6">ADD PRODUCT</h2>

              <div className="grid grid-cols-2 gap-4">

                <input
                  placeholder="Name"
                  className="input"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />

                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  className="input"
                >
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>

                <input
                  type="number"
                  placeholder="Price"
                  className="input"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />

                <input
                  type="number"
                  placeholder="Stock"
                  className="input"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                />

                <input
                  placeholder="Tag"
                  className="input col-span-2"
                  value={newProduct.tag}
                  onChange={(e) => setNewProduct({ ...newProduct, tag: e.target.value })}
                />

                <textarea
                  placeholder="Description"
                  className="input col-span-2"
                  rows={3}
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, description: e.target.value })
                  }
                />

                {/* IMAGE UPLOAD */}
                <div className="col-span-2">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        images: Array.from(e.target.files).slice(0, 5),
                      })
                    }
                  />

                  <div className="flex gap-3 mt-3">
                    {newProduct.images.map((file, i) => (
                      <img
                        key={i}
                        src={URL.createObjectURL(file)}
                        className="h-16 w-16 rounded object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setIsAdding(false)}
                  className="px-5 py-2 bg-gray-700 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-sky-500 text-black font-bold rounded"
                >
                  Save
                </button>
              </div>

            </div>
          </div>
        )}

        {/* PRODUCT TABLE */}
        <div className="bg-[#121821] rounded-xl mt-8">
          <table className="w-full">
            <thead className="text-gray-400 text-sm">
              <tr>
                <th className="p-4 text-left">Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id} className="border-t border-gray-800">
                  <td className="p-4">
                    <img
                      src={p.images?.[0]}
                      className="h-14 w-14 object-cover rounded"
                    />
                  </td>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>₹{p.price}</td>
                  <td>{p.stock}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="bg-red-500/20 p-2 rounded"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
