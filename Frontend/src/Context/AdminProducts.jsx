// File: Frontend/src/pages/AdminProducts.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthContext'; // FIX: Removed .jsx extension
import { Plus, Trash2, Edit, Save, X } from 'lucide-react';
// ... rest of file (no changes needed)
const AdminProducts = () => {
    // ... logic (no changes)
    
    // Collection Path (Not used in mock API, but kept for clarity)
    const productCollectionPath = `artifacts/mock-mongo-db/products`;

    useEffect(() => {
        if (!isAdmin) {
            setLoading(false);
            return;
        }
        loadProducts();

        // Simulate real-time updates by periodically reloading (for demo purposes)
        const interval = setInterval(loadProducts, 5000); 
        return () => clearInterval(interval);

    }, [isAdmin]);

    // ... rest of file (no changes needed)

    // Handlers for Add/Edit Form
    const handleProductChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async (productToSave) => {
        try {
            await mockSaveProduct(productToSave);
            setEditingProduct(null);
            setIsAdding(false);
            setNewProduct({ name: '', category: 'Solid Pearls', price: 0, image: '', description: '' });
            loadProducts(); // Reload data after save
        } catch (error) {
            console.error("Error saving product:", error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm(`Are you sure you want to delete product ID: ${id}?`)) return;
        try {
            await mockDeleteProduct(id);
            loadProducts(); // Reload data after delete
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };
    
    if (!isAdmin) return <div className="text-center py-20 text-red-500 font-bold">Access Denied: Admin required.</div>;
    if (loading) return <div className="text-center py-20 text-black">Loading Products...</div>;

    const categories = ['Solid Pearls', 'Interference Pearls', 'Carbon Pearls', 'OEM+ Pearls', 'Special Effect Pearls', 'Chroma Pearls'];

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-black text-black italic uppercase">Product Management</h1>
                    <button 
                        onClick={() => { setIsAdding(true); setEditingProduct(null); setNewProduct({ name: '', category: categories[0], price: 0, image: '', description: '' }); }}
                        className="bg-sky-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors flex items-center shadow-md"
                    >
                        <Plus className="h-5 w-5 mr-2" /> Add New Product
                    </button>
                </div>

                {/* Add New Product Form */}
                {isAdding && (
                    <ProductForm 
                        product={newProduct} 
                        categories={categories}
                        onChange={handleProductChange}
                        onSave={handleSave}
                        onCancel={() => setIsAdding(false)}
                        isEditing={false}
                    />
                )}
                
                {/* Product Table */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg mt-8">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-black text-gray-700 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-black text-gray-700 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-black text-gray-700 uppercase tracking-wider">Price (₹)</th>
                                <th className="px-6 py-3 text-left text-xs font-black text-gray-700 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {productsData.map(product => (
                                <tr key={product.id}>
                                    {editingProduct && editingProduct.id === product.id ? (
                                        <ProductEditRow 
                                            product={editingProduct} 
                                            categories={categories}
                                            onSave={handleSave}
                                            onCancel={() => setEditingProduct(null)}
                                            onEditChange={setEditingProduct}
                                        />
                                    ) : (
                                        <>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">{product.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-bold text-black">₹{product.price}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-3">
                                                <button 
                                                    onClick={() => setEditingProduct(product)}
                                                    className="text-sky-600 hover:text-sky-800 transition-colors p-1"
                                                >
                                                    <Edit className="h-5 w-5" />
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(product.id)}
                                                    className="text-red-600 hover:text-red-800 transition-colors p-1"
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                            {productsData.length === 0 && !loading && (
                                <tr>
                                    <td colSpan="4" className="text-center py-10 text-gray-500">No products found. Add your first pigment!</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default AdminProducts;   
// ... rest of component code