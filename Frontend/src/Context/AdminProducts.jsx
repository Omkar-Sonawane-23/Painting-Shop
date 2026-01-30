// File: Frontend/src/Context/AdminProducts.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { API_URL as BACKEND_URL } from '../config';
import { Plus, Trash2, Edit, Save, X, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const API_PRODUCTS_ENDPOINT = `${BACKEND_URL}/products`;

// API Functions
const fetchProducts = async (token) => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    
    const response = await fetch(API_PRODUCTS_ENDPOINT, { headers });
    
    if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`);
    }
    
    return response.json();
};

const createProduct = async (product, token) => {
    if (!token) {
        throw new Error('Authentication required');
    }
    
    const response = await fetch(API_PRODUCTS_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(product)
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `Failed to create product: ${response.status}`);
    }
    
    return response.json();
};

const updateProduct = async (productId, product, token) => {
    if (!token) {
        throw new Error('Authentication required');
    }
    
    const response = await fetch(`${API_PRODUCTS_ENDPOINT}/${productId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(product)
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `Failed to update product: ${response.status}`);
    }
    
    return response.json();
};

const deleteProduct = async (productId, token) => {
    if (!token) {
        throw new Error('Authentication required');
    }
    
    const response = await fetch(`${API_PRODUCTS_ENDPOINT}/${productId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `Failed to delete product: ${response.status}`);
    }
    
    return response.json();
};

const AdminProducts = () => {
    const { isAdmin, accessToken } = useAuth();
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [newProduct, setNewProduct] = useState({ 
        name: '', 
        category: 'Solid Pearls', 
        price: 0, 
        image: '', 
        description: '',
        tag: '',
        stock: 0
    });
    
    const categories = [
        'Solid Pearls',
        'Interference Pearls',
        'Carbon Pearls',
        'OEM+ Pearls',
        'Special Effect Pearls',
        'Chroma Pearls'
    ];
    
    const loadProducts = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await fetchProducts(accessToken);
            setProductsData(data);
        } catch (err) {
            console.error("Error fetching products:", err);
            setError(err.message || 'Failed to load products');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!isAdmin) {
            setLoading(false);
            return;
        }
        loadProducts();
    }, [isAdmin, accessToken]);

    const handleProductChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditingProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async (productToSave) => {
        setError('');
        setSuccess('');
        
        try {
            // Validate required fields
            if (!productToSave.name || !productToSave.category || !productToSave.price) {
                throw new Error('Name, category, and price are required');
            }
            
            if (productToSave._id || productToSave.id) {
                // Update existing product
                const productId = productToSave._id || productToSave.id;
                await updateProduct(productId, productToSave, accessToken);
                setSuccess('Product updated successfully!');
            } else {
                // Create new product
                await createProduct(productToSave, accessToken);
                setSuccess('Product created successfully!');
            }
            
            setEditingProduct(null);
            setIsAdding(false);
            setNewProduct({ 
                name: '', 
                category: 'Solid Pearls', 
                price: 0, 
                image: '', 
                description: '',
                tag: '',
                stock: 0
            });
            
            // Reload products
            await loadProducts();
            
            // Clear success message after 3 seconds
            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            console.error("Error saving product:", err);
            setError(err.message || 'Failed to save product');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm(`Are you sure you want to delete this product?`)) return;
        
        setError('');
        setSuccess('');
        
        try {
            await deleteProduct(id, accessToken);
            setSuccess('Product deleted successfully!');
            await loadProducts();
            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            console.error("Error deleting product:", err);
            setError(err.message || 'Failed to delete product');
        }
    };
    
    if (!isAdmin) {
        return (
            <div className="bg-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-black text-red-500 mb-2">Access Denied</h2>
                    <p className="text-gray-600 mb-4">Admin privileges required.</p>
                    <Link to="/login" className="text-sky-500 hover:text-sky-600 font-bold">
                        Go to Login →
                    </Link>
                </div>
            </div>
        );
    }
    
    if (loading) {
        return (
            <div className="bg-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading Products...</p>
                </div>
            </div>
        );
    }

    return (
  <div className="bg-[#0b0f14] min-h-screen py-16 text-white">
    <div className="max-w-7xl mx-auto px-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-14">
        <div>
          <h1 className="text-5xl font-black tracking-wide">
            PRODUCT <span className="text-sky-500">MANAGEMENT</span>
          </h1>
          <p className="text-gray-400 mt-2">Control inventory & pricing</p>
        </div>

        <div className="flex gap-4">
          <Link
            to="/admin/dashboard"
            className="bg-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/orders"
            className="bg-sky-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-sky-400 transition"
          >
            Orders
          </Link>

          <button
            onClick={() => {
              setIsAdding(true);
              setEditingProduct(null);
            }}
            className="bg-sky-500 text-black px-7 py-3 rounded-xl font-black hover:bg-sky-400 transition flex items-center"
          >
            <Plus className="mr-2" /> Add Product
          </button>
        </div>
      </div>

      {/* ALERTS */}
      {success && (
        <div className="mb-6 bg-emerald-900/40 border border-emerald-500 p-4 rounded-xl">
          {success}
        </div>
      )}
      {error && (
        <div className="mb-6 bg-red-900/40 border border-red-500 p-4 rounded-xl">
          {error}
        </div>
      )}

      {/* ADD FORM MODAL */}
      {isAdding && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50">
          <div className="bg-[#121821] p-8 rounded-2xl border border-sky-500 w-full max-w-2xl">
            <ProductForm
              product={newProduct}
              categories={categories}
              onChange={handleProductChange}
              onSave={handleSave}
              onCancel={() => setIsAdding(false)}
              isEditing={false}
            />
          </div>
        </div>
      )}

      {/* PRODUCT TABLE DARK */}
      <div className="bg-[#121821] border border-gray-800 rounded-2xl overflow-hidden shadow-xl">

        <table className="min-w-full">
          <thead className="bg-black/40 text-gray-400 text-sm uppercase">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Tag</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">

            {productsData.map(product => {
              const id = product._id || product.id;
              const isEditing =
                editingProduct &&
                (editingProduct._id === id || editingProduct.id === id);

              return (
                <tr key={id} className="hover:bg-white/5 transition">

                  {isEditing ? (
                    <ProductEditRow
                      product={editingProduct}
                      categories={categories}
                      onSave={handleSave}
                      onCancel={() => setEditingProduct(null)}
                      onEditChange={handleEditChange}
                    />
                  ) : (
                    <>
                      <td className="p-4">
                        <img
                          src={product.image || "https://placehold.co/64x64/111/555?text=No+Img"}
                          className="h-14 w-14 rounded-xl object-cover"
                        />
                      </td>

                      <td className="p-4 font-semibold">{product.name}</td>

                      <td className="p-4 text-gray-400">{product.category}</td>

                      <td className="p-4 text-sky-400 font-black">
                        ₹{product.price}
                      </td>

                      <td className="p-4 text-gray-400">
                        {product.stock || 0}
                      </td>

                      <td className="p-4">
                        {product.tag && (
                          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-xs">
                            {product.tag}
                          </span>
                        )}
                      </td>

                      <td className="p-4 flex gap-2">
                        <button
                          onClick={() =>
                            setEditingProduct({ ...product, id })
                          }
                          className="bg-white/10 hover:bg-sky-500/20 p-2 rounded-lg"
                        >
                          <Edit size={18} />
                        </button>

                        <button
                          onClick={() => handleDelete(id)}
                          className="bg-red-500/20 hover:bg-red-500/40 p-2 rounded-lg"
                        >
                          <Trash2 size={18} className="text-red-400" />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              );
            })}

            {productsData.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-14 text-gray-400">
                  No products added yet 🚀
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>
  </div>
);

};

// Product Form Component
const ProductForm = ({ product, categories, onChange, onSave, onCancel, isEditing }) => (
  <div className="bg-[#121821] p-8 mb-8 border border-sky-500 shadow-2xl rounded-2xl text-white">

    <h2 className="text-3xl font-black mb-8">
      {isEditing ? (
        <>EDIT <span className="text-sky-500">PRODUCT</span></>
      ) : (
        <>ADD <span className="text-sky-500">PRODUCT</span></>
      )}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* NAME */}
      <div>
        <label className="text-sm font-bold text-gray-400">Product Name *</label>
        <input
          name="name"
          value={product.name}
          onChange={onChange}
          placeholder="Premium Pearl Gold"
          className="w-full mt-1 px-4 py-3 rounded-xl bg-[#0b0f14] border border-gray-700 focus:border-sky-500 outline-none text-white"
        />
      </div>

      {/* CATEGORY */}
      <div>
        <label className="text-sm font-bold text-gray-400">Category *</label>
        <select
          name="category"
          value={product.category}
          onChange={onChange}
          className="w-full mt-1 px-4 py-3 rounded-xl bg-[#0b0f14] border border-gray-700 focus:border-sky-500 outline-none text-white"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* PRICE */}
      <div>
        <label className="text-sm font-bold text-gray-400">Price (₹) *</label>
        <input
          name="price"
          type="number"
          value={product.price}
          onChange={onChange}
          placeholder="1499"
          className="w-full mt-1 px-4 py-3 rounded-xl bg-[#0b0f14] border border-gray-700 focus:border-sky-500 outline-none text-white"
        />
      </div>

      {/* STOCK */}
      <div>
        <label className="text-sm font-bold text-gray-400">Stock</label>
        <input
          name="stock"
          type="number"
          value={product.stock || 0}
          onChange={onChange}
          className="w-full mt-1 px-4 py-3 rounded-xl bg-[#0b0f14] border border-gray-700 focus:border-sky-500 outline-none text-white"
        />
      </div>

      {/* TAG */}
      <div>
        <label className="text-sm font-bold text-gray-400">Tag</label>
        <input
          name="tag"
          value={product.tag || ''}
          onChange={onChange}
          placeholder="Best Seller"
          className="w-full mt-1 px-4 py-3 rounded-xl bg-[#0b0f14] border border-gray-700 focus:border-sky-500 outline-none text-white"
        />
      </div>

      {/* IMAGE */}
      <div>
        <label className="text-sm font-bold text-gray-400">Image URL</label>
        <input
          name="image"
          value={product.image || ''}
          onChange={onChange}
          placeholder="https://..."
          className="w-full mt-1 px-4 py-3 rounded-xl bg-[#0b0f14] border border-gray-700 focus:border-sky-500 outline-none text-white"
        />
      </div>

      {/* DESCRIPTION */}
      <div className="md:col-span-2">
        <label className="text-sm font-bold text-gray-400">Description</label>
        <textarea
          name="description"
          value={product.description || ''}
          onChange={onChange}
          rows="4"
          placeholder="Product details..."
          className="w-full mt-1 px-4 py-3 rounded-xl bg-[#0b0f14] border border-gray-700 focus:border-sky-500 outline-none text-white"
        />
      </div>
    </div>

    {/* ACTION BUTTONS */}
    <div className="flex justify-end gap-4 mt-10">

      <button
        type="button"
        onClick={onCancel}
        className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl font-bold flex items-center transition"
      >
        <X className="w-5 h-5 mr-2" /> Cancel
      </button>

      <button
        type="button"
        onClick={() => onSave(product)}
        className="bg-sky-500 hover:bg-sky-400 text-black px-7 py-3 rounded-xl font-black flex items-center transition shadow-lg"
      >
        <Save className="w-5 h-5 mr-2" />
        {isEditing ? 'Update Product' : 'Save Product'}
      </button>

    </div>
  </div>
);


// Inline Edit Row Component
const ProductEditRow = ({ product, categories, onSave, onCancel, onEditChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onEditChange(prev => ({ ...prev, [name]: value }));
  };

  return (
    <td colSpan="7" className="p-5 bg-[#0b0f14] border-t border-sky-500">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center text-white">

        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="px-4 py-3 rounded-xl bg-[#121821] border border-gray-700 focus:border-sky-500 outline-none"
        />

        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl bg-[#121821] border border-gray-700 focus:border-sky-500 outline-none"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="px-4 py-3 rounded-xl bg-[#121821] border border-gray-700 focus:border-sky-500 outline-none"
        />

        <input
          name="stock"
          type="number"
          value={product.stock || 0}
          onChange={handleChange}
          placeholder="Stock"
          className="px-4 py-3 rounded-xl bg-[#121821] border border-gray-700 focus:border-sky-500 outline-none"
        />

        <input
          name="image"
          value={product.image || ''}
          onChange={handleChange}
          placeholder="Image URL"
          className="px-4 py-3 rounded-xl bg-[#121821] border border-gray-700 focus:border-sky-500 outline-none"
        />

        <div className="flex gap-3">

          <button
            onClick={() => onSave({ ...product, _id: product._id || product.id })}
            className="bg-emerald-500 hover:bg-emerald-400 text-black p-3 rounded-xl transition shadow-lg"
            title="Save"
          >
            <Save className="h-5 w-5" />
          </button>

          <button
            onClick={onCancel}
            className="bg-red-500 hover:bg-red-400 text-black p-3 rounded-xl transition shadow-lg"
            title="Cancel"
          >
            <X className="h-5 w-5" />
          </button>

        </div>
      </div>
    </td>
  );
};


export default AdminProducts;
